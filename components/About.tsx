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
            Hi, I’m Mathilda — a CS/IS graduate who enjoys working at the intersection of design and technology.
          </p>
          <p>
            I’m most comfortable when translating ideas into something tangible: user needs ⟶ interfaces, 
            designs ⟶ clean code, complex requirements ⟶ systems that actually work in real contexts.
          </p>
          <p>
            I’ve worked in both enterprise and fast-paced project environments, where I learned the importance of clarity, 
            maintainability, and collaboration. I care deeply about details — not just how something looks, but how it feels to use, 
            how easy it is to maintain, and how well it supports real workflows.
          </p>
          <p>
            I’m currently looking to grow further and I’m always open to collaborating, learning, and building meaningful things together!
          </p>
        </div>
      </div>
    </section>
  );
}
