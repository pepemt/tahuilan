export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-zinc-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-white font-bold text-lg tracking-tight">
              tahuilan<span className="text-green-500">.</span>com
            </span>
            <p className="text-zinc-500 text-sm">
              Modern websites for modern businesses.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-zinc-500 hover:text-white text-sm transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-zinc-500 hover:text-white text-sm transition-colors"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-zinc-500 hover:text-white text-sm transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-zinc-500 hover:text-white text-sm transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-900 text-center">
          <p className="text-zinc-600 text-xs">
            &copy; {new Date().getFullYear()} tahuilan.com. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
