'use client';

import { useState } from 'react';
import { FaDownload } from 'react-icons/fa';

export default function Experience() {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      id: 1,
      period: 'Jan 2024 - Present',
      position: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      description: [
        'Led the development of a new design system used across 5+ products, improving development efficiency by 40%',
        'Mentored junior developers and conducted code reviews to maintain high code quality standards',
        'Implemented performance optimizations that reduced page load times by 60%',
        'Collaborated with UX designers to create intuitive and accessible user interfaces',
      ],
    },
    {
      id: 2,
      period: 'Mar 2022 - Dec 2023',
      position: 'Full Stack Developer',
      company: 'StartupHub',
      description: [
        'Built and maintained multiple microservices using Node.js and Express',
        'Developed responsive web applications using React and TypeScript',
        'Implemented CI/CD pipelines using GitHub Actions and Docker',
        'Participated in agile development processes and sprint planning',
      ],
    },
    {
      id: 3,
      period: 'Jun 2021 - Feb 2022',
      position: 'UI/UX Designer',
      company: 'DesignStudio Co.',
      description: [
        'Created wireframes, prototypes, and high-fidelity designs for web and mobile applications',
        'Conducted user research and usability testing to inform design decisions',
        'Collaborated with developers to ensure design implementation accuracy',
        'Maintained and evolved the company\'s design system and brand guidelines',
      ],
    },
    {
      id: 4,
      period: 'Jan 2020 - May 2021',
      position: 'Junior Frontend Developer',
      company: 'WebSolutions Ltd.',
      description: [
        'Developed responsive websites using HTML, CSS, and JavaScript',
        'Worked with React and Vue.js to build interactive user interfaces',
        'Collaborated with backend developers to integrate RESTful APIs',
        'Participated in daily stand-ups and weekly sprint reviews',
      ],
    },
    {
      id: 5,
      period: 'Jul 2019 - Dec 2019',
      position: 'Frontend Development Intern',
      company: 'Innovation Labs',
      description: [
        'Assisted in the development of company website and internal tools',
        'Learned modern web development practices and version control with Git',
        'Fixed bugs and implemented new features under senior developer guidance',
        'Participated in team meetings and contributed to brainstorming sessions',
      ],
    },
  ];

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="space-y-6">
          {displayedExperiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-dark-card p-6 rounded-lg border border-dark-border hover:border-pink-accent transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-pink-light group-hover:text-pink-accent transition-colors">
                    {exp.position}
                  </h3>
                  <p className="text-gray-300 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-400 mt-2 sm:mt-0 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 text-gray-400">
                {exp.description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-pink-accent mr-2 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {experiences.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-pink-accent/10 text-pink-accent border border-pink-accent rounded-lg hover:bg-pink-accent hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              {showAll ? 'Show Less' : 'View All Experience'}
            </button>
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center space-x-2 px-8 py-3 bg-pink-accent text-white rounded-lg hover:bg-pink-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-accent/50"
          >
            <FaDownload />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}
