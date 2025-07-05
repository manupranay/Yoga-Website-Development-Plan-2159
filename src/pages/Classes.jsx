import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import SectionGuide from '../components/SectionGuide';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiUsers, FiTrendingUp, FiFilter } = FiIcons;

const Classes = () => {
  const [filter, setFilter] = useState('All');

  const sections = [
    { id: 'hero', name: 'Classes' },
    { id: 'filters', name: 'Filters' },
    { id: 'class-grid', name: 'All Classes' }
  ];

  const classes = [
    {
      name: 'Vinyasa Flow',
      description: 'A dynamic, breath-linked class that builds strength and flexibility through flowing sequences. Perfect for those who love movement and want to build heat.',
      duration: '60 min',
      level: 'All Levels',
      intensity: 'Moderate',
      benefits: ['Strength Building', 'Flexibility', 'Stress Relief', 'Cardiovascular Health'],
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'All Levels'
    },
    {
      name: 'Gentle Hatha',
      description: 'A slower-paced class focusing on basic postures and breathing techniques. Ideal for beginners or those seeking a more meditative practice.',
      duration: '45 min',
      level: 'Beginner',
      intensity: 'Gentle',
      benefits: ['Flexibility', 'Balance', 'Mindfulness', 'Stress Relief'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'Beginner'
    },
    {
      name: 'Meditation & Pranayama',
      description: 'Learn breath control techniques and meditation practices to cultivate inner peace and mental clarity. No physical poses required.',
      duration: '30 min',
      level: 'All Levels',
      intensity: 'Restorative',
      benefits: ['Mental Clarity', 'Stress Relief', 'Better Sleep', 'Emotional Balance'],
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'Online'
    },
    {
      name: 'Power Yoga',
      description: 'An athletic, fitness-based approach to yoga that builds stamina, strength, and flexibility. Expect to sweat and be challenged.',
      duration: '75 min',
      level: 'Intermediate',
      intensity: 'High',
      benefits: ['Strength Building', 'Endurance', 'Core Stability', 'Weight Management'],
      image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'Studio'
    },
    {
      name: 'Restorative Yoga',
      description: 'A deeply relaxing practice using props to support the body in gentle poses. Perfect for recovery, stress relief, and deep relaxation.',
      duration: '60 min',
      level: 'All Levels',
      intensity: 'Restorative',
      benefits: ['Deep Relaxation', 'Stress Relief', 'Better Sleep', 'Nervous System Reset'],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'Online'
    },
    {
      name: 'Yoga for Seniors',
      description: 'Gentle movements and modified poses designed specifically for older adults. Focus on mobility, balance, and fall prevention.',
      duration: '45 min',
      level: 'Beginner',
      intensity: 'Gentle',
      benefits: ['Mobility', 'Balance', 'Joint Health', 'Social Connection'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'Studio'
    }
  ];

  const filters = ['All', 'Beginner', 'Online', 'Studio'];

  const filteredClasses = filter === 'All' 
    ? classes 
    : classes.filter(cls => cls.category === filter);

  const getIntensityColor = (intensity) => {
    switch (intensity) {
      case 'Gentle':
        return 'bg-sage-100 text-sage-800';
      case 'Moderate':
        return 'bg-lavender-100 text-lavender-800';
      case 'High':
        return 'bg-orange-100 text-orange-800';
      case 'Restorative':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <SectionGuide sections={sections} />
      
      {/* Hero Section */}
      <section id="hero" className="py-20 bg-gradient-to-br from-lavender-50 to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-playfair font-bold text-sage-800 mb-6"
          >
            Yoga Classes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-lato text-sage-600 max-w-2xl mx-auto"
          >
            Discover the perfect class for your practice level and goals. 
            From gentle beginnings to dynamic flows, there's something for everyone.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section id="filters" className="py-8 bg-white border-b border-sage-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-sage-600">
              <SafeIcon icon={FiFilter} className="h-5 w-5" />
              <span className="font-lato font-medium">Filter by:</span>
            </div>
            {filters.map((filterOption) => (
              <motion.button
                key={filterOption}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(filterOption)}
                className={`px-4 py-2 rounded-full font-lato font-medium transition-all duration-200 ${
                  filter === filterOption
                    ? 'bg-lavender-600 text-white'
                    : 'bg-sage-100 text-sage-700 hover:bg-sage-200'
                }`}
              >
                {filterOption}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section id="class-grid" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((classItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={classItem.image}
                    alt={classItem.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getIntensityColor(classItem.intensity)}`}>
                      {classItem.intensity}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-sage-800 mb-2">
                    {classItem.name}
                  </h3>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sage-600">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiClock} className="h-4 w-4" />
                      <span className="text-sm font-lato">{classItem.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiUsers} className="h-4 w-4" />
                      <span className="text-sm font-lato">{classItem.level}</span>
                    </div>
                  </div>
                  
                  <p className="text-sage-600 font-lato mb-4">
                    {classItem.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-playfair font-semibold text-sage-800 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {classItem.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-beige-100 text-sage-700 text-xs rounded-full font-lato"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-lavender-600 hover:bg-lavender-700 text-white py-3 rounded-lg font-lato font-semibold transition-colors duration-200"
                  >
                    Book This Class
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;