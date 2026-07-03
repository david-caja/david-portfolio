const Contact = () => {
  return (
    <section className="py-24 px-6 bg-darkBg text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center md:text-left">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Colonne gauche : Informations avec effet de survol */}
          <div className="space-y-6">
            {[
              { icon: "📍", text: "Lomé, Togo" },
              { icon: "📞", text: "+228 79 78 70 02" },
              { icon: "✉️", text: "cajafreest@gmail.com" }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group flex items-center gap-4 bg-[#0e0e0e] p-6 rounded-2xl border border-slate-800 hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,149,0.05)]"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Colonne droite : Formulaire avec inputs élégants */}
          <form action="https://formspree.io/f/mjgqpwqr" method="POST" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Name" required className="w-full p-4 bg-[#0e0e0e] border border-slate-800 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
              <input type="email" name="email" placeholder="Email" required className="w-full p-4 bg-[#0e0e0e] border border-slate-800 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
            </div>
            <textarea name="message" placeholder="Message" required className="w-full p-4 bg-[#0e0e0e] border border-slate-800 rounded-xl h-40 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"></textarea>
            <button type="submit" className="w-full md:w-auto px-10 py-4 bg-primary text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,255,149,0.3)] hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact