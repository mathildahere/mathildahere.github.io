'use client';

const lines = [
  "Hi, I'm Mathilda — a CS/IS graduate who enjoys working at the intersection of design and technology.",
  "I'm most comfortable when translating ideas into something tangible: user needs ⟶ interfaces, designs ⟶ clean code, complex requirements ⟶ systems that actually work in real contexts.",
  "I've worked in both enterprise and fast-paced project environments, where I learned the importance of clarity, maintainability, and collaboration. I care deeply about details — not just how something looks, but how it feels to use, how easy it is to maintain, and how well it supports real workflows.",
  "I'm currently looking to grow further and I'm always open to collaborating, learning, and building meaningful things together! :)",
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Terminal window */}
        <div className="bg-dark-card rounded-lg border border-dark-border overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-dark-border/50 border-b border-dark-border">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-2 text-xs text-gray-500">about.md</span>
          </div>

          {/* Body */}
          <div className="p-6 space-y-4 text-sm leading-relaxed">
            {lines.map((line, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <span className="shrink-0 gradient-text-subtle font-bold select-none mt-px">▶</span>
                <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-200">
                  {line}
                </p>
              </div>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <span className="gradient-text-subtle font-bold select-none">▶</span>
              <span className="animate-blink text-gray-500 font-thin text-lg">|</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
