import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useState } from 'react';

const projects = [
  { id: 1, title: "Sprachia", desc: "application d'apprentissage de langue.", img: "/src/assets/sprachia_1.jpg", tags: ["React", "Fast API" ,"Superbaser"] },
  { id: 2, title: "Kontext Explorer", desc: "Recherche sémantique (6M de phrases).", img: "/src/assets/sprachia_2.jpg", tags: ["Embeding", "Qdrant" , "Sentence transformer"] },
  { id: 3, title: "Shadowing AI", desc: "Analyse de prononciation.", img: "/src/assets/sprachia_3.jpg", tags: ["wishper", "STT"] },
  { id: 4, title: "Video Analyzer", desc: "Analyse TikTok/Reels via IA.", img: "/src/assets/sprachia_4.jpg", tags: ["LLM"] },
  { id: 5, title: "Tuteur IA", desc: "Appel video avec IA ", img: "/src/assets/sprachia_7.jpg", tags: ["STT", "TTS"] },
];

const Portfolio = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section className="py-24 bg-darkBg text-white px-6">
      <h2 className="text-4xl font-bold mb-16 text-center">
        Projet phare : <span className="text-primary">Sprachia</span>
      </h2>
      
      {/* Grille : 3 colonnes sur desktop, 2 sur tablette, 1 sur mobile */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((proj) => (
          <div key={proj.id} className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,149,0.1)]">
            
            {/* Zoom au clic */}
            <div className="cursor-pointer">
              <img 
                src={proj.img} 
                alt={proj.title} 
                onClick={() => window.open(proj.img, '_blank')} 
                className="w-full h-56 object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{proj.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{proj.desc}</p>
              <div className="flex gap-2">
                {proj.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] bg-black border border-slate-700 text-slate-300 px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;