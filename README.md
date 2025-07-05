# Sama Yoga Website - Complete Documentation

A modern, responsive yoga instructor website built with React, featuring online booking, payment integration, and a beautiful user experience.

## 🚀 Live Demo
- **Website**: [Your deployed URL here]
- **Admin Panel**: [Your admin URL here]

## 📋 Table of Contents
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Customization Guide](#customization-guide)
- [Content Management](#content-management)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## 🛠 Tech Stack

### Frontend
- **React 18.3.1** - Main framework
- **React Router DOM 7.1.0** - Navigation and routing
- **Framer Motion 11.0.8** - Animations and transitions
- **Tailwind CSS 3.4.17** - Styling framework
- **React Icons 5.4.0** - Icon library
- **Vite 5.4.2** - Build tool and development server

### Backend & Services
- **Supabase 2.39.0** - Database and authentication (optional)
- **Stripe** - Payment processing
- **EmailJS 3.2.0** - Contact form handling

### Development Tools
- **ESLint 9.9.1** - Code linting
- **PostCSS 8.4.49** - CSS processing
- **Autoprefixer 10.4.20** - CSS vendor prefixes

## ✨ Features

### Core Features
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Modern UI/UX** - Clean, professional design
- ⚡ **Fast Loading** - Optimized performance
- 🔍 **SEO Friendly** - Meta tags and semantic HTML
- 🎭 **Smooth Animations** - Framer Motion powered

### Pages & Sections
- 🏠 **Home** - Hero section, benefits, featured classes
- 👩‍🏫 **About** - Instructor bio, certifications, philosophy
- 🧘‍♀️ **Classes** - Filterable class listings
- 📅 **Schedule** - Weekly class timetable
- 💰 **Pricing** - Subscription plans with Stripe integration
- 💬 **Testimonials** - Student reviews and success stories
- 📸 **Gallery** - Photo gallery with lightbox
- 📞 **Contact** - Contact form with EmailJS

### Interactive Elements
- 🧭 **Section Guide** - Page navigation helper
- 🎯 **Hover Previews** - Navigation menu previews
- 📱 **Mobile Menu** - Responsive hamburger menu
- 🎨 **Smooth Scrolling** - Enhanced user experience

## 🚀 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager
- Git

### Step 1: Clone Repository
```bash
git clone https://github.com/yourusername/sama-yoga-website.git
cd sama-yoga-website
```

### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
```

### Step 3: Start Development Server
```bash
npm run dev
# or
yarn dev
```

Your site will be available at `http://localhost:5173`

## ⚙️ Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Supabase (Optional - for advanced features)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# EmailJS (For contact form)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id

# Stripe (For payments)
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### Stripe Configuration

#### 1. Create Stripe Account
- Go to [Stripe Dashboard](https://dashboard.stripe.com)
- Create an account or log in
- Get your publishable key from the API keys section

#### 2. Create Payment Links
- Go to Products → Payment Links
- Create payment links for each pricing plan
- Copy the URLs and update in `src/pages/Pricing.jsx`

#### 3. Update Payment Links
```javascript
// In src/pages/Pricing.jsx
const pricingPlans = [
  {
    name: 'Basic Plan',
    amount: 15,
    currency: 'USD',
    paymentLink: 'https://buy.stripe.com/your_payment_link_here', // Update this
    // ... other properties
  }
];
```

### EmailJS Configuration

#### 1. Create EmailJS Account
- Go to [EmailJS](https://www.emailjs.com/)
- Create an account and verify your email

#### 2. Create Email Service
- Add an email service (Gmail, Outlook, etc.)
- Note the Service ID

#### 3. Create Email Template
- Create a template with these variables:
  - `{{name}}` - Sender's name
  - `{{email}}` - Sender's email
  - `{{subject}}` - Email subject
  - `{{message}}` - Email message

#### 4. Update Contact Form
```javascript
// In src/pages/Contact.jsx
import emailjs from 'emailjs-com';

const sendEmail = (formData) => {
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_USER_ID'
  );
};
```

## 🎨 Customization Guide

### Changing Colors
Colors are defined in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      lavender: {
        50: '#faf7ff',
        100: '#f3ebff',
        // ... add your custom colors
      },
      sage: {
        50: '#f6f7f6',
        100: '#e3e8e3',
        // ... add your custom colors
      },
      beige: {
        50: '#fefcf8',
        100: '#fdf8f0',
        // ... add your custom colors
      }
    }
  }
}
```

### Changing Fonts

#### 1. Update Google Fonts
In `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap" rel="stylesheet">
```

#### 2. Update Tailwind Config
In `tailwind.config.js`:
```javascript
fontFamily: {
  'primary': ['YourFont', 'serif'],
  'secondary': ['YourSecondFont', 'sans-serif'],
}
```

#### 3. Update CSS Classes
Replace `font-playfair` and `font-lato` with your new font classes throughout the components.

### Changing Images

#### Background Images
Update in `tailwind.config.js`:
```javascript
backgroundImage: {
  'hero-pattern': "url('your-hero-image-url')",
  'about-pattern': "url('your-about-image-url')",
}
```

#### Component Images
Replace image URLs directly in components:
```javascript
// Example in Home.jsx
<img 
  src="https://your-new-image-url.jpg" 
  alt="Description" 
  className="rounded-lg shadow-lg" 
/>
```

#### Recommended Image Sources
- **Unsplash** - Free high-quality photos
- **Pexels** - Free stock photos
- **Your Own Photos** - Store in `public/images/` folder

### Customizing Content

#### 1. Site Information
Update in multiple files:
- `index.html` - Page title and meta description
- `src/components/Navbar.jsx` - Site name
- `src/components/Footer.jsx` - Contact info and social links

#### 2. Instructor Information
Update in `src/pages/About.jsx`:
```javascript
// Update instructor bio, certifications, and philosophy
const certifications = [
  {
    icon: FiAward,
    title: 'Your Certification',
    description: 'Your certification description'
  },
  // ... more certifications
];
```

#### 3. Class Information
Update in `src/pages/Classes.jsx`:
```javascript
const classes = [
  {
    name: 'Your Class Name',
    description: 'Your class description',
    duration: '60 min',
    level: 'All Levels',
    // ... other properties
  },
  // ... more classes
];
```

#### 4. Schedule
Update in `src/pages/Schedule.jsx`:
```javascript
const schedule = [
  {
    day: 'Monday',
    classes: [
      {
        time: '7:00 AM',
        name: 'Your Class',
        location: 'Your Location',
        type: 'online', // or 'studio'
        duration: '45 min',
        level: 'All Levels'
      },
      // ... more classes
    ]
  },
  // ... more days
];
```

### Adding New Pages

#### 1. Create Page Component
```javascript
// src/pages/NewPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

const NewPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-playfair font-bold text-sage-800 mb-6"
          >
            New Page Title
          </motion.h1>
          {/* Your content here */}
        </div>
      </section>
    </div>
  );
};

