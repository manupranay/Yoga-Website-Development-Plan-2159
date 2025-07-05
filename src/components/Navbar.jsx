import React, {useState, useEffect, useRef} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiMenu, FiX} = FiIcons;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    {
      name: 'Home',
      path: '/',
      preview: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Welcome to Sama Yoga'
    },
    {
      name: 'About',
      path: '/about',
      preview: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Meet Maya - Your instructor'
    },
    {
      name: 'Classes',
      path: '/classes',
      preview: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Explore our yoga classes'
    },
    {
      name: 'Schedule',
      path: '/schedule',
      preview: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Weekly class schedule'
    },
    {
      name: 'Pricing',
      path: '/pricing',
      preview: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Choose your perfect plan'
    },
    {
      name: 'Testimonials',
      path: '/testimonials',
      preview: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Student success stories'
    },
    {
      name: 'Gallery',
      path: '/gallery',
      preview: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Photos from our community'
    },
    {
      name: 'Contact',
      path: '/contact',
      preview: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Get in touch with us'
    }
  ];

  const handleNavClick = () => {
    setIsOpen(false);
    setHoveredItem(null);
    // Scroll to top when navigating
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.nav
      ref={menuRef}
      initial={{y: -100}}
      animate={{y: 0}}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2" onClick={handleNavClick}>
            <motion.div
              whileHover={{scale: 1.05}}
              className={`text-2xl font-playfair font-bold transition-colors duration-300 ${
                scrolled ? 'text-sage-800' : 'text-lavender-300'
              }`}
            >
              Sama Yoga
            </motion.div>
          </Link>

          {/* Hamburger menu button */}
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${
                scrolled ? 'text-sage-700 hover:text-lavender-600' : 'text-lavender-300 hover:text-beige-200'
              }`}
            >
              <SafeIcon icon={isOpen ? FiX : FiMenu} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -20}}
              transition={{duration: 0.2}}
              className="bg-white/95 backdrop-blur-md border-t border-sage-200 rounded-b-lg shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
                {/* Navigation Links */}
                <div className="lg:col-span-1 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={handleNavClick}
                      onMouseEnter={() => setHoveredItem(item)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`block px-3 py-2 font-lato font-medium transition-colors duration-200 rounded-lg ${
                        location.pathname === item.path
                          ? 'text-lavender-600 bg-lavender-50'
                          : 'text-sage-700 hover:text-lavender-600 hover:bg-lavender-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Preview Panel */}
                <div className="lg:col-span-2 hidden lg:block">
                  <AnimatePresence mode="wait">
                    {hoveredItem ? (
                      <motion.div
                        key={hoveredItem.name}
                        initial={{opacity: 0, x: 20}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -20}}
                        transition={{duration: 0.2}}
                        className="bg-sage-50 rounded-lg p-4 h-full min-h-[200px] flex flex-col justify-center"
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            src={hoveredItem.preview}
                            alt={hoveredItem.name}
                            className="w-24 h-24 object-cover rounded-lg shadow-md"
                          />
                          <div className="flex-1">
                            <h3 className="text-2xl font-playfair font-bold text-sage-800 mb-2">
                              {hoveredItem.name}
                            </h3>
                            <p className="text-sage-600 font-lato text-sm leading-relaxed">
                              {hoveredItem.description}
                            </p>
                            <motion.div
                              initial={{width: 0}}
                              animate={{width: '100%'}}
                              className="h-1 bg-lavender-300 rounded-full mt-3"
                            />
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        className="bg-gradient-to-br from-lavender-50 to-sage-50 rounded-lg p-6 h-full min-h-[200px] flex flex-col justify-center items-center text-center"
                      >
                        <div className="text-sage-400 mb-3">
                          <SafeIcon icon={FiMenu} className="h-12 w-12" />
                        </div>
                        <h3 className="text-lg font-playfair font-semibold text-sage-700 mb-2">
                          Hover over a menu item
                        </h3>
                        <p className="text-sage-500 font-lato text-sm">
                          See a preview of each page before navigating
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Preview */}
                <div className="lg:hidden">
                  <AnimatePresence mode="wait">
                    {hoveredItem && (
                      <motion.div
                        key={hoveredItem.name}
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        transition={{duration: 0.2}}
                        className="bg-sage-50 rounded-lg p-3 mt-2"
                      >
                        <div className="flex items-center space-x-3">
                          <img
                            src={hoveredItem.preview}
                            alt={hoveredItem.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h4 className="font-playfair font-semibold text-sage-800 mb-1">
                              {hoveredItem.name}
                            </h4>
                            <p className="text-xs text-sage-600 font-lato">
                              {hoveredItem.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;