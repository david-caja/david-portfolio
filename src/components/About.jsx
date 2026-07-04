import davidImg from '../assets/david_1.jpg';

const ProgressBar = ({ name, level, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-white font-medium">{name}</span>
      <span className="text-gray-400 text-sm">{level}</span>
    </div>
    <div className="w-full bg-slate-800 rounded-full h-2.5">
      <div className="bg-primary h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const SkillCard = ({ title, description }) => (
  <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-primary transition-all">
    <div className="text-primary mb-3 text-2xl">⚡</div>
    <h3 className="text-white font-bold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const ApproachStep = ({ number, title, description, tags }) => (
  <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 relative">
    <div className="absolute -top-4 left-8 bg-primary text-white font-bold w-10 h-10 flex items-center justify-center rounded-lg shadow-lg">
      {number}
    </div>
    <h3 className="text-xl font-bold text-white mt-4 mb-4">{title}</h3>
    <p className="text-gray-400 text-sm mb-6 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span key={i} className="px-3 py-1 bg-slate-800 text-gray-300 text-xs rounded-full border border-slate-700">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const About = () => {
  return (
    <section className="py-20 bg-darkBg">
      {/* Section About Me */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-20">
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
        <div className="flex justify-center md:justify-end">
          <div className="max-w-sm rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl">
            <img src={davidImg} alt="David Winfried" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>

      {/* Section Expertise Technique */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold text-center text-white mb-2">Compétences & Technologies</h2>
        <p className="text-center text-gray-400 mb-12">Un aperçu des technologies et outils que j'utilise pour créer des solutions innovantes.</p>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-6">Langages de Programmation</h3>
            <ProgressBar name="Python" level="Avancé" percentage={90} />
            <ProgressBar name="JavaScript" level="Intermédiaire" percentage={75} />
            <ProgressBar name="Java & PHP" level="Intermédiaire" percentage={60} />
            <ProgressBar name="SQL" level="Intermédiaire" percentage={70} />
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-6">Technologies & Frameworks</h3>
            <div className="flex flex-wrap gap-3">
              {['React', 'FastAPI', 'Supabase', 'TensorFlow', 'MySQL', 'React native'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-slate-800 text-primary rounded-lg border border-slate-700 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <SkillCard title="Intelligence Artificielle" description="Machine Learning, NLP, TTS, Systèmes de recommandation et visualisation de données." />
          <SkillCard title="DevOps & Cloud" description="AWS, power bi, déploiement et gestion d'infrastructures cloud." />
          <SkillCard title="Stratégie Digitale" description="marketing digital, gestion de projet agile et design d'expérience utilisateur." />
        </div>
      </div>

      {/* Nouvelle Section : Mon Approche */}
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-primary text-center font-semibold mb-2">Mon Approche</p>
        <h2 className="text-3xl font-bold text-center text-white mb-12">Voici comment je travaille</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ApproachStep 
            number="01" 
            title="Recherche & Planification" 
            description="Compréhension des besoins, choix des technologies et définition de l'architecture optimale."
            tags={["Analysis", "Architecture"]}
          />
          <ApproachStep 
            number="02" 
            title="Développement & Intégration" 
            description="Construction d'applications robustes avec des modèles IA/ML et connectivité IoT."
            tags={["Development", "Integration"]}
          />
          <ApproachStep 
            number="03" 
            title="Déploiement & Optimisation" 
            description="Lancement des solutions et optimisation des performances basée sur l'utilisation réelle."
            tags={["Deployment", "Optimization"]}
          />
        </div>
      </div>
    </section>
  )
}

export default About