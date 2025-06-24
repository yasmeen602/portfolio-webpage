const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Git", "Firebase"];

const Skills = () => (
  <section id="skills" className="p-10">
    <h2 className="text-3xl font-semibold mb-4">Skills</h2>
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, idx) => (
        <span key={idx} className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded">{skill}</span>
      ))}
    </div>
  </section>
);

export default Skills;
