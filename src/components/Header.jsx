import { useContext } from 'react';
import { SiteContext } from '../contexts/SiteContext';

const Header = () => {
  const { darkMode, toggleDarkMode, toggleLang, lang } = useContext(SiteContext);

  return (
    <header className="flex justify-between items-center w-full relative z-50">
      
      {/* ========================== SOL BÖLÜM // İSİM ========================== */}
      <div className="font-[700] text-[30px] text-[#CBF281] font-inter mt-[60px] md:mt-8">
        Doğuşcan
      </div>

      {/* ========================== SAĞ BÖLÜM // DİL VE TEMA ========================== */}
      <div className="flex items-center justify-center gap-[30px] w-[45%] md:w-[30%] min-w-max">
        
        {/* Dil */}
        <button
          onClick={toggleLang}
          className="bg-transparent border-none cursor-pointer font-inter font-[600] text-[20px] tracking-[0.1em]"
        >
          {lang === 'tr' ? (
            <span className="text-[#CBF281]">SWITCH ENGLISH</span>
          ) : (
            <div className="flex gap-1 uppercase">
              <span className="text-[#CBF281]">TÜRKÇE</span>
              <span className="text-[#777777]">'YE GEÇ</span>
            </div>
          )}
        </button>

        {/* Tema */}
        <div className="flex items-center gap-[10px] cursor-pointer" onClick={toggleDarkMode}>
          <div className={`w-[55px] h-[24px] rounded-[100px] relative transition-colors duration-300 ${darkMode ? 'bg-[#3A3A3A]' : 'bg-[#8F88FF]'}`}>
            <div className={`absolute w-[16px] h-[16px] bg-[#FFE86E] rounded-full top-[4px] transition-all duration-300 ${darkMode ? 'left-[34px]' : 'left-[5px]'}`} />
          </div>
          <span className={`font-inter font-[700] text-[20px] tracking-[0.1em] ${darkMode ? 'text-[#D9D9D9]' : 'text-[#4731D3]'}`}>
            {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
          </span>
        </div>

      </div>
    </header>
  );
};

export default Header;