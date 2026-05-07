import { useContext } from 'react';
import { SiteContext } from '../contexts/SiteContext';
import pizzaImg from '../assets/pizza.png'; 
import portfolioImg from '../assets/portfolio.png'; // Yeni görseli import ettik

const Projects = () => {
  const { content, darkMode } = useContext(SiteContext);
  
  if (!content?.projects) return null;

  const projectImages = [pizzaImg, portfolioImg];

  return (
    <section id="projects" className={`w-full py-[20px] transition-colors duration-300 ${
      darkMode ? 'bg-[#1A210B]' : 'bg-[#CBF281]'
    }`}>
      {/* ==================================== TEMAYA GÖRE DÜZENLEME ==================================== */}
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
        <h2 className={`text-[60px] font-extrabold mb-[60px] font-inter tracking-tight ${
          darkMode ? 'text-[#CBF281]' : 'text-[#4731D3]'
        }`}>
          {content.projects.title}
        </h2>
        
        <div className="flex flex-col gap-[50px] w-full">
          {content.projects.list.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-row items-stretch rounded-[12px] overflow-hidden w-full border transition-all duration-300 ${
                darkMode 
                  ? 'bg-[#2D2E36] border-gray-700 shadow-[0_20px_50px_rgba(0,0,0,0.3)]' 
                  : 'bg-white border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)]'
              }`}
            >
              {/* ==================================== PROJE GÖRSELLERİ ==================================== */}
              <div className="flex-shrink-0 w-2/5 relative min-h-[400px]">
                <img 
                  src={projectImages[index]} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>

              {/* ==================================== PROJE İÇERİKLERİ ==================================== */}
              <div className="w-3/5 px-[40px] lg:px-[60px] py-[80px] flex flex-col justify-between min-w-0">
                {/* PROJE BAŞLIK VE AÇIKLAMALARI */}
                <div>
                  <h3 className={`text-[28px] lg:text-[32px] font-bold mb-[20px] font-inter ${
                    darkMode ? 'text-[#C1BAFF]' : 'text-[#4731D3]'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-[16px] lg:text-[18px] leading-[1.6] mb-[24px] font-inter ${
                    darkMode ? 'text-white' : 'text-[#6B7280]'
                  }`}>
                    {project.description}
                  </p>
                  
                  {/* KULLANILAN TEKNOLOJİLER */}
                  <div className="flex flex-wrap gap-[8px] mb-[30px]">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className={`px-[18px] py-[6px] rounded-[6px] text-[14px] font-bold font-inter inline-block ${
                          darkMode ? 'bg-[#8173DA] text-white' : 'bg-[#4731D3] text-white'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* PROJE LİNKLERİ*/}
                <div className="flex gap-[32px] items-center">
                  {project.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={`text-[18px] font-bold underline font-inter transition-opacity hover:opacity-70 ${
                        darkMode ? 'text-[#CBF281]' : 'text-[#4731D3]'
                      }`}
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;