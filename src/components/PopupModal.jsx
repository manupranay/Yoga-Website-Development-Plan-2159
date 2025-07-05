import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiArrowRight } = FiIcons;

const PopupModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('popupShown');
    if (popupShown) {
      setHasBeenShown(true);
      return;
    }

    let timeoutId;
    let scrollHandler;

    const showPopup = () => {
      if (!hasBeenShown) {
        setIsVisible(true);
        setHasBeenShown(true);
        sessionStorage.setItem('popupShown', 'true');
      }
    };

    // Show after 45 seconds
    timeoutId = setTimeout(showPopup, 45000);

    // Show when user scrolls 50% down
    scrollHandler = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 50 && !hasBeenShown) {
        showPopup();
        window.removeEventListener('scroll', scrollHandler);
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [hasBeenShown]);

  const closePopup = () => {
    setIsVisible(false);
  };

  const handleCTAClick = () => {
    window.open('mailto:hi@fridaypr.com?subject=Website Journey - Sama Yoga Template', '_blank');
    closePopup();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-sage-100 transition-colors duration-200"
              aria-label="Close popup"
            >
              <SafeIcon icon={FiX} className="h-5 w-5 text-sage-600" />
            </button>

            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-lavender-50 via-white to-sage-50 opacity-50"></div>
            
            {/* Content */}
            <div className="relative p-8 pt-12">
              {/* Decorative Element */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lavender-400 via-sage-400 to-beige-400"></div>
              
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-lavender-500 to-sage-500 rounded-full flex items-center justify-center">
                  <svg 
                    className="w-8 h-8 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-2xl font-playfair font-bold text-sage-800 text-center mb-4 leading-tight">
                Your practice deserves a digital space this peaceful.
              </h2>

              {/* Body */}
              <p className="text-sage-600 font-lato text-center mb-6 leading-relaxed">
                If this design speaks to your soul, imagine what a personalized site could do for your brand.
              </p>
              
              <p className="text-sage-600 font-lato text-center mb-8 leading-relaxed">
                Let's co-create a website your clients will love as much as your classes.
              </p>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCTAClick}
                className="w-full bg-gradient-to-r from-lavender-600 to-sage-600 hover:from-lavender-700 hover:to-sage-700 text-white py-4 px-6 rounded-full font-lato font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Start Your Website Journey</span>
                <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
              </motion.button>

              {/* Subtle branding */}
              <p className="text-xs text-sage-400 text-center mt-4 font-lato">
                hi@fridaypr.com
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;