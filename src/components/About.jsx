import davidImg from '../assets/david_1.jpg';

const About = () => {
  return (
    <section className="py-20 bg-darkBg">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Partie Texte */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-white">
            À propos de <span className="text-primary">moi</span>
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Étudiant passionné par l'Intelligence Artificielle et le Big Data. 
            J'aime transformer des données complexes en solutions technologiques innovantes.
          </p>
          <p className="text-gray-300 leading-relaxed">
            En tant que tuteur en sciences, je m'efforce de rendre le savoir accessible 
            tout en continuant à me perfectionner en développement Full-Stack.
          </p>
        </div>
        
        {/* Partie Photo réduite */}
        <div className="flex justify-center md:justify-end">
          <div className="max-w-sm rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl">
            <img 
              src={davidImg} 
              alt="David Winfried" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About