'use client';

import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/mathildahere', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/mathilda-dellanova', label: 'LinkedIn' },
    { icon: FaMedium, href: 'https://medium.com/@MathildaDellanova', label: 'Medium' },
    { icon: FaEnvelope, href: 'mailto:mathilda.here@gmail.com', label: 'Email' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl w-full text-center animate-fade-in">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="gradient-text">Mathilda Dellanova</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-8">
          UI/UX Designer, Software Engineer 
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-accent transition-all duration-300 transform hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce mt-16">
          <a href="#about" className="text-gray-500 hover:text-pink-accent transition-colors">
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
