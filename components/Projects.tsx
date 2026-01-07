'use client';

import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Features real-time inventory updates and order tracking.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=450&fit=crop',
      link: 'https://example.com/project1',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with drag-and-drop functionality, team collaboration features, and real-time updates using WebSockets.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&h=450&fit=crop',
      link: 'https://figma.com/project2',
      tags: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
    },
    {
      id: 3,
      title: 'Portfolio Design System',
      description: 'A comprehensive design system with reusable components, style guides, and documentation. Built for consistency across multiple projects.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop',
      link: 'https://figma.com/project3',
      tags: ['Figma', 'React', 'Storybook', 'CSS'],
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with real-time data, 7-day forecast, interactive maps, and location-based weather alerts. Responsive design for all devices.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=450&fit=crop',
      link: 'https://example.com/project4',
      tags: ['React', 'API', 'Chart.js', 'Tailwind'],
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with metrics visualization, post scheduling, and engagement tracking across multiple platforms.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
      link: 'https://example.com/project5',
      tags: ['Next.js', 'PostgreSQL', 'Chart.js', 'API'],
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
