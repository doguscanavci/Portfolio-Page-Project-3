import { useContext } from 'react';
import { SiteContext } from '../contexts/SiteContext';

const Skills = () => {
  const { content, darkMode, lang } = useContext(SiteContext);
  if (!content?.skills) return null;

  return (
    <section className={`w-full py-[80px] border-b transition-colors duration-300 ${
      darkMode ? 'bg-[#1A210B] border-[#BAB2E7]/10' : 'bg-white border-[#BAB2E7]'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-row items-start justify-between">
          {/* ==================================== BAŞLIK ==================================== */} 
          <div className="w-[30%]">
            <h2 className={`text-[64px] font-bold font-inter tracking-tight leading-none ${
              darkMode ? 'text-[#CBF281]' : 'text-[#4832D3]'
            }`}>
              {lang === 'tr' ? 'Yetenekler' : 'Skills'}
            </h2>
          </div>
          {/* ==================================== YETENEKLER LİSTESİ ==================================== */}
          <div className="w-[90%] grid grid-cols-2 gap-x-[120px] gap-y-[60px] mt-[50px]">
            {content.skills.map((skill) => (
              <div key={skill.name} className="flex items-center gap-12">
                <div className="w-[120px] h-[120px] flex-shrink-0 mr-[40px]">
                  <img
                    src={new URL(`../assets/${skill.img}`, import.meta.url).href}
                    alt={skill.name}
                    className="w-full h-full object-contain rounded-[12px]"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/120?text=Skill'; }}
                  />
                </div>
                <span className={`text-[24px] font-[600] uppercase font-inter tracking-wide ${
                  darkMode ? 'text-[#CBF281]' : 'text-[#777777]'
                }`}>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;