const certs = [
  { title: "HTML & CSS", url: "https://www.dropbox.com/scl/fi/v0pe3li18unqz0mzbhysu/Yasmeen-Tabassum_HTML-AND-CSS_FUHT76D0.pdf" },
  { title: "JavaScript", url: "https://www.dropbox.com/scl/fi/pugo60trjv5aqp8126kbv/Yasmeen-Tabassum_JAVASCRIPT_FUJA76D0.pdf" },
  { title: "MongoDB & NodeJS", url: "https://www.dropbox.com/scl/fi/85ejiwq4me4gdzjz1pg2g/Yasmeen-Tabassum_MONGO-DB-AND-NODEJS_FUMO76D0.pdf" },
  { title: "ReactJS", url: "https://www.dropbox.com/scl/fi/w27j0yhgth10xxntdcx9e/Yasmeen-Tabassum_REACTJS_FURE76D0.pdf" },
  { title: "Unified Mentor Internship", url: "https://www.dropbox.com/scl/fi/ntalsrea220rr28z32o7p/Certificate-1.pdf" }
];

const Certifications = () => (
  <section id="certifications" className="p-10">
    <h2 className="text-3xl font-semibold mb-4">Certifications</h2>
    <ul className="list-disc list-inside">
      {certs.map((cert, idx) => (
        <li key={idx}>
          <a href={cert.url} target="_blank" className="text-blue-600 underline">{cert.title}</a>
        </li>
      ))}
    </ul>
  </section>
);

export default Certifications;
