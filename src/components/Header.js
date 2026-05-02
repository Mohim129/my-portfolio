export default function Header() {
  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-8 h-20">
        <div className="text-xl font-extrabold tracking-tighter text-indigo-600 dark:text-indigo-400">
          Portfolio
        </div>
        <nav className="hidden md:flex items-center gap-8 font-headline-sm text-sm font-medium tracking-tight">
          <a
            className="text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400 pb-1"
            href="#about"
          >
            About
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-colors"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-colors"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-colors"
            href="#contact"
          >
            Contact
          </a>
        </nav>
        <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold hover:opacity-80 transition-all duration-200 active:scale-95">
          Let's Talk
        </button>
      </div>
    </header>
  );
}