export default NewPage;
```

#### 2. Add Route
In `src/App.jsx`:
```javascript
import NewPage from './pages/NewPage';

// Add to Routes
<Route path="/new-page" element={<NewPage />} />
```

#### 3. Add Navigation
In `src/components/Navbar.jsx`:
```javascript
const navItems = [
  // ... existing items
  {
    name: 'New Page',
    path: '/new-page',
    preview: 'image-url',
    description: 'Page description'
  }
];
```

## 📝 Content Management

### Updating Text Content
All text content is stored directly in the React components. To update:

1. **Home Page** - Edit `src/pages/Home.jsx`
2. **About Page** - Edit `src/pages/About.jsx`
3. **Classes** - Edit `src/pages/Classes.jsx`
4. **Contact Info** - Edit `src/components/Footer.jsx`

### Managing Testimonials
In `src/pages/Testimonials.jsx`:
```javascript
const testimonials = [
  {
    name: 'Client Name',
    role: 'Client Role',
    image: 'client-image-url',
    text: 'Testimonial text here...',
    rating: 5,
    highlight: 'Key benefit'
  },
  // ... more testimonials
];
```

### Managing Gallery
In `src/pages/Gallery.jsx`:
```javascript
const images = [
  {
    src: 'image-url',
    alt: 'Image description',
    category: 'Classes' // or 'Outdoor', 'Poses', 'Meditation'
  },
  // ... more images
];
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deploy to Netlify
1. Build your project: `npm run build`
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Or connect your GitHub repository for automatic deployments

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. Run: `npm run deploy`

