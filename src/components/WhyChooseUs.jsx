import { FiArrowRight } from "react-icons/fi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { HiOutlineUsers } from "react-icons/hi2";
import { TbUsersGroup } from "react-icons/tb";

const features = [
  {
    title: "Senior Engineers",
    desc: "Top 5% vetted developers with real production experience",
    icon: HiOutlineUsers,
    accent: "from-[#B44CFF] to-[#7C3BFF]",
    border: "border-[#A847FF]",
    iconColor: "text-[#C050FF]",
    iconBg: "from-[#340C5C] to-[#130938]",
    cardShadow: "shadow-[0_0_16px_rgba(168,71,255,0.32)]",
  },
  {
    title: "Fast Delivery",
    desc: "Rapid execution with optimized workflows",
    icon: HiOutlineRocketLaunch,
    accent: "from-[#3F5EFB] to-[#22A4FF]",
    border: "border-[#3F7DFF]",
    iconColor: "text-[#2697FF]",
    iconBg: "from-[#141F5E] to-[#0C0F37]",
    cardShadow: "shadow-[0_0_16px_rgba(63,125,255,0.32)]",
  },
  {
    title: "Scalable Teams",
    desc: "Easily scale teams based on project needs",
    icon: TbUsersGroup,
    accent: "from-[#35E7E4] to-[#34B4FE]",
    border: "border-[#35E7E4]",
    iconColor: "text-[#35E7E4]",
    iconBg: "from-[#103D5A] to-[#09152E]",
    cardShadow: "shadow-[0_0_16px_rgba(53,231,228,0.32)]",
  },
  {
    title: "Secure by Design",
    desc: "Security-first architecture and implementation",
    icon: IoShieldCheckmarkOutline,
    accent: "from-[#FC466B] to-[#D946EF]",
    border: "border-[#FC4DB4]",
    iconColor: "text-[#FC466B]",
    iconBg: "from-[#410E48] to-[#1C092F]",
    cardShadow: "shadow-[0_0_16px_rgba(252,77,180,0.32)]",
  },
];

const WhyChooseUsCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <article
      className={`group relative h-[370px] w-full max-w-[300px] overflow-hidden rounded-2xl border bg-[#080429]/80 p-[1px] transition-all duration-300 hover:-translate-y-2 ${feature.border} ${feature.cardShadow}`}
    >
      <div className="relative flex h-full w-full flex-col items-center rounded-2xl bg-[#070326]/95 px-6 pb-12 pt-8 text-center">
        <div
          className={`absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t ${feature.accent} opacity-10 blur-2xl`}
        />
        <div className="absolute inset-x-8 bottom-0 h-14 bg-[radial-gradient(circle,_rgba(255,255,255,0.32)_1px,_transparent_1px)] bg-[length:10px_10px] opacity-20" />

        <div
          className={`relative mb-6 rounded-2xl bg-gradient-to-br ${feature.accent} p-[1px] shadow-lg`}
        >
          <div className={`rounded-2xl bg-gradient-to-br ${feature.iconBg} p-5`}>
            <Icon className={`h-[60px] w-[60px] ${feature.iconColor}`} />
          </div>
        </div>

        <h3 className="relative text-2xl font-semibold text-white">
          {feature.title}
        </h3>
        <div
          className={`relative my-5 h-[3px] w-12 rounded-full bg-gradient-to-r ${feature.accent}`}
        />
        <p className="relative max-w-[190px] text-lg leading-6 text-gray-400">
          {feature.desc}
        </p>
      </div>
    </article>
  );
};

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-20 text-white lg:py-28"
      aria-labelledby="why-choose-us-title"
    >
      <div className="absolute -left-28 -top-32 h-[350px] w-[350px] rounded-full border border-[#E10DCA]/55 bg-[radial-gradient(circle_at_center,_rgba(225,13,202,0.18)_0%,_rgba(99,24,241,0.1)_38%,_rgba(7,3,38,0.02)_68%)]" />
      <div className="absolute -bottom-44 -right-20 h-[400px] w-[400px] rounded-full border border-[#E10DCA]/55 bg-[radial-gradient(circle_at_center,_rgba(225,13,202,0.18)_0%,_rgba(99,24,241,0.1)_38%,_rgba(7,3,38,0.02)_68%)]" />
      <div className="absolute right-[7%] top-20 hidden h-28 w-24 bg-[radial-gradient(circle,_rgba(132,72,255,0.55)_3.5px,_transparent_3.5px)] bg-[length:24px_24px] opacity-30 lg:block" />
      <div className="absolute bottom-10 left-[6%] hidden h-28 w-24 bg-[radial-gradient(circle,_rgba(132,72,255,0.55)_3.5px,_transparent_3.5px)] bg-[length:24px_24px] opacity-30 lg:block" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-20">
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center">
          <span className="mb-5 rounded-full bg-gradient-to-r from-[#B44CFF] via-[#6318F1] to-[#1E73FF] p-[1px]">
            <span className="block rounded-full bg-[linear-gradient(90deg,rgba(41,7,67,0.96)_0%,rgba(8,13,44,0.98)_100%)] px-9 py-2.5 text-[17px] font-bold uppercase leading-none tracking-[0.24em] text-white shadow-[inset_0_0_18px_rgba(180,76,255,0.2)] sm:px-10">
              Why Choose Us
            </span>
          </span>
          <h2
            id="why-choose-us-title"
            className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            Why Companies{" "}
            <span className="bg-gradient-to-r from-[#B44CFF] via-[#3F5EFB] to-[#35E7E4] bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>
          <p className="mt-5 text-2xl text-gray-300">
            We deliver scalable, secure, and future-ready solutions.
          </p>
          <div className="mt-6 h-2 w-40 rounded-full bg-gradient-to-r from-[#B44CFF] via-[#3F5EFB] to-[#35E7E4]" />
        </div>

        <div className="grid grid-cols-1 justify-center justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <WhyChooseUsCard
              key={feature.title}
              feature={feature}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <button
            type="button"
            className="group inline-flex items-center gap-4 rounded-xl border-2 border-b-0 border-[#8A48B6] bg-gradient-to-r from-[#542CFD] to-[#C505A9] px-8 py-4 text-lg font-semibold text-white shadow-[0_14px_38px_rgba(99,24,241,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(225,13,202,0.35)] focus:outline-none focus:ring-2 focus:ring-[#35E7E4] focus:ring-offset-2 focus:ring-offset-[#050023]"
          >
            Start Your Project
            <FiArrowRight className="h-5 w-7 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <p className="text-lg text-gray-400">
            Let's build something amazing together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
