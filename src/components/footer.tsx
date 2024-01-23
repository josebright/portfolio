export default function Footer () {
  // Get the current year
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white text-center py-3">
      <p>
       Copyright &copy; {year} UBU ❤️
      </p>
    </footer>
  )
}