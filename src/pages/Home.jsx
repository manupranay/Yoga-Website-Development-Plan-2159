import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import SectionGuide from '../components/SectionGuide';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiHeart, FiMonitor, FiSmile, FiChevronRight } = FiIcons;

const Home = () => {
  const sections = [
    { id: 'hero', name: 'Welcome' },
    { id: 'benefits', name: 'Benefits' },
    { id: 'about-teaser', name: 'Meet Maya' },
    { id: 'featured-classes', name: 'Classes' },
    { id: 'testimonials', name: 'Testimonials' },
    { id: 'cta', name: 'Get Started' }
  ];

  const benefits = [
    {
      icon: FiUser,
      title: 'Personalized Coaching',
      description: 'Tailored sessions that meet you where you are in your practice'
    },
    {
      icon: FiHeart,
      title: 'Mind-Body Connection',
      description: 'Develop deeper awareness through mindful movement'
    },
    {
      icon: FiMonitor,
      title: 'Online & In-Person',
      description: 'Flexible options to practice wherever you feel comfortable'
    },
    {
      icon: FiSmile,
      title: 'All Levels Welcome',
      description: 'From beginners to advanced practitioners, everyone belongs'
    }
  ];

  const featuredClasses = [
    {
      name: 'Vinyasa Flow',
      description: 'Dynamic, breath-linked sequences for strength and flexibility',
      duration: '60 min',
      level: 'All Levels'
    },
    {
      name: 'Hatha for Beginners',
      description: 'Gentle introduction to yoga poses and breathing techniques',
      duration: '45 min',
      level: 'Beginner'
    },
    {
      name: 'Morning Stretch',
      description: 'Start your day with energizing, gentle movements',
      duration: '30 min',
      level: 'All Levels'
    },
    {
      name: 'Meditation & Breathwork',
      description: 'Cultivate inner peace through mindfulness practices',
      duration: '30 min',
      level: 'All Levels'
    }
  ];

  const testimonials = [
    {
      text: "Maya's classes helped me regain flexibility and inner calm.",
      author: "Sarah M."
    },
    {
      text: "The online sessions are as good as being in a studio!",
      author: "James K."
    },
    {
      text: "I've never felt more connected to my body and breath.",
      author: "Lisa R."
    }
  ];

  return (
    <div className="min-h-screen">
      <SectionGuide sections={sections} />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-playfair font-bold mb-6"
            >
              Sama Yoga with Maya
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-lato mb-8 text-beige-100"
            >
              Find your balance. Move with intention.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-lavender-600 hover:bg-lavender-700 text-white px-8 py-4 rounded-full font-lato font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Book a Free Trial Class
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-800 mb-6">
              Why Choose Sama Yoga?
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-beige-50 hover:bg-beige-100 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-lavender-100 rounded-full mb-4">
                  <SafeIcon icon={benefit.icon} className="h-8 w-8 text-lavender-600" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-sage-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sage-600 font-lato">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section id="about-teaser" className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Maya practicing yoga"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-playfair font-bold text-sage-800 mb-6">
                Meet Maya
              </h2>
              <p className="text-lg text-sage-600 font-lato mb-6">
                Hi, I'm Maya – a certified yoga instructor with 8+ years of experience 
                helping people reconnect with themselves through movement and mindfulness.
              </p>
              <p className="text-sage-600 font-lato mb-8">
                My journey began during a period of corporate burnout, and through yoga, 
                I found my way back to balance and inner peace. Now, I'm passionate about 
                sharing this transformative practice with others.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center bg-lavender-600 hover:bg-lavender-700 text-white px-6 py-3 rounded-full font-lato font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Me
                <SafeIcon icon={FiChevronRight} className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Classes */}
      <section id="featured-classes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-800 mb-6">
              Featured Classes
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredClasses.map((classItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-beige-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-playfair font-semibold text-sage-800 mb-3">
                  {classItem.name}
                </h3>
                <p className="text-sage-600 font-lato mb-4">
                  {classItem.description}
                </p>
                <div className="flex justify-between text-sm text-sage-500 font-lato">
                  <span>{classItem.duration}</span>
                  <span>{classItem.level}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              to="/classes"
              className="inline-flex items-center bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-full font-lato font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View All Classes
              <SafeIcon icon={FiChevronRight} className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-lavender-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-800 mb-6">
              What Students Say
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <p className="text-sage-600 font-lato mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-sage-800 font-playfair font-semibold">
                  — {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section id="cta" className="py-16 bg-sage-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl font-lato mb-8 text-sage-200">
              Join our next group class or book a 1-on-1 session.
            </p>
            <Link
              to="/schedule"
              className="inline-block bg-lavender-600 hover:bg-lavender-700 text-white px-8 py-4 rounded-full font-lato font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Schedule
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;