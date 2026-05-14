import React, { useEffect, useMemo, useRef, useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const initialFormValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
}

const validateForm = (values) => {
    const errors = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!values.name.trim()) {
        errors.name = 'Name is required.'
    }

    if (!values.email.trim()) {
        errors.email = 'Email is required.'
    } else if (!emailPattern.test(values.email.trim())) {
        errors.email = 'Please enter a valid email address.'
    }

    if (!values.message.trim()) {
        errors.message = 'Message is required.'
    }

    return errors
}

const ContactUs = () => {
    const contactSectionRef = useRef(null)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [touchedFields, setTouchedFields] = useState({})
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')

    const errors = useMemo(() => validateForm(formValues), [formValues])
    const isFormValid = Object.keys(errors).length === 0

    const getFieldError = (fieldName) => {
        return (touchedFields[fieldName] || hasSubmitted) ? errors[fieldName] : ''
    }

    useEffect(() => {
        if (!successMessage || !contactSectionRef.current) {
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    setSuccessMessage('')
                }
            },
            { threshold: 0.15 }
        )

        observer.observe(contactSectionRef.current)

        return () => observer.disconnect()
    }, [successMessage])

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormValues((currentValues) => ({
            ...currentValues,
            [name]: value,
        }))

        if (successMessage) {
            setSuccessMessage('')
        }
    }

    const handleBlur = (event) => {
        const { name } = event.target

        setTouchedFields((currentFields) => ({
            ...currentFields,
            [name]: true,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setHasSubmitted(true)
        setTouchedFields({
            name: true,
            email: true,
            message: true,
        })

        if (!isFormValid) {
            setSuccessMessage('')
            return
        }

        setIsLoading(true)
        setSuccessMessage('')

        setTimeout(() => {
            setIsLoading(false)
            setSuccessMessage('Thanks! Your message has been sent successfully.')
            setFormValues(initialFormValues)
            setTouchedFields({})
            setHasSubmitted(false)
        }, 900)
    }

    const inputClassName =
      " w-full px-4 py-2 mt-2 text-gray-300  rounded-full bg-transparent formBorder-gradient  focus:outline-none focus:ring-0 active:outline-none rounded-none";
    const messageClassName =
      " w-full px-4 py-2 mt-2 text-gray-300  rounded-full bg-transparent formBorder-gradient  focus:outline-none focus:ring-0 active:outline-none rounded-none";

    return (
        <div id='contact' ref={contactSectionRef} className='container mx-auto'>
            <div className='lg:flex lg:px-32 gap-x-10 '>
                <div className=' flex-grow'>    
                    <section className="w-full bg-gradient-to-l  from-[#110D2E]/30  to-[#fc466a4a]/10  rounded-md shadow-md  p-16">
                        <div className='flex flex-col mb-10 justify-center items-center'>
                            <h2 className="text-2xl font-semibold  capitalize text-white">Drop Us Your Message</h2>
                            <p className='text-gray-400 '>Freely contact with us anytime. We're available here for you.</p>
                        </div>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-2">
                                <div className='col-span-2 lg:col-span-1'>
                                    <label htmlFor="name" className="block text-lg text-gray-100 mb-2">Name *</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className={inputClassName}
                                        placeholder='Full Name'
                                        value={formValues.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-invalid={Boolean(getFieldError('name'))}
                                        aria-describedby="name-error"
                                        required
                                    />
                                    {getFieldError('name') && (
                                        <p id="name-error" className="mt-2 pl-4 text-sm text-[#FC466B]">{getFieldError('name')}</p>
                                    )}
                                </div>

                                <div className='col-span-2 lg:col-span-1'>
                                    <label htmlFor="email" className="block text-lg text-gray-100 mb-2">Email *</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className={inputClassName}
                                        placeholder='Your Email'
                                        value={formValues.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-invalid={Boolean(getFieldError('email'))}
                                        aria-describedby="email-error"
                                        required
                                    />
                                    {getFieldError('email') && (
                                        <p id="email-error" className="mt-2 pl-4 text-sm text-[#FC466B]">{getFieldError('email')}</p>
                                    )}
                                </div>

                                <div className='col-span-2'>
                                    <label htmlFor="subject" className="block text-lg text-gray-100 mb-2">Subject</label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        className={inputClassName}
                                        placeholder='Select Subject'
                                        value={formValues.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='col-span-2 '>
                                    <label htmlFor="message" className="block text-lg text-gray-300 mb-2">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className={messageClassName}
                                        placeholder='Message...'
                                        rows={5}
                                        value={formValues.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-invalid={Boolean(getFieldError('message'))}
                                        aria-describedby="message-error"
                                        required
                                    />
                                    {getFieldError('message') && (
                                        <p id="message-error" className="mt-2 pl-4 text-sm text-[#FC466B]">{getFieldError('message')}</p>
                                    )}
                                </div>
                            </div>

                            {successMessage && (
                                <p className="mt-5 rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-300">{successMessage}</p>
                            )}

                            <div className="flex justify-start mt-6">
                                <button
                                    type="submit"
                                    disabled={!isFormValid || isLoading}
                                    className="px-6 py-2 rounded-full bg-[#6318F1] text-white hover:shadow-lg hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FC466B]/70 focus:ring-offset-2 focus:ring-offset-[#110D2E] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-[#6318F1] duration-200"
                                >
                                    {isLoading ? 'Sending...' : 'Send Messages'}
                                </button>
                            </div>
                        </form>
                    </section>
                </div>


                <div className='  lg:w-[22%] flex flex-col items-center justify-center mx-16 formBorder-gradient border'>

                    <div className='flex flex-1 flex-col items-center justify-around '>      
                      <div className='flex flex-col justify-center items-center py-4'>
                      <FaPhoneAlt size={44} className='text-blue-700 my-4'/>
                        <div className='text-white text-lg py-1'>Phone</div>
                        <div className='text-gray-400 text-lg'>0310 - 7756294</div>
                      </div>
                        <hr className='w-32 align-bottom bg-gradient-to-r h-[1px] from-[#FC466B] to-[#3F5EFB] '/>
                    </div>

                   
                    <div className='flex flex-1 flex-col items-center justify-around '>      
                      <div className='flex flex-col justify-center items-center py-4'>
                      <MdMarkEmailUnread size={44} className='text-blue-700 my-4'/>
                        <div className='text-white text-lg py-1'>Email</div>
                        <div className='text-gray-400 text-lg'>0310 - 7756294</div>
                      </div>
                        <hr className='w-32 align-bottom bg-gradient-to-r h-[1px] from-[#FC466B] to-[#3F5EFB] '/>
                    </div>

                    
                    <div className='flex flex-1 flex-col items-center justify-around '>      
                      <div className='flex flex-col justify-center items-center py-4'>
                      <FaLocationDot size={44} className='text-blue-700 my-4'/>
                        <div className='text-white text-lg py-1'>Location</div>
                        <div className='text-gray-400 text-lg'>0310 - 7756294</div>
                      </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default ContactUs