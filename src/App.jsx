import { useContext, useEffect } from 'react';
import { SiteContext } from './contexts/SiteContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import axios from 'axios';

function App() {
  const { darkMode, content, lang } = useContext(SiteContext);

  useEffect(() => {
    axios.post('https://reqres.in/api/workintech', content)
      .then(response => {
        console.log("API Entegrasyonu Başarılı!");
        console.log("Gönderilen Veri:", response.data);
      })
      .catch(error => {
        console.error("API Hatası:", error);
      });
  }, [lang, content]);

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      {/* ========================== 1. BÖLÜM // HEADER & HERO ========================== */}
      <div className="relative w-full">
        {/* Arka Plan Katmanı */}
        <div className="absolute top-0 left-0 w-full h-full flex z-0">
          <div className={`w-[70%] h-full ${darkMode ? 'bg-[#171043]' : 'bg-[#4731D3]'}`}></div>
          <div className={`w-[30%] h-full ${darkMode ? 'bg-[#1a103d]' : 'bg-[#CBF281]'}`}></div>
        </div>
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-20 lg:px-32 pt-[40px]">
            <Header />
          </div>
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-20 lg:px-32 pt-[100px]">
            <Hero />
          </div>
        </div>

      {/* ========================== 2. BÖLÜM // SKILLS ========================== */}
      <div className={`${darkMode ? 'bg-[#252128]' : 'bg-white'} w-full`}>
        <Skills />
      </div>

      {/* ========================== 3. BÖLÜM // PROFILE ========================== */}
      <div className={`${darkMode ? 'bg-[#171043]' : 'bg-[#4731D3]'} w-full`}>
        <Profile />
      </div>

      {/* ========================== 4. BÖLÜM // PROJECTS ========================== */}
      <div className={`${darkMode ? 'bg-[#1a103d]' : 'bg-[#CBF281]'} w-full`}>
        <Projects />
      </div>
      {/* ========================== 5. BÖLÜM // FOOTER ========================== */}
      <Footer />
    </div>
  );
}

export default App;