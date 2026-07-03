const News = () => {
  return (
    <section className="py-20 px-6 bg-darkBg">
      <h2 className="text-3xl font-bold mb-12 text-center text-white">Autres projets</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-slate-900 p-6 rounded-lg shadow-sm border-l-4 border-primary">
          <span className="text-sm text-primary font-semibold">risque de crédit banquaire</span>
          <h3 className="text-xl font-bold mt-1 text-white">systheme de recommandation de film</h3>
          <p className="text-gray-400 mt-2">
            prédiction du prix de voiture
          </p>
        </div>
      </div>
    </section>
  )
}

export default News