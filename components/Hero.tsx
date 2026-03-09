'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';

const roles = ['UI/UX Designer', 'Software Engineer', 'Full-stack Developer'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/mathildahere', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/mathilda-dellanova', label: 'LinkedIn' },
    { icon: FaMedium, href: 'https://medium.com/@MathildaDellanova', label: 'Medium' },
    { icon: FaEnvelope, href: 'mailto:mathilda.here@gmail.com', label: 'Email' },
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(currentRole.slice(0, displayed.length + 1));
        if (displayed.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(currentRole.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-pink-accent/20 rounded-full blur-3xl animate-orb-float pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-accent/20 rounded-full blur-3xl animate-orb-float-delay pointer-events-none" />
      <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-purple-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl w-full text-center animate-fade-in">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="gradient-text">Mathilda Dellanova</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl mb-8 h-10">
          <span className="gradient-text-subtle">{displayed}</span>
          <span className="animate-blink text-pink-accent ml-0.5">|</span>
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
