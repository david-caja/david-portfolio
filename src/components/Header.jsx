const Header = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-darkBg">
      <div className="text-xl font-bold text-white"></div>
      <ul className="flex gap-8 text-white">
        <li className="hover:text-primary cursor-pointer transition-colors">Accueil</li>
        <li className="hover:text-primary cursor-pointer transition-colors">À propos</li>
        <li className="hover:text-primary cursor-pointer transition-colors">Projets</li>
        <li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
      </ul>
    </nav>
  )
}

export default Header