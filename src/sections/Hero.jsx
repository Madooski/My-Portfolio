import { motion } from 'framer-motion';
import profileImg from '../assets/Ma.webp';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">

        {/* LEFT — Profile Image */}
        <motion.div
          className="hero-image-col"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hero-image-frame">
            <img
              src={profileImg}
              alt="Osolobugwemado — Frontend Developer"
              className="hero-image"
              width="480"
              height="580"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </motion.div>

        {/* RIGHT — Text Content */}
        <div className="hero-text-col">
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            Osolobugwemado.<br />
            <span className="accent-text">Frontend Dev.</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            I craft fast, accessible, and highly refined web interfaces with strong product sense.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
          >
            <a href="#projects" className="btn btn-primary">Selected Works</a>
            <a href="#contact" className="btn btn-secondary">Get in touch</a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
