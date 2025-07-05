import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiHeart, FiSmile } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      text: "Maya's classes have been transformative for me. After years of sitting at a desk, I was dealing with chronic back pain and stress. Her gentle approach and personalized attention helped me build strength and flexibility I never thought possible. The online classes are incredibly convenient, and Maya makes you feel like you're right there in the studio with her.",
      rating: 5,
      highlight: 'Chronic pain relief'
    },
    {
      name: 'James Kumar',
      role: 'Software Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      text: "I was skeptical about online yoga classes, but Maya proved me wrong. The video quality is excellent, and her instructions are so clear that I never feel lost. I've been attending her morning flow classes for six months now, and it's become an essential part of my routine. My stress levels have decreased significantly, and I sleep better than I have in years.",
      rating: 5,
      highlight: 'Better sleep & stress relief'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Teacher',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      text: "As a complete beginner, I was intimidated by the idea of yoga. Maya created such a welcoming and non-judgmental environment that I felt comfortable from day one. Her modifications for different skill levels mean I can practice alongside more experienced students without feeling left behind. I've gained so much confidence in my body and my practice.",
      rating: 5,
      highlight: 'Beginner-friendly approach'
    },
    {
      name: 'Michael Chen',
      role: 'Retired Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      text: "At 68, I thought my days of physical activity were behind me. Maya's senior-friendly classes have given me a new lease on life. My balance has improved dramatically, and I feel stronger and more flexible than I have in decades. The meditation sessions have also helped me find peace during a challenging time in my life.",
      rating: 5,
      highlight: 'Improved balance & mobility'
    },
    {
      name: 'Emma Thompson',
      role: 'New Mom',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      text: "After having my baby, I was dealing with postpartum depression and felt disconnected from my body. Maya's gentle approach to yoga helped me reconnect with myself and find moments of peace in the chaos of new motherhood. Her classes are the perfect length for my schedule, and I always leave feeling more centered and strong.",
      rating: 5,
      highlight: 'Postpartum recovery'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Students', icon: FiSmile },
    { number: '8+', label: 'Years Teaching', icon: FiStar },
    { number: '1000+', label: 'Classes Taught', icon: FiHeart }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lavender-50 to-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-playfair font-bold text-sage-800 mb-6"
          >
            Student Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-lato text-sage-600 max-w-2xl mx-auto"
          >
            Hear from our wonderful community of students about their transformative 
            yoga journeys with Maya.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-lavender-100 rounded-full mb-4">
                  <SafeIcon icon={stat.icon} className="h-8 w-8 text-lavender-600" />
                </div>
                <div className="text-4xl font-playfair font-bold text-sage-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-sage-600 font-lato font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-playfair font-bold text-sage-800 text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-sage-600 font-lato text-sm">
                      {testimonial.role}
                    </p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <SafeIcon key={i} icon={FiStar} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-lavender-100 text-lavender-800 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.highlight}
                  </span>
                </div>
                
                <blockquote className="text-sage-700 font-lato italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sage-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl font-lato mb-8 text-sage-200">
              Join our community of students and experience the transformative power of yoga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-lavender-600 hover:bg-lavender-700 text-white px-8 py-4 rounded-full font-lato font-semibold text-lg transition-colors duration-200"
              >
                Book Your First Class
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-sage-800 px-8 py-4 rounded-full font-lato font-semibold text-lg transition-colors duration-200"
              >
                View Schedule
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;