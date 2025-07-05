import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronUp, FiChevronDown, FiCircle } = FiIcons;

const SectionGuide = ({ sections }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(index);
          }
        }
      });

      // Hide guide when at very top or bottom
      const isAtTop = window.scrollY < 100;
      const isAtBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 100;
      setIsVisible(!isAtTop && !isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const goToPrevious = () => {
    if (currentSection > 0) {
      scrollToSection(sections[currentSection - 1].id);
    }
  };

  const goToNext = () => {
    if (currentSection < sections.length - 1) {
      scrollToSection(sections[currentSection + 1].id);
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 bg-white/90 backdrop-blur-md rounded-full shadow-lg p-2"
    >
      <div className="flex flex-col items-center space-y-2">
        {/* Previous Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goToPrevious}
          disabled={currentSection === 0}
          className={`p-2 rounded-full transition-colors ${
            currentSection === 0 
              ? 'text-sage-300 cursor-not-allowed' 
              : 'text-sage-600 hover:text-lavender-600 hover:bg-lavender-50'
          }`}
        >
          <SafeIcon icon={FiChevronUp} className="h-4 w-4" />
        </motion.button>

        {/* Section Indicators */}
        <div className="flex flex-col space-y-1">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              whileHover={{ scale: 1.2 }}
              onClick={() => scrollToSection(section.id)}
              className={`p-1 rounded-full transition-colors ${
                index === currentSection
                  ? 'text-lavender-600'
                  : 'text-sage-300 hover:text-sage-600'
              }`}
              title={section.name}
            >
              <SafeIcon 
                icon={FiCircle} 
                className={`h-2 w-2 ${index === currentSection ? 'fill-current' : ''}`} 
              />
            </motion.button>
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goToNext}
          disabled={currentSection === sections.length - 1}
          className={`p-2 rounded-full transition-colors ${
            currentSection === sections.length - 1 
              ? 'text-sage-300 cursor-not-allowed' 
              : 'text-sage-600 hover:text-lavender-600 hover:bg-lavender-50'
          }`}
        >
          <SafeIcon icon={FiChevronDown} className="h-4 w-4" />
        </motion.button>
      </div>

      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-sage-800 text-white px-3 py-1 rounded-lg text-sm font-lato whitespace-nowrap"
      >
        {sections[currentSection]?.name}
      </motion.div>
    </motion.div>
  );
};

export default SectionGuide;