const News = () => {
  return (
    <section className="py-20 px-6 bg-darkBg">
      <h2 className="text-3xl font-bold mb-12 text-center text-white">Autres projets</h2>
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="bg-slate-900 p-6 rounded-lg shadow-sm border-l-4 border-primary">
          <p className="text-sm text-primary font-semibold">prediction du risque de crédit banquaire</p>
          <p className="text-gray-400 mt-2">systeme de recommandation de film</p>
          <p className="text-gray-400 mt-2">
            prédiction du prix de voiture
          </p>
        </div>
      </div>
    </section>
  )
}

export default News