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
            I'm a frontend developer passionate about bridging the gap between design and engineering. With a strong foundation in modern web technologies and an eye for aesthetics, I build scalable applications that don't just work—they feel right.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            My approach is rooted in simplicity, performance, and accessibility. Whether it's a complex dashboard or a marketing site, I focus on delivering seamless user experiences through clean architecture and intentional design.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
