import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiClock, FiSend } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'hello@samayoga.com',
      link: 'mailto:hello@samayoga.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+1 (514) 555-9876',
      link: 'tel:+15145559876'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Montreal, QC',
      link: '#'
    },
    {
      icon: FiClock,
      title: 'Response Time',
      value: 'Within 24 hours',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: FiInstagram,
      name: 'Instagram',
      url: 'https://instagram.com/samayoga',
      color: 'hover:text-pink-600'
    },
    {
      icon: FiFacebook,
      name: 'Facebook',
      url: 'https://facebook.com/samayoga',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lavender-50 to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-playfair font-bold text-sage-800 mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-lato text-sage-600 max-w-2xl mx-auto"
          >
            Ready to begin your yoga journey? Have questions about classes? 
            I'd love to hear from you and help you find the perfect practice.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-playfair font-bold text-sage-800 mb-6">
                Send a Message
              </h2>
              
              {submitMessage && (
                <div className="mb-6 p-4 bg-sage-100 text-sage-800 rounded-lg">
                  {submitMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sage-700 font-lato font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-lavender-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sage-700 font-lato font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-lavender-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sage-700 font-lato font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-lavender-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="class-booking">Class Booking</option>
                    <option value="private-session">Private Session</option>
                    <option value="workshop">Workshop Inquiry</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sage-700 font-lato font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-lavender-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your yoga experience, goals, or any questions you have..."
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-lavender-600 hover:bg-lavender-700 disabled:bg-lavender-400 text-white py-4 rounded-lg font-lato font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <SafeIcon icon={FiSend} className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-playfair font-bold text-sage-800 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-lavender-100 rounded-lg flex items-center justify-center">
                      <SafeIcon icon={info.icon} className="h-6 w-6 text-lavender-600" />
                    </div>
                    <div>
                      <h3 className="font-playfair font-semibold text-sage-800 mb-1">
                        {info.title}
                      </h3>
                      {info.link !== '#' ? (
                        <a
                          href={info.link}
                          className="text-sage-600 font-lato hover:text-lavender-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-sage-600 font-lato">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mb-8">
                <h3 className="font-playfair font-semibold text-sage-800 mb-4">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.url}
                      className={`w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center text-sage-600 transition-colors ${social.color}`}
                      aria-label={social.name}
                    >
                      <SafeIcon icon={social.icon} className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <div className="bg-sage-50 rounded-lg p-6">
                <h3 className="font-playfair font-semibold text-sage-800 mb-3">
                  Studio Location
                </h3>
                <p className="text-sage-600 font-lato mb-4">
                  I teach at various locations throughout Montreal, including:
                </p>
                <ul className="space-y-2 text-sage-600 font-lato">
                  <li>• Yoga Loft Studio - Mile End</li>
                  <li>• Parc La Fontaine - Outdoor classes</li>
                  <li>• Online via Zoom</li>
                  <li>• Private sessions at your location</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-sage-800 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>
          
          <div className="space-y-6">
            {[
              {
                question: "Do I need experience to join your classes?",
                answer: "Not at all! I welcome students of all levels, from complete beginners to advanced practitioners. I offer modifications and variations for every pose."
              },
              {
                question: "What should I bring to class?",
                answer: "For in-person classes, bring a yoga mat, water bottle, and comfortable clothing. For online classes, just your mat and a quiet space."
              },
              {
                question: "How do I book a class?",
                answer: "You can book classes by clicking the 'Book Your Spot' buttons throughout the site, or by contacting me directly via email or phone."
              },
              {
                question: "Do you offer private sessions?",
                answer: "Yes! I offer private one-on-one sessions both in-person and online. These are perfect for beginners or anyone wanting personalized attention."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="font-playfair font-semibold text-sage-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-sage-600 font-lato">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;