import { useContext } from 'react';
import { SiteContext } from '../contexts/SiteContext';
import { data } from '../data';

import profilImg from '../assets/profil.png';
import githubIcon from '../assets/Github.png';
import linkedinIcon from '../assets/Linkedin.png';

const Hero = () => {
  const { lang } = useContext(SiteContext);
  const heroData = data[lang]?.hero;

  if (!heroData) return null;

  const separator = lang === 'tr' ? "Geliştiricisiyim..." : "Developer...";

  const titleParts = heroData.title?.includes(separator) 
    ? heroData.title.split(separator) 
    : [heroData.title, ""];

  return (
    <section className="w-full mt-[60px] pb-[240px] relative">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-[35px]">
          {/* ==================================== BAŞLIK ==================================== */} 
          <h1 className="text-[72px] font-[700] leading-[1.1] text-[#CBF281] m-0 font-inter antialiased">
            {titleParts[0]?.trim()} <br /> {separator}
          </h1>
          {/* ==================================== AÇIKLAMA ==================================== */}
          <p className="text-white font-normal text-[32px] leading-[1.5] m-0 font-inter antialiased max-w-[820px]">
            {heroData.description}
          </p>
          {/* ==================================== LİNK BUTONLARI ==================================== */}
          <div className="flex gap-[12px]">
            {heroData.buttons.map((btn, index) => (
              <a 
                key={index}
                href={btn.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-[10px] px-[20px] py-[16px] bg-white border border-[#3730A3] rounded-[12px] no-underline text-[#3730A3] font-[500] text-[24px] font-inter shrink-0 hover:bg-gray-100 transition-colors"
              >
                <img 
                  src={btn.text === "GitHub" ? githubIcon : linkedinIcon} 
                  alt={btn.text} 
                  className="w-[40px] h-[40px] object-contain block" 
                />
                <span className="leading-none">{btn.text}</span>
              </a>
            ))}
          </div>
        </div>
        {/* ==================================== GÖRSEL ALANI ==================================== */}
        <div className="relative w-[375px] h-[400px] shrink-0 translate-x-[-200px] translate-y-[60px]">
          <img 
            src={profilImg} 
            alt="Profile"
            className="w-full h-full object-cover rounded-[18px] z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;