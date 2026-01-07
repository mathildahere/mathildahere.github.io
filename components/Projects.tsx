'use client';

import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'NaraTrad',
      description: 'A stok management application for traditional markets, featuring inventory tracking, sales reporting, and supplier management functionalities.',
      image: '/projects/naratrad.png',
      link: '',
      tags: ['Springboot', 'Angular', 'API'],
    },
    {
      id: 2,
      title: 'SENADA: Sumber Niaga Administrasi dan Data',
      description: 'A comprehensive web application for managing procurement and administrative processes in educational institutions, streamlining workflows and enhancing data accuracy.',
      image: '/projects/senada.png',
      link: 'https://sumberniagahdp.com',
      tags: ['Django', 'Next.js', 'PostgreSQL'],
    },
    {
      id: 3,
      title: 'SIAP: Sistem Informasi Administrasi dan Pengendalian Mutu',
      description: 'Web-based IS developed to support administrative processes, survey implementation, and inventory management at one of the biggest survey company in Indonesia.',
      image: '/projects/siap.png',
      link: 'https://youtu.be/rbXwCLVmSEw?si=5yYVdQgpD-RLU5Pv',
      tags: ['Figma','Django', 'Next.js', 'Railway'],
    },
    {
      id: 4,
      title: 'FOSS Faculty Website',
      description: 'Revamp faculty website by implementing responsive layouts and headless Content Management System',
      image: '/projects/foss-website.png',
      link: 'https://soc.uiii.ac.id/',
      tags: ['TypeScript', 'CMS', 'Figma'],
    },
    {
      id: 5,
      title: 'Seken',
      description: 'Indonesian thrifting app where user can buy and sell second-hand with ease and security.',
      image: '/projects/seken.png',
      link: 'https://drive.google.com/file/d/1O_Rt6sOpSEazvTRtpbjAbIU5_VjJghHe/view?usp=drive_link',
      tags: ['React.js', 'Figma'],
    },
    {
      id: 6,
      title: 'LansiaSehat',
      description: 'Health-focused mobile-app designed specifically for the elderly to ensure communication with their relatives and healthcare professional.',
      image: '/projects/lansiasehat.png',
      link: 'https://drive.google.com/file/d/117H49XUwgh-T3ZYwWPz3rBgVXBzBTNu5/view?usp=drive_link',
      tags: ['Figma'],
    },
    {
      id: 7,
      title: 'MyBlueBird Case Study',
      description: 'Enhancing the order feature of MyBlueBird app to improve user experience and streamline the ordering process for customers.',
      image: '/projects/mybluebird.png',
      link: 'https://drive.google.com/file/d/14PpkN9Rm62bCxFnrLZ67kr3oFwBi8mrK/view?usp=drive_link',
      tags: ['Figma'],
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-dark-card rounded-lg overflow-hidden border border-dark-border hover:border-pink-accent transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <FaExternalLinkAlt className="text-pink-accent w-5 h-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-pink-accent/10 text-pink-light rounded-full border border-pink-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-pink-accent/10 text-pink-accent border border-pink-accent rounded-lg hover:bg-pink-accent hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
