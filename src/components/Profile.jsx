import { useContext } from 'react';
import { SiteContext } from '../contexts/SiteContext';
import ortamImg from '../assets/ortam.png';

const Profile = () => {
  const { content, darkMode } = useContext(SiteContext);
  if (!content?.profile) return null;

  return (
    <section className={`w-full pt-[40px] pb-[80px] ${darkMode ? 'bg-[#171043]' : 'bg-[#4731D3]'}`}>
      {/* ==================================== BAŞLIK ==================================== */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h2 className="text-[64px] font-bold text-[#CBF281] mb-[60px] font-inter tracking-tight">
          {content.profile.title}
        </h2>
        {/* ==================================== TEMEL BİLGİLER ==================================== */}  
        <div className="grid grid-cols-[1.1fr_450px_1.3fr] gap-[50px] items-start">
          <div className="flex flex-col gap-[15px]">
            <h3 className="text-[36px] text-white mb-[25px] font-medium font-inter leading-none -mt-[8px]">
              {content.profile.basicInfoTitle}
            </h3>
            <div className="flex flex-col gap-[40px]">
              {content.profile.details.map((detail, index) => (
                <div key={index} className="grid grid-cols-[180px_1fr] items-baseline">
                  <span className="text-[#CBF281] font-medium text-[22px]">{detail.label}</span>
                  <span className="text-white text-[22px] font-light">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
          {/* ==================================== GÖRSEL ALANI ==================================== */} 
          <div className="relative">
             <div className="absolute top-[20px] left-[20px] w-full h-full bg-[#7487C5] rounded-[12px] -z-10 opacity-40"></div>
             <img src={ortamImg} alt="Profile" className="w-full h-[380px] object-cover rounded-[12px] relative z-10 shadow-xl" />
          </div>
          {/* ==================================== HAKKIMDA YAZISI ==================================== */} 
          <div className="flex flex-col pl-[60px]"> 
            <h3 className="text-[36px] text-white mb-[10px] font-medium font-inter leading-none -mt-[4px]">
              {content.profile.aboutTitle}
            </h3>
            <p className="text-white text-[22px] leading-[1.6] font-light opacity-95 max-w-[750px]">
              {content.profile.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;