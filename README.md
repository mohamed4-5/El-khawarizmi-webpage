# El-Khawarizmi - Mathematics Learning Platform

A modern, responsive web application for mathematics education, built with React. This platform provides course management, user authentication, and an intuitive learning experience with dark mode support.

## 🚀 Features

- **Course Management**: Browse and purchase mathematics courses
- **User Authentication**: Secure login and signup functionality
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Responsive Design**: Mobile-first design that works on all devices
- **Course Details**: Detailed course information with lecture videos
- **User Profile**: View purchased courses and manage account
- **Accessibility**: Built with ARIA labels and semantic HTML
- **Error Handling**: Comprehensive error boundaries for better UX

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CourseCard.jsx  # Course card component
│   ├── Courses.js      # Courses listing component
│   ├── ErrorBoundary.jsx # Error boundary wrapper
│   ├── Footer.jsx       # Footer component
│   ├── header.jsx      # Navigation header
│   └── Teacher.jsx     # Teacher information component
│
├── contexts/           # React Context providers
│   ├── CoursesContext.js  # Course state management
│   └── ThemeContext.jsx   # Theme/dark mode management
│
├── pages/              # Page components
│   ├── CourseInfo.jsx  # Course detail page
│   ├── home.jsx       # Home page
│   ├── Login.jsx      # Login page
│   ├── Profile.jsx    # User profile page
│   └── Signup.jsx     # Registration page
│
├── utils/              # Utility functions
│   ├── constants.js   # App-wide constants
│   ├── scrollTop.js   # Scroll to top utility
│   └── validation.js  # Form validation utilities
│
├── data/               # Static data files
│   └── courses.json   # Course data
│
├── App.js              # Main app component with routing
└── index.js            # Application entry point
```

## 🛠️ Technologies Used

- **React 19.1.1** - UI library
- **React Router 7.7.1** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Animation library
- **React Icons** - Icon library
- **Lucide React** - Additional icons

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd El-Khawarizmi
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🎯 Available Scripts

### `npm start`
Runs the app in development mode. The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is optimized and ready for deployment.

### `npm run eject`
**Note: This is a one-way operation!** Ejects from Create React App, giving you full control over the configuration.

## 🏗️ Architecture

### State Management
- **CoursesContext**: Manages course data and purchase state
- **ThemeContext**: Handles dark/light mode with localStorage persistence

### Routing
- `/` - Home page with course listings
- `/login` - User login
- `/signup` - User registration
- `/profile` - User profile with purchased courses
- `/course/:id` - Individual course details

### Key Components

#### CourseCard
Reusable component for displaying course information with purchase functionality.

**Props:**
- `course` (object) - Course data
- `showPurchaseButton` (boolean) - Toggle purchase button visibility
- `actionButtonText` (string) - Customize button text

#### ErrorBoundary
Catches React errors and displays a user-friendly error message.

### Constants & Utilities

#### `utils/constants.js`
Centralized configuration:
- Route paths
- Teacher name
- Social media links
- Contact email
- Course status labels

#### `utils/validation.js`
Form validation utilities:
- `validateEmail(email)` - Email format validation
- `validatePassword(password, minLength)` - Password validation

## 🎨 Styling

The project uses **Tailwind CSS** with custom configuration:
- Font families: Poppins, Roboto
- Responsive breakpoints (mobile-first)
- Dark mode support throughout
- Custom color palette (sky, teal, emerald, etc.)

## ♿ Accessibility Features

- Semantic HTML (`<nav>`, `<footer>`, `<header>`)
- ARIA labels on interactive elements
- ARIA expanded states for collapsible content
- Descriptive alt text for images
- Keyboard navigation support

## 🔒 Security Features

- Email validation using regex
- Password length validation
- Secure external link handling (`rel="noopener noreferrer"`)
- Input sanitization

## 🚀 Performance Optimizations

- Code splitting with React Router
- Lazy loading where applicable
- Optimized animations with Framer Motion
- Error boundaries to prevent full app crashes

## 📝 Code Quality

The project follows React best practices:
- ✅ Consistent code formatting
- ✅ No console.logs in production
- ✅ Proper error handling
- ✅ Reusable components
- ✅ No code duplication
- ✅ Clean folder structure
- ✅ Comprehensive error boundaries

## 🤝 Contributing

1. Follow the existing code structure
2. Maintain accessibility standards
3. Add appropriate error handling
4. Update documentation as needed

## 📄 License

This project is private and proprietary.

## 👨‍💻 Development Team

Developed for El-Khawarizmi mathematics education platform.

---

**Note**: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). For more information about available scripts and advanced configuration, refer to the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
