const skills = [
  { name: "JavaScript", icon: "javascript", mt: "" },
  { name: "React.js", icon: "javascript", mt: "mt-8" }, // Note: icon name was 'javascript' in HTML too
  { name: "Node.js", icon: "terminal", mt: "" },
  { name: "AWS Cloud", icon: "cloud", mt: "mt-8" },
  { name: "PostgreSQL", icon: "database", mt: "" },
  { name: "Tailwind", icon: "css", mt: "lg:mt-8" },
  { name: "Figma UI", icon: "design_services", mt: "" },
  { name: "TypeScript", icon: "integration_instructions", mt: "mt-8" },
  { name: "Docker", icon: "deployed_code", mt: "lg:mt-0" },
  { name: "GraphQL", icon: "monitoring", mt: "mt-8" },
];

export default function Skills() {
  return (
    <section className="py-section-padding bg-surface-container-low" id="skills">
      <div className="max-w-[1280px] mx-auto px-8 text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg mb-4">
          Mastered Tech Stack
        </h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
          Specialized in the React ecosystem and cloud-native architectures to
          deliver scalable solutions.
        </p>
      </div>
      <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`floating-stack-item bg-white p-8 rounded-2xl flex flex-col items-center justify-center text-center gap-4 border border-outline/10 ${skill.mt}`}
          >
            <span className="material-symbols-outlined text-4xl text-primary">
              {skill.icon}
            </span>
            <span className="font-label-md">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
