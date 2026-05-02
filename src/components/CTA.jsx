export default function CTA() {
  return (
    <section className="py-section-padding bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="bg-primary-container rounded-[48px] p-16 md:p-24 text-center relative overflow-hidden">
          {/* Geometric Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-10 -mb-10"></div>
          <h2 className="font-display-xl text-display-xl text-white mb-8 relative z-10">
            Ready to launch your <br />
            next project?
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed max-w-2xl mx-auto mb-12 relative z-10">
            Let's collaborate on building something remarkable. My expertise in
            high-performance engineering is ready for your vision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <button className="bg-white text-primary font-bold px-12 py-5 rounded-2xl hover:scale-105 transition-transform shadow-xl">
              Contact Me
            </button>
            <button className="bg-primary text-white border-2 border-white/20 font-bold px-12 py-5 rounded-2xl hover:bg-white/10 transition-all">
              Download Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
