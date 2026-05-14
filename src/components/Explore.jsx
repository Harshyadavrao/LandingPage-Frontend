import React, { useState } from 'react'
import Cards from './Cards'
import { FaRegFolderOpen } from 'react-icons/fa';
import health from '../assets/CGI/health.png'; 
import robotics from '../assets/CGI/robotics.png'; 
import casino from '../assets/CGI/casino.png'; 
import contruction from '../assets/CGI/contruction.png'; 
import influencer from '../assets/CGI/influencer.png'; 
import NFT from '../assets/CGI/NFT.png'; 
import survey from '../assets/CGI/survey.png'; 
import sports from '../assets/CGI/sports.png'; 
import shoes from '../assets/CGI/shoes.png'; 
import portfolio from '../assets/CGI/portfolio.png'; 


const filters = ['All', 'Web', 'Mobile', 'AI', 'Blockchain'];

const explorecards = [
  {
    heading: 'Health Care',
    img: health,
    category: 'Mobile',
  },
  {
    heading: 'Robotics',
    img: robotics,
    category: 'AI',
  },
  {
    heading: 'Casino Game',
    img: casino,
    category: 'Web',
  },
  {
    heading: 'Construction',
    img: contruction,
    category: 'AI',
  },
  {
    heading: 'Influencer',
    img: influencer,
    category: 'Mobile',
  },
  {
    heading: 'NFT Platform',
    img: NFT,
    category: 'Web',
  },
  {
    heading: 'Survey',
    img: survey,
    category: 'Web',
  },
  {
    heading: 'Sports',
    img: sports,
    category: 'Mobile',
  },
  {
    heading: 'Shoes',
    img: shoes,
    category: 'Web',
  },
  {
    heading: 'Portfolio',
    img: portfolio,
    category: 'Web',
  }
];



const Explore = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCards = activeFilter === 'All'
    ? explorecards
    : explorecards.filter((explore) => explore.category === activeFilter);

  const filterButtonClass = (filter) => (
    `cursor-pointer rounded-lg py-1 px-3 text-sm sm:text-base transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:scale-110 ${
      activeFilter === filter
        ? 'bg-gradient-to-r from-[#FC466B]/60 to-[#3F5EFB]/60 text-white shadow-lg shadow-purple-900/30'
        : 'text-gray-300'
    }`
  );

  const renderCards = (layoutClass) => (
    filteredCards.length > 0 ? (
      <div key={activeFilter} className={layoutClass}>
        {filteredCards.map((explore) => (
          <div key={explore.heading} className='case-study-card'>
            <Cards
              img={explore.img}
              heading={explore.heading}
            />
          </div>
        ))}
      </div>
    ) : (
      <div className='case-study-card mx-auto mt-10 w-full min-w-[300px] max-w-xl rounded-3xl bg-gradient-to-r from-[#FC466B]/70 via-[#6318F1]/70 to-[#3F5EFB]/70 p-[1px] shadow-2xl shadow-purple-950/40'>
        <div className='relative overflow-hidden rounded-3xl bg-[#110D2E]/95 px-6 py-10 text-center text-gray-300 sm:px-10'>
          <div className='absolute -left-16 -top-16 h-32 w-32 rounded-full bg-[#FC466B]/20 blur-2xl'></div>
          <div className='absolute -bottom-20 -right-14 h-36 w-36 rounded-full bg-[#3F5EFB]/20 blur-2xl'></div>

          <div className='relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#FC466B]/40 to-[#3F5EFB]/40 text-3xl shadow-lg shadow-purple-900/30'>
            <FaRegFolderOpen className='text-white' />
          </div>

          <h2 className='relative mt-5 text-2xl font-semibold text-white'>
            No {activeFilter} case studies yet
          </h2>
          <p className='relative mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-400'>
            We do not have any projects in this category right now. Explore all case studies while we add more.
          </p>
          <button
            type='button'
            className='relative mt-6 rounded-full bg-[#6318F1] px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#FC466B]/60 hover:to-[#3F5EFB]/60'
            onClick={() => setActiveFilter('All')}
          >
            View all case studies
          </button>
        </div>
      </div>
    )
  );

  return (
    <>

      <div id='case-study' className='container mx-auto relative '>
        <div className='flex flex-wrap items-center justify-center gap-x-20 gap-y-5 px-4 pt-20 text-white sm:mx-10 lg:mx-20 lg:justify-between lg:px-20 lg:pt-44'>
          <h1 className='text-3xl order-1 md:order-1 text-white font-semibold'>Case Studies</h1>
          <div className='order-3 md:order-2'>

            <ul className='flex flex-wrap lg:gap-x-4 gap-x-2 gap-y-3 items-center justify-center'>
              {filters.map((filter) => (
                <li key={filter}>
                  <button
                    type='button'
                    className={filterButtonClass(filter)}
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={activeFilter === filter}
                  >
                    {filter}
                  </button>
                </li>
              ))}
            </ul>

          </div>

          <div className='order-2 md:order-3'>
            <button className="px-6 py-2 bg-[#6318F1] text-white font-bold rounded-full transition-transform transform-gpu  hover:shadow-lg  hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:scale-105 duration-150">
              Apply Now
            </button>
          </div>

        </div>

        <div className='lg:block hidden'>
          <div className=" absolute inset-0 translate-x-[10px]  top-32 -z-10  bg-gradient-to-b w-80 rounded-full h-96 blur-3xl from-purple-600 opacity-30 via-purple-500 to-purple-400 "></div>
          {renderCards('flex flex-wrap gap-x-10 gap-y-10 mt-10 justify-center px-20 transition-all duration-300')}
        </div>
      </div>

      <div className="lg:hidden xs:flex my-5  overflow-x-scroll no-scrollbar hide-scroll-bar"  >

        {renderCards('flex flex-nowrap gap-x-12 pt-5 px-8 py-10 transition-all duration-300')}

      </div>

    </>

  )
}

export default Explore