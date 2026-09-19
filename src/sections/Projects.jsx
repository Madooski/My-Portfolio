import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const projectsData = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern, high-performance headless e-commerce store with full cart functionality.',
    tech: ['Next.js', 'React', 'Tailwind', 'Stripe'],
    live: '#',
    repo: '#'
  },
  {
    title: 'Financial Dashboard',
    description: 'Real-time data visualization dashboard with customizable widgets and reports.',
    tech: ['React', 'Redux Toolkit', 'Framer Motion', 'Chart.js'],
    live: '#',
    repo: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding projects-section">
      <div className="grid-container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Selected Works
          </motion.h2>
        </div>
        
        <div className="projects-content">
          {projectsData.map((project, index) => (
            <motion.article 
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.repo} className="project-link" aria-label="Github Repository">
                  <GithubIcon />
                </a>
                <a href={project.live} className="project-link" aria-label="Live Demo">
                  <ExternalLink />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
