export default function Footer() {
  return (
    <footer className="w-full bg-indigo-700 dark:bg-indigo-950 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto px-8 py-16 gap-8">
        <div className="text-lg font-bold text-white uppercase tracking-widest">
          Portfolio
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 font-headline-sm text-sm">
          <a
            className="text-indigo-100/80 hover:text-white transition-colors hover:underline decoration-2 underline-offset-4"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-indigo-100/80 hover:text-white transition-colors hover:underline decoration-2 underline-offset-4"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-indigo-100/80 hover:text-white transition-colors hover:underline decoration-2 underline-offset-4"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="text-indigo-100/80 hover:text-white transition-colors hover:underline decoration-2 underline-offset-4"
            href="#"
          >
            GitHub
          </a>
        </div>
        <p className="text-indigo-100/60 font-headline-sm text-sm">
          © 2024 Tech Expert Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
