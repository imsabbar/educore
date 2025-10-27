# EduCore - Online Education Platform

A modern, fully responsive education website built with HTML, CSS, and vanilla JavaScript. EduCore provides an elegant platform for showcasing online courses, testimonials, and educational content.

## 🌟 Features

- **Responsive Design** - Works seamlessly on all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements** - Animated statistics, FAQ accordion, smooth scrolling
- **Course Showcase** - Display courses with ratings, pricing, and metadata
- **Testimonials Section** - Student success stories with star ratings
- **Contact Form** - Fully functional contact section with Danish localization
- **FAQ Section** - Collapsible accordion with smooth transitions
- **Statistics Counter** - Animated number counting on scroll
- **Mobile Navigation** - Hamburger menu with overlay for mobile devices

## 🎨 Design Features

### Color Palette
- **Primary:** Coral Pink (#FF7E84)
- **Secondary:** Oxford Blue (#0C1327)
- **Accent:** Selective Yellow (#FFC107)
- **Teal:** Keppei (#3BB2B8)

### Typography
- **Font Family:** Gilroy
- **Responsive Sizing:** Scales from mobile to desktop

### Sections
1. **Hero** - Eye-catching landing section with CTA buttons
2. **Categories** - Browse course categories with icons
3. **About** - Platform information with progress indicators
4. **Courses** - Featured courses with pricing and ratings
5. **Statistics** - Key metrics with animated counters
6. **Testimonials** - Student reviews and feedback
7. **FAQ** - Common questions with accordion UI
8. **Contact** - Form and contact information (Denmark)
9. **Footer** - Links, social media, and copyright

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML/CSS/JavaScript (for customization)

### Installation

1. Clone or download the repository
2. Open `index.html` in your web browser
3. That's it! No build process required.

### File Structure

```
educore/
├── index.html              # Main HTML file
├── favicon.svg             # Site favicon
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── script.js      # JavaScript functionality
│   ├── font/
│   │   └── font.css       # Custom font (Gilroy)
│   └── images/            # All images and icons
```

## 🛠️ Customization

### Changing Colors
Edit the CSS variables in `assets/css/style.css`:

```css
:root {
  --light-coral: hsl(357, 100%, 75%);
  --oxford-blue: hsl(224, 53%, 10%);
  --selective-yellow: hsl(42, 100%, 56%);
  --keppei: hsl(173, 60%, 47%);
}
```

### Updating Content
All content is in `index.html`. Simply find the section you want to edit and modify the text.

### Adding New Courses
Copy the course card structure in the Courses section and update:
- Course image
- Title
- Price
- Number of lessons
- Student count
- Rating stars

## 📱 Responsive Breakpoints

- **Mobile:** < 575px
- **Tablet:** 575px - 991px
- **Desktop:** 992px+
- **Large Desktop:** 1200px+

## ⚡ Performance

- Optimized images with lazy loading
- Minimal JavaScript footprint
- CSS animations using hardware acceleration
- Preloaded critical resources

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📧 Contact Information

**Location:** Nørregade 15, 1165 København K, Denmark  
**Email:** kontakt@educore.dk  
**Phone:** +45 31 23 45 67

## 📄 License

This project is free to use for personal and commercial purposes.

## 🙏 Credits

- **Icons:** [Ionicons](https://ionic.io/ionicons)
- **Design & Development:** imsabbar
- **Copyright:** © 2025 imsabbar. All Rights Reserved.

## 🐛 Known Issues

None currently. Please report any bugs or issues.

## 🔮 Future Enhancements

- Add course filtering and search
- Integrate with backend API
- Add user authentication
- Implement course enrollment system
- Add blog section
- Multi-language support

---

**Made with ❤️ for education**
