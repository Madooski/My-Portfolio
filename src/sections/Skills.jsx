import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = [
  { category: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'] },
  { category: 'Frameworks & Libraries', items: ['React.js', 'Next.js'] },
  { category: 'Styling & Animations', items: ['Tailwind CSS', 'Bootstrap', 'Framer Motion'] },
  { category: 'State Management', items: ['Context API', 'Redux Toolkit'] },
  { category: 'Tools & Workflow', items: ['Git & GitHub', 'REST APIs', 'Vercel', 'Netlify'] }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="grid-container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Technical Arsenal
          </motion.h2>
        </div>

        <div className="skills-content">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className="skill-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="skill-category">{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.items.map(item => (
                  <li key={item} className="skill-item">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