### Environment Variables in Production
Set these in your hosting platform:
- Netlify: Site settings → Environment variables
- Vercel: Project settings → Environment Variables
- GitHub Pages: Repository settings → Secrets

## 🔧 Troubleshooting

### Common Issues

#### 1. Images Not Loading
- Check image URLs are accessible
- Ensure images are in the `public` folder for local images
- Verify image paths are correct

#### 2. Animations Not Working
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check for JavaScript errors in browser console

#### 3. Stripe Payments Not Working
- Verify payment links are correct
- Check Stripe dashboard for test mode vs live mode
- Ensure payment links are published

#### 4. Contact Form Not Sending
- Verify EmailJS configuration
- Check service ID, template ID, and user ID
- Test EmailJS integration in their dashboard

#### 5. Build Errors
- Check for missing dependencies: `npm install`
- Verify all imports are correct
- Check for TypeScript errors if using TypeScript

### Performance Optimization

#### 1. Image Optimization
- Use WebP format when possible
- Compress images before upload
- Use appropriate image sizes
- Implement lazy loading for galleries

#### 2. Code Splitting
- Use React.lazy() for page components
- Implement route-based code splitting

#### 3. Bundle Analysis
```bash
npm install --save-dev webpack-bundle-analyzer
# Add to package.json scripts
"analyze": "npm run build && npx webpack-bundle-analyzer build/static/js/*.js"
```

## 📱 Mobile Responsiveness

The site is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Testing Responsiveness
1. Use browser dev tools
2. Test on actual devices
3. Use tools like BrowserStack

## 🔒 Security Best Practices

### Environment Variables
- Never commit `.env` files
- Use different keys for development and production
- Rotate API keys regularly

### Content Security
- Sanitize user inputs
- Validate form data
- Use HTTPS in production

## 📊 Analytics Setup

### Google Analytics
1. Create GA4 property
2. Add tracking code to `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Event Tracking
Add tracking to buttons and forms:
```javascript
// Example button click tracking
const handleBooking = () => {
  gtag('event', 'booking_click', {
    event_category: 'engagement',
    event_label: 'class_booking'
  });
};
```

## 🎯 SEO Optimization

### Meta Tags
Update in `index.html`:
```html
<meta name="description" content="Your site description">
<meta name="keywords" content="yoga, meditation, wellness">
<meta property="og:title" content="Your Site Title">
<meta property="og:description" content="Your site description">
<meta property="og:image" content="your-og-image-url">
```

### Structured Data
Add JSON-LD schema for local business:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "YogaStudio",
  "name": "Sama Yoga with Maya",
  "description": "Yoga classes and meditation",
  "url": "https://your-website.com",
  "telephone": "+1-514-555-9876",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Montreal",
    "addressRegion": "QC",
    "addressCountry": "CA"
  }
}
</script>
```

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Test thoroughly
5. Commit: `git commit -m "Add new feature"`
6. Push: `git push origin feature/new-feature`
7. Create a Pull Request

### Code Style
- Use ESLint configuration provided
- Follow React best practices
- Use meaningful component and variable names
- Add comments for complex logic

### Testing
- Test on multiple browsers
- Test responsive design
- Test all interactive elements
- Verify payment flows in test mode

## 📞 Support

### Getting Help
- Check this documentation first
- Search existing GitHub issues
- Create a new issue with detailed description
- Include browser version and error messages

### Maintenance
- Update dependencies regularly
- Monitor for security vulnerabilities
- Backup your customizations before updates
- Test after each update

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Unsplash for beautiful stock photos
- All contributors and users of this template

---

**Made with ❤️ for yoga instructors and wellness professionals**

For more support, visit: [Your Support URL]