import { createContext, useState } from 'react';
import { data } from '../data';

const SiteContext = createContext();

function SiteContextProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [darkMode, setDarkMode] = useState(false);

  const rawData = data[lang] || data['en'];

  // MERKEZİ DÜZENLEME: 
  // Componentler 'skills' dediğinde eğer o yoksa 'yetenekler'i getir diyoruz.
  const content = {
    ...rawData,
    skills: rawData.skills || rawData.yetenekler,
    profile: rawData.profile || rawData.profil,
    projects: rawData.projects || rawData.projeler
  };

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'tr' : 'en'));
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <SiteContext.Provider value={{ content, lang, toggleLang, darkMode, toggleDarkMode }}>
      {children}
    </SiteContext.Provider>
  );
}

export { SiteContext, SiteContextProvider };
export default SiteContextProvider;