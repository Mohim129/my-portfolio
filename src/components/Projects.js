const projects = [
  {
    title: "Omni-Channel Analytics Hub",
    description: "Real-time data processing engine for e-commerce enterprises.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYMFajDpf9pqS03OCArWt7nU119EyCSpUKzhqJ-T_ilqZpuR0UBu_3za_e5oMGAMHsPm_L7GwOsTYRYemQ9DyxtWiXxl-RxWOwpISrBHTxANxwMtct0ZcnKLdauD7TkbPiHCwjGcknSLHSNOzURCHjCESbTFkb4AtI2wd2D9V-VLGj-6kmwngMzB78l_OWxe16vJqn77i1It_S9VsSHdKsSq6Y4DWZ9SYD-DV6kYwMRNbhjlCIgYEercznBiYf_l8rUhK54NV9dIrN",
    tags: ["React", "Node"],
    mt: "",
  },
  {
    title: "CloudOps Automation",
    description: "Simplifying infrastructure deployments with intelligent CI/CD pipelines.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQmeKixr_n590w7JITpLO5w2HH4RshhncXqXJBta3eFe5lxN4DD18v4o_ni5F1N81qBNfu_mmKwMWQhcviiHkQEcrkCX68VsIlwafuDBYvbMS20R6Yo_eI9RxfuOrAgcuNUZ8tDac2HFqZSHtyjCGRwO_4-VW5lhT05zp-Fvn_XX0eOQlkbDDsrYd-nTFNR5IGZ4-kQdfesfGEf7NWe2xTlNF21RbB6hSJKzs7NQmI3vK8Q3txA0zTOAJT8DQmTYst5UorM_SfYO2a",
    tags: ["Next.js", "AWS"],
    mt: "md:mt-16",
  },
  {
    title: "Pulse Health Tracker",
    description: "Custom health monitoring solution with predictive AI insights.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBP5gUuzwFc-u96FxJT5UlezHkrmY4WGV4KSi-cral61ld05TSrtKht6w8u2JHhIOWMSGW7OCtg0ZgIxIBEWIXgDn1awmr8okWpr4VCX8TT0bXPtA07D3w2BChsj_F6iWipEyi8cWnsnrwZifMJdSIOecZ9iFED73W5pc2pc1krrcIwL_t0h_CM03MnSN40CiNRplStqdZxCOC6N8o0SYZKdfkW2jDfMvrmgjOS0g6RRunGk7r3PLttG1T_QCBWcXqbyAipZBcJy6hL",
    tags: ["Native", "Figma"],
    mt: "",
  },
  {
    title: "LuxeCommerce Framework",
    description: "Headless commerce implementation for premium fashion brands.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAfCAaGGiN7lCAfL4FnwKUIs5DBd637JbtiiH2f--0g6ITkarqx-9813GQj2YbkbxqNlFL3XMFXy9RSra_MGajiF3kVuEXhvdvq8teuXJE9A1jevwPIOva5cx9GlhU-_t0jXXyX_tUPymt5Mu8Eux-CtMBCzwi6epJHuF_KiawAf0hnXv-G98vt4qtwliJs_Hm7LQNT-rCLrO1tqH9wuDYfxoDs01G1Qh0PSj5KzEXUZ0eabExGPv-DWaOGlcHtS0gSm6aSg5q54ZS",
    tags: ["Shopify", "Headless"],
    mt: "md:mt-16",
  },
];

export default function Projects() {
  return (
    <section className="py-section-padding bg-surface" id="projects">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-4">
              Selected Projects
            </h2>
            <p className="font-body-md text-on-surface-variant max-w-lg">
              A curated selection of high-impact products developed for global
              clients.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="p-3 rounded-full border border-outline/30 hover:border-primary transition-all">
              <span className="material-symbols-outlined text-primary">
                arrow_back
              </span>
            </button>
            <button className="p-3 rounded-full border border-outline/30 hover:border-primary transition-all">
              <span className="material-symbols-outlined text-primary">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-16">
          {projects.map((project, index) => (
            <div key={index} className={`group ${project.mt}`}>
              <div className="aspect-video rounded-3xl overflow-hidden bg-surface-container relative mb-6">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={project.image}
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">
                {project.title}
              </h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                {project.description}
              </p>
              <a
                className="inline-flex items-center gap-2 text-primary font-bold group-hover:underline"
                href="#"
              >
                View Case Study{" "}
                <span className="material-symbols-outlined">north_east</span>
              </a>
            </div>
          ))}
        </div>
        <div className="mt-20 flex justify-center">
          <button className="group flex items-center gap-3 bg-white border-2 border-primary text-primary font-bold px-12 py-5 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300">
            Next Projects{" "}
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
