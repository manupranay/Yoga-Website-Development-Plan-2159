import React from 'react';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import SectionGuide from '../components/SectionGuide';
import * as FiIcons from 'react-icons/fi';

const {FiCheck, FiDollarSign, FiGlobe} = FiIcons;

const Pricing = () => {
  const sections = [
    {id: 'hero', name: 'Pricing'},
    {id: 'plans', name: 'Plans'},
    {id: 'faq', name: 'FAQ'}
  ];

  const pricingPlans = [
    {
      name: 'sama yoga demo',
      amount: 15,
      currency: 'CAD',
      paymentLink: 'https://buy.stripe.com/test_00w5kw6rx7qffJw9Jy53O08',
      features: [
        'Access to all yoga classes',
        'Online and in-person sessions',
        'Beginner-friendly instruction',
        'Community support',
        'Flexible scheduling'
      ],
      popular: false
    },
    {
      name: 'sama yoga demo',
      amount: 15,
      currency: 'USD',
      paymentLink: 'https://buy.stripe.com/test_aFaeV68zF25V8h4aNC53O09',
      features: [
        'Access to all yoga classes',
        'Online and in-person sessions',
        'Beginner-friendly instruction',
        'Community support',
        'Flexible scheduling'
      ],
      popular: true
    }
  ];

  const handlePayment = (paymentLink) => {
    window.open(paymentLink, '_blank');
  };

  return (
    <div className="min-h-screen pt-16">
      <SectionGuide sections={sections} />
      
      {/* Hero Section */}
      <section id="hero" className="py-20 bg-gradient-to-br from-lavender-50 to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="text-5xl md:text-6xl font-playfair font-bold text-sage-800 mb-6"
          >
            Pricing Plans
          </motion.h1>
          <motion.p
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.2}}
            className="text-xl font-lato text-sage-600 max-w-2xl mx-auto"
          >
            Choose the perfect plan for your yoga journey. All plans include access to our complete library of classes and personalized instruction.
          </motion.p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: index * 0.1}}
                className={`relative bg-white rounded-2xl shadow-xl border-2 overflow-hidden ${
                  plan.popular ? 'border-lavender-500' : 'border-sage-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-lavender-600 text-white text-center py-2 text-sm font-lato font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-playfair font-bold text-sage-800 mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <SafeIcon icon={FiDollarSign} className="h-6 w-6 text-sage-600" />
                      <span className="text-4xl font-playfair font-bold text-sage-800">
                        {plan.amount}
                      </span>
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiGlobe} className="h-4 w-4 text-sage-500" />
                        <span className="text-lg font-lato text-sage-600 uppercase">
                          {plan.currency}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <SafeIcon 
                          icon={FiCheck} 
                          className="h-5 w-5 text-lavender-600 mt-0.5 flex-shrink-0" 
                        />
                        <span className="text-sage-700 font-lato">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    onClick={() => handlePayment(plan.paymentLink)}
                    className={`w-full py-4 rounded-lg font-lato font-semibold text-lg transition-all duration-200 ${
                      plan.popular
                        ? 'bg-lavender-600 hover:bg-lavender-700 text-white'
                        : 'bg-sage-600 hover:bg-sage-700 text-white'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-sage-800 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What's included in the plan?",
                answer: "Each plan includes access to all yoga classes, both online and in-person sessions, personalized instruction, and community support. You'll have flexible scheduling options to fit your lifestyle."
              },
              {
                question: "Can I cancel anytime?",
                answer: "Yes, you can cancel your subscription at any time. We believe in flexibility and want you to practice yoga on your own terms."
              },
              {
                question: "What's the difference between CAD and USD pricing?",
                answer: "We offer pricing in both Canadian and US dollars for your convenience. Choose the currency that works best for you - both plans include the same features and benefits."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your experience, we'll provide a full refund."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: index * 0.1}}
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

export default Pricing;