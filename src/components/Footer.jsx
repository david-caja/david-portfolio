const Footer = () => {
  return (
    <footer className="py-10 bg-gray-900 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
      <p className="text-sm text-gray-400 mt-2">Développé avec React et Tailwind CSS</p>
    </footer>
  )
}

export default Footer