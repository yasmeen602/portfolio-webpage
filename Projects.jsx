const projects = [
  { name: "Resume Project", url: "https://github.com/yasmeen602/Resume-2.git" },
  { name: "Java Major Project", url: "https://github.com/yasmeen602/java-project-2.git" },
  { name: "React Project", url: "https://github.com/yasmeen602/-Major-project.git" }
];

const Projects = () => (
  <section id="projects" className="p-10 bg-gray-100">
    <h2 className="text-3xl font-semibold mb-4">Projects</h2>
    <ul className="list-disc list-inside">
      {projects.map((project, i) => (
        <li key={i}>
          <a href={project.url} target="_blank" className="text-blue-600 underline">{project.name}</a>
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;
