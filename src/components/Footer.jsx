import { useContext } from 'react';
import { SiteContext } from '../contexts/SiteContext';

const Footer = () => {
  const { content, darkMode } = useContext(SiteContext);
  if (!content) return null;

  return (
    <footer className={`w-full py-[100px] px-4 ${darkMode ? 'bg-[#252128]' : 'bg-[#F4F4F4]'}`}>
      <div className="max-w-[600px] mx-auto text-center flex flex-col items-center">
        
        {/* MESAJ YAZ BAŞLIĞI */}
        <h2 className={`text-[42px] md:text-[48px] font-bold leading-[1.2] mb-[32px] font-inter ${
          darkMode ? 'text-[#8F88FF]' : 'text-[#4731D3]'
        }`}>
          {content.footer.title}
        </h2>

        {/* MESAJ AÇIKLAMASI */}
        <p className={`text-[24px] md:text-[32px] font-normal leading-[1.3] mb-[48px] font-inter ${
            darkMode ? 'text-white' : 'text-[#1F2937]'
          }`}>
          {content.footer.description}
        </p>

        {/* E-MAIL LİNKİ */}
        <a 
          href={`mailto:${content.footer.email}`} 
          className={`text-[24px] md:text-[36px] font-medium font-inter underline decoration-2 underline-offset-[12px] mb-[48px] block ${
            darkMode ? 'text-[#CBF281]' : 'text-[#4731D3]'
          }`}
        >
          {content.footer.email}
        </a>        
      </div>
    </footer>
  );
};

export default Footer;