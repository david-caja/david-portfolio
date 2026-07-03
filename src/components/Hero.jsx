const Hero = () => {
  return (
    <section className="bg-darkBg min-h-[80vh] flex flex-col justify-center items-center px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-7xl md:text-8xl font-bold text-white mb-4 tracking-tight">
          DZAHINI <span className="text-primary">WINFRIED</span>
        </h1>
        
        <p className="text-2xl text-gray-300 mb-10 font-light tracking-wide">
          Ingénieur IA & Développeur
        </p>

        <button className="px-10 py-4 bg-primary text-black font-bold rounded-full hover:bg-green-400 transition duration-300 shadow-[0_0_20px_rgba(0,255,149,0.2)]">
          me contacter 
        </button>
      </div>
    </section>
  )
}

export default Hero