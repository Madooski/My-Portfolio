import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="grid-container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            About
          </motion.h2>
        </div>

        <div className="about-content">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            I'm, a frontend developer building with React and JavaScript. My path into tech started in Industrial Chemistry — and surprisingly, debugging a broken build isn't so different from debugging a failed experiment: the same instinct for finding where the logic breaks.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            I care about more than making interfaces look good — I pay attention to how they feel, behave, and hold up in the real world..
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
