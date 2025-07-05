import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import SectionGuide from '../components/SectionGuide';
import * as FiIcons from 'react-icons/fi';

const { FiAward, FiHeart, FiUsers, FiStar } = FiIcons;

const About = () => {
  const sections = [
    { id: 'hero', name: 'About Maya' },
    { id: 'story', name: 'My Story' },
    { id: 'certifications', name: 'Certifications' },
    { id: 'philosophy', name: 'Philosophy' }
  ];

  const certifications = [
    {
      icon: FiAward,
      title: 'RYT-500 Certification',
      description: 'Registered Yoga Teacher with 500+ hours of training'
    },
    {
      icon: FiHeart,
      title: 'Mindfulness Specialist',
      description: 'Advanced training in meditation and breathwork'
    },
    {
      icon: FiUsers,
      title: 'Inclusive Teaching',
      description: 'Specialized in adaptive yoga for all abilities'
    },
    {
      icon: FiStar,
      title: '8+ Years Experience',
      description: 'Helping students transform their practice since 2016'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <SectionGuide sections={sections} />
      
      {/* Hero Section */}
      <section id="hero" className="relative py-20 bg-about-pattern bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6"
          >
            About Maya
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-lato text-beige-100 max-w-2xl mx-auto"
          >
            Certified Yoga Instructor passionate about mindfulness, 
            functional movement, and inclusive teaching
          </motion.p>
        </div>
      </section>

      {/* Bio Section */}
      <section id="story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Maya teaching yoga"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-playfair font-bold text-sage-800 mb-6">
                My Story
              </h2>
              <div className="space-y-4 text-sage-600 font-lato">
                <p>
                  My journey to yoga began in the most unexpected way. After years of 
                  climbing the corporate ladder, I found myself burned out, disconnected, 
                  and searching for something more meaningful.
                </p>
                <p>
                  A friend invited me to a yoga class, and I reluctantly agreed. That 
                  first class changed everything. For the first time in years, I felt 
                  present, grounded, and at peace. The practice became my sanctuary.
                </p>
                <p>
                  I left my corporate career to pursue my passion for yoga and wellness. 
                  I completed my 200-hour training in Rishikesh, India, and later earned 
                  my 500-hour certification specializing in trauma-informed and adaptive yoga.
                </p>
                <p>
                  Today, I'm grateful to share this transformative practice with others, 
                  helping them find their own path to balance, strength, and inner peace.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-800 mb-6">
              Certifications & Expertise
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-lavender-100 rounded-full mb-4">
                  <SafeIcon icon={cert.icon} className="h-8 w-8 text-lavender-600" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-sage-800 mb-2">
                  {cert.title}
                </h3>
                <p className="text-sage-600 font-lato">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-20 bg-lavender-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-800 mb-8">
              My Teaching Philosophy
            </h2>
            <div className="text-lg text-sage-600 font-lato space-y-6">
              <p>
                "Yoga is not about perfection—it's about connection. Connection to your 
                breath, your body, and your inner wisdom. Every body is a yoga body, 
                and every moment is an opportunity to practice presence."
              </p>
              <p>
                I believe in creating a safe, inclusive space where students can explore 
                their practice without judgment. Whether you're taking your first class 
                or you've been practicing for years, my goal is to meet you exactly where 
                you are and support your unique journey.
              </p>
              <p className="text-sage-800 font-playfair font-semibold text-xl italic">
                "The pose is not the point. The awareness is the point."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;