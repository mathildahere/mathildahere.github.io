'use client';

import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Experience() {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      id: 1,
      period: 'Feb 2026 - Present',
      position: 'Software Engineer Intern',
      company: 'CSG International',
      description: [
        'Working as a Software Engineer Intern at CSG, a US-based global IT solutions company',
      ],
    },
    {
      id: 2,
      period: 'Sep 2025 - Jan 2026',
      position: 'Full-stack Developer Apprentice',
      company: 'LIT Network',
      description: [
        'Selected as one of 3 awardees for the FSD Scholarship Program',
      ],
    },
    {
      id: 3,
      period: 'Jan 2025 - May 2025',
      position: 'Lab Assistant for Programming Foundations II',
      company: 'Faculty of Computer Science, Universitas Indonesia',
      description: [
        'Supervised and graded weekly lab sessions, quizzes, and practical exams, providing guidance and answering student questions on OOP concepts and Java programming',
        'Mentored 11 students through 4 major programming assignments (Tugas Pemrograman), offering support from problem-solving to implementation',
        'Conducted one-on-one code walkthroughs and demo sessions to evaluate understanding and provide personalized feedback',
      ],
    },
    {
      id: 4,
      period: 'Feb 2025 - Apr 2025',
      position: 'Software Engineer and Lead Designer Intern',
      company: 'Universitas Islam Internasional Indonesia (UIII)',
      description: [
        'Redesigned end-to-end Faculty\u2019s website with responsive layouts and accessibility best practices',
        'Deployed a headless Content Management System (CMS), enabling non-technical staff to create, edit, and publish content independently',
      ],
    },
    {
      id: 5,
      period: 'Mar 2024 - Sep 2024',
      position: 'UI/UX Designer Intern',
      company: 'Asuransi Astra',
      description: [
        'Contributed to the interface design for the Revamp Garda Oto and myGarda projects, improving usability and visual consistency',
        'Assisted in organizing and maintaining documentation, component libraries, and style guides in Zeroheight',
        'Created a usability testing platform with Maze for 40+ users, facilitating the collection of actionable insights to inform design improvements',
        'Reviewed user feedback and usability test results, identifying pain points and recommending enhancements to improve product usability and user satisfaction',
      ],
    },
    {
      id: 6,
      period: 'Jan 2024 - Mar 2024',
      position: 'UX Research Intern',
      company: 'Kawan Kerja',
      description: [
        'Conducted user research on websites of Indonesian MSMEs (UMKM) to identify usability issues and improvement opportunities',
        'Designed and developed a landing page to promote a local MSME product in Sukabumi, focusing on user experience, accessibility, and conversion',
      ],
    },
    {
      id: 7,
      period: 'Dec 2023 - Feb 2024',
      position: 'IT Product Staff Intern',
      company: 'Telkom Indonesia',
      description: [
        'Developed interactive dashboards and visualizations for Product Marketing Division to track key performance indicators (KPIs) such as user adoption, system uptime, and support ticket trends',
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-0 w-px bg-gradient-to-b from-pink-accent via-purple-accent to-transparent" />

          <div className="space-y-8">
            {displayedExperiences.map((exp) => (
              <div key={exp.id} className="relative pl-14">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-dark-bg border-2 border-pink-accent flex items-center justify-center group-hover:border-purple-accent transition-colors">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-pink-accent to-purple-accent" />
                </div>

                {/* Period badge */}
                <span className="inline-block text-xs text-purple-light bg-purple-accent/10 border border-purple-accent/20 rounded-full px-3 py-1 mb-3">
                  {exp.period}
                </span>

                {/* Card */}
                <div className="bg-dark-card p-6 rounded-lg border border-dark-border hover:border-pink-accent hover:shadow-lg hover:shadow-pink-accent/10 transition-all duration-300 group">
                  <h3 className="text-lg font-semibold text-pink-light group-hover:text-pink-accent transition-colors mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-gray-300 text-sm font-medium mb-4">{exp.company}</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    {exp.description.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-pink-accent mr-2 mt-0.5 shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {experiences.length > 3 && (
          <div className="text-center mt-10 pl-14">
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
            href="https://drive.google.com/file/d/1H-ucPEfkZUpNpKsOhJ3t2xvL9lPTxJQn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-pink-accent to-purple-accent text-white rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-accent/20"
          >
            <FaExternalLinkAlt />
            <span>View CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}
