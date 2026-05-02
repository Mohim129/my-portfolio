export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md mb-6 uppercase tracking-widest">
            Available for Hire
          </span>
          <h1 className="font-display-xl text-display-xl text-on-surface mb-6">
            Building Digital Experiences through{" "}
            <span className="text-primary">Clean Code.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
            Senior Full-Stack Developer specializing in high-performance web
            applications and intuitive user interfaces. Transformative
            engineering meets aesthetic precision.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-on-primary font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
              View Projects
            </button>
            <button className="border-2 border-primary text-primary font-bold px-10 py-4 rounded-xl hover:bg-primary/5 transition-all">
              Read Resume
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-primary/5 rounded-[40px] -rotate-6 scale-105"></div>
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
            <img
              alt="Portrait of a developer"
              className="w-full h-[600px] object-cover"
              src="https://lh3.googleusercontent.com/aida/ADBb0uietUdwGTl63vjHxPOTnN1bAu92WEdN3O43xXEAb4ycjiujM2A_k9Nt8Dd7mby67hnbfaVO4gc_3bisnBBa6t8XmoVlQCtqMPBhO23i667GeEt84XnkXEsNFnUjrwQKG9OvKlOoCwe8yaAz0a2O0uPZr1D6z7up1vYdCa3CXk6NMh1nbZFoGoC69E_z0k2GDFYjHE9jqGeyO-SHgMuFr88CZiwWk_jxBoJB1zGqV8Q-py7Uulk6ZmeWt-5rCoLxvVFf8PGSn7fxlg8"
            />
          </div>
          {/* Tech Accents */}
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
              <span
                className="material-symbols-outlined text-on-secondary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                code
              </span>
            </div>
            <div>
              <div className="text-sm font-bold text-on-surface">120+ Projects</div>
              <div className="text-xs text-on-surface-variant">
                Completed Successfully
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
