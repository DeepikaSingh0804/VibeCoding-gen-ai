export default function Navbar() {
  return (
    <header className="sticky top-0 bg-[#111827]/80 backdrop-blur-md z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        <h2 className="text-2xl font-bold text-slate-400">
          NextGenAI
        </h2>

        <ul className="hidden md:flex gap-8 text-slate-400">
          <li className="hover:cursor-pointer">Features</li>
          <li className="hover:cursor-pointer">Pricing</li>
          <li className="hover:cursor-pointer">Customers</li>
          <li className="hover:cursor-pointer">Contact</li>
        </ul>

        <button className="bg-emerald-500 text-white px-5 py-2 rounded-full hover:cursor-pointer">
          Get Started
        </button>

      </nav>
    </header>
  );
}

// bg-[#FAF7F2]/80