import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiInstagram, FiFacebook, FiMail, FiPhone, FiMapPin } = FiIcons;

const Footer = () => {
  const handleNavClick = () => {
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-sage-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <h3 className="text-2xl font-playfair font-bold text-beige-200">
                Sama Yoga with Maya
              </h3>
              <p className="text-sage-200 mt-2 font-lato">
                Find your balance. Move with intention.
              </p>
            </motion.div>
            <p className="text-sage-300 font-lato mb-4">
              Certified yoga instructor helping you reconnect with yourself 
              through mindful movement and breathwork.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-sage-300 hover:text-beige-200 transition-colors"
              >
                <SafeIcon icon={FiInstagram} className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-sage-300 hover:text-beige-200 transition-colors"
              >
                <SafeIcon icon={FiFacebook} className="h-6 w-6" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold text-beige-200 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 font-lato">
              <li>
                <Link
                  to="/about"
                  onClick={handleNavClick}
                  className="text-sage-300 hover:text-beige-200 transition-colors"
                >
                  About Maya
                </Link>
              </li>
              <li>
                <Link
                  to="/classes"
                  onClick={handleNavClick}
                  className="text-sage-300 hover:text-beige-200 transition-colors"
                >
                  Classes
                </Link>
              </li>
              <li>
                <Link
                  to="/schedule"
                  onClick={handleNavClick}
                  className="text-sage-300 hover:text-beige-200 transition-colors"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleNavClick}
                  className="text-sage-300 hover:text-beige-200 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-playfair font-semibold text-beige-200 mb-4">
              Contact
            </h4>
            <div className="space-y-2 font-lato">
              <div className="flex items-center space-x-2 text-sage-300">
                <SafeIcon icon={FiMail} className="h-4 w-4" />
                <span>hello@samayoga.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sage-300">
                <SafeIcon icon={FiPhone} className="h-4 w-4" />
                <span>+1 (514) 555-9876</span>
              </div>
              <div className="flex items-center space-x-2 text-sage-300">
                <SafeIcon icon={FiMapPin} className="h-4 w-4" />
                <span>Montreal, QC</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sage-700 mt-8 pt-8 text-center">
          <p className="text-sage-300 font-lato">
            © {new Date().getFullYear()} Sama Yoga with Maya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;