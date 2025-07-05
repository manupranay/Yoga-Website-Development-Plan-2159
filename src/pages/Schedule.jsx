import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiMapPin, FiMonitor, FiCalendar } = FiIcons;

const Schedule = () => {
  const schedule = [
    {
      day: 'Monday',
      classes: [
        {
          time: '7:00 AM',
          name: 'Morning Flow',
          location: 'Online (Zoom)',
          type: 'online',
          duration: '45 min',
          level: 'All Levels'
        },
        {
          time: '6:30 PM',
          name: 'Vinyasa Flow',
          location: 'Yoga Loft Studio',
          type: 'studio',
          duration: '60 min',
          level: 'Intermediate'
        }
      ]
    },
    {
      day: 'Tuesday',
      classes: [
        {
          time: '9:00 AM',
          name: 'Gentle Hatha',
          location: 'Yoga Loft Studio',
          type: 'studio',
          duration: '45 min',
          level: 'Beginner'
        },
        {
          time: '7:00 PM',
          name: 'Meditation & Breathwork',
          location: 'Online (Zoom)',
          type: 'online',
          duration: '30 min',
          level: 'All Levels'
        }
      ]
    },
    {
      day: 'Wednesday',
      classes: [
        {
          time: '12:00 PM',
          name: 'Lunch Break Yoga',
          location: 'Online (Zoom)',
          type: 'online',
          duration: '30 min',
          level: 'All Levels'
        },
        {
          time: '6:00 PM',
          name: 'Power Yoga',
          location: 'Yoga Loft Studio',
          type: 'studio',
          duration: '75 min',
          level: 'Advanced'
        }
      ]
    },
    {
      day: 'Thursday',
      classes: [
        {
          time: '8:00 AM',
          name: 'Morning Stretch',
          location: 'Online (Zoom)',
          type: 'online',
          duration: '30 min',
          level: 'All Levels'
        },
        {
          time: '6:30 PM',
          name: 'Hatha for Beginners',
          location: 'Yoga Loft Studio',
          type: 'studio',
          duration: '45 min',
          level: 'Beginner'
        }
      ]
    },
    {
      day: 'Friday',
      classes: [
        {
          time: '5:30 PM',
          name: 'Restorative Yoga',
          location: 'Yoga Loft Studio',
          type: 'studio',
          duration: '60 min',
          level: 'All Levels'
        },
        {
          time: '7:30 PM',
          name: 'Evening Meditation',
          location: 'Online (Zoom)',
          type: 'online',
          duration: '30 min',
          level: 'All Levels'
        }
      ]
    },
    {
      day: 'Saturday',
      classes: [
        {
          time: '9:00 AM',
          name: 'Vinyasa Flow',
          location: 'Parc La Fontaine',
          type: 'outdoor',
          duration: '60 min',
          level: 'All Levels'
        },
        {
          time: '11:00 AM',
          name: 'Yoga for Seniors',
          location: 'Community Center',
          type: 'studio',
          duration: '45 min',
          level: 'Beginner'
        }
      ]
    },
    {
      day: 'Sunday',
      classes: [
        {
          time: '10:00 AM',
          name: 'Sunday Slow Flow',
          location: 'Online (Zoom)',
          type: 'online',
          duration: '60 min',
          level: 'All Levels'
        },
        {
          time: '4:00 PM',
          name: 'Yin Yoga',
          location: 'Yoga Loft Studio',
          type: 'studio',
          duration: '75 min',
          level: 'All Levels'
        }
      ]
    }
  ];

  const getLocationIcon = (type) => {
    switch (type) {
      case 'online':
        return FiMonitor;
      case 'outdoor':
        return FiMapPin;
      default:
        return FiMapPin;
    }
  };

  const getLocationColor = (type) => {
    switch (type) {
      case 'online':
        return 'bg-lavender-100 text-lavender-800';
      case 'outdoor':
        return 'bg-sage-100 text-sage-800';
      default:
        return 'bg-beige-100 text-beige-800';
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sage-50 to-lavender-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-playfair font-bold text-sage-800 mb-6"
          >
            Class Schedule
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-lato text-sage-600 max-w-2xl mx-auto mb-8"
          >
            Find the perfect time to practice with our weekly schedule. 
            Classes are available both online and in-person.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <div className="flex items-center space-x-2 text-sage-600">
              <SafeIcon icon={FiMonitor} className="h-5 w-5" />
              <span className="font-lato">Online Classes</span>
            </div>
            <div className="flex items-center space-x-2 text-sage-600">
              <SafeIcon icon={FiMapPin} className="h-5 w-5" />
              <span className="font-lato">In-Person Classes</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {schedule.map((day, dayIndex) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: dayIndex * 0.1 }}
                className="bg-white rounded-lg shadow-lg border border-sage-200 overflow-hidden"
              >
                <div className="bg-sage-800 text-white p-4">
                  <h3 className="text-xl font-playfair font-bold flex items-center">
                    <SafeIcon icon={FiCalendar} className="mr-2 h-5 w-5" />
                    {day.day}
                  </h3>
                </div>
                
                <div className="p-4 space-y-4">
                  {day.classes.map((classItem, classIndex) => (
                    <div
                      key={classIndex}
                      className="border border-sage-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-playfair font-semibold text-sage-800 text-lg">
                          {classItem.name}
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLocationColor(classItem.type)}`}>
                          {classItem.level}
                        </span>
                      </div>
                      
                      <div className="space-y-2 text-sm text-sage-600 font-lato">
                        <div className="flex items-center space-x-2">
                          <SafeIcon icon={FiClock} className="h-4 w-4" />
                          <span>{classItem.time} • {classItem.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <SafeIcon icon={getLocationIcon(classItem.type)} className="h-4 w-4" />
                          <span>{classItem.location}</span>
                        </div>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full mt-3 bg-lavender-600 hover:bg-lavender-700 text-white py-2 rounded-lg font-lato font-medium transition-colors duration-200"
                      >
                        Book Your Spot
                      </motion.button>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-playfair font-bold text-sage-800 mb-6">
              How to Book
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-lavender-100 rounded-full mb-4">
                  <span className="text-lavender-600 font-bold text-xl">1</span>
                </div>
                <h3 className="font-playfair font-semibold text-sage-800 mb-2">
                  Choose Your Class
                </h3>
                <p className="text-sage-600 font-lato">
                  Select the perfect class for your schedule and practice level
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-lavender-100 rounded-full mb-4">
                  <span className="text-lavender-600 font-bold text-xl">2</span>
                </div>
                <h3 className="font-playfair font-semibold text-sage-800 mb-2">
                  Book Your Spot
                </h3>
                <p className="text-sage-600 font-lato">
                  Click "Book Your Spot" and we'll send you all the details
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-lavender-100 rounded-full mb-4">
                  <span className="text-lavender-600 font-bold text-xl">3</span>
                </div>
                <h3 className="font-playfair font-semibold text-sage-800 mb-2">
                  Join & Practice
                </h3>
                <p className="text-sage-600 font-lato">
                  Show up and enjoy your practice with our supportive community
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;