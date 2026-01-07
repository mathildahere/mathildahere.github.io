'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="text-gray-300 space-y-4 leading-relaxed">
          <p>
            Hello! I'm Mathilda, a passionate software engineer and UI/UX designer based in the digital realm.
            I specialize in creating beautiful, functional, and user-centered digital experiences that make a difference.
          </p>
          <p>
            My journey in tech started with a curiosity about how things work behind the screen, and it has evolved
            into a career dedicated to building elegant solutions to complex problems. I love the intersection of
            design and development, where aesthetics meet functionality.
          </p>
          <p>
            When I'm not coding or designing, you can find me exploring new technologies, contributing to open-source
            projects, or sharing my knowledge through writing. I believe in continuous learning and staying updated
            with the latest trends in the ever-evolving tech landscape.
          </p>
          <p>
            Currently, I'm focused on building accessible, inclusive products that empower users and create meaningful
            experiences. Let's connect and create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}
