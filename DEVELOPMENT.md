# Development Guide

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Initial Setup
```bash
npm install
npm start
```

## Code Structure

### Components

#### CourseCard (`components/CourseCard.jsx`)
Reusable component for displaying course cards.

**Usage:**
```jsx
<CourseCard 
  course={courseData}
  showPurchaseButton={true}
  actionButtonText="Know More"
/>
```

**Props:**
- `course` (required) - Course object with id, title, image, description, isPurchased
- `showPurchaseButton` (optional, default: true) - Show/hide purchase button
- `actionButtonText` (optional, default: "Know More") - Text for the action button

#### ErrorBoundary (`components/ErrorBoundary.jsx`)
Catches JavaScript errors anywhere in the child component tree.

The app is wrapped in ErrorBoundary at the root level to prevent complete crashes.

### Contexts

#### CoursesContext (`contexts/CoursesContext.js`)
Manages course state and purchase functionality.

**Usage:**
```jsx
const { courses, purchaseCourse } = useContext(CoursesContext);
```

**Methods:**
- `purchaseCourse(id)` - Marks a course as purchased

#### ThemeContext (`contexts/ThemeContext.jsx`)
Manages dark/light theme with localStorage persistence.

**Usage:**
```jsx
const { darkMode, toggleMode } = useTheme();
```

**Features:**
- Automatically saves theme preference to localStorage
- Restores theme on page reload

### Utilities

#### Validation (`utils/validation.js`)
Form validation functions.

```jsx
import { validateEmail, validatePassword } from '../utils/validation';

const isValid = validateEmail(email);
const isPasswordValid = validatePassword(password, 6);
```

#### Constants (`utils/constants.js`)
Centralized configuration values.

```jsx
import { ROUTES, TEACHER_NAME, SOCIAL_LINKS } from '../utils/constants';
```

Available constants:
- `ROUTES` - Application routes
- `TEACHER_NAME` - Teacher name
- `SOCIAL_LINKS` - Social media URLs
- `CONTACT_EMAIL` - Contact email
- `COURSE_STATUS` - Course status labels

## Styling Guidelines

### Tailwind CSS
The project uses Tailwind CSS for styling. Follow these guidelines:

1. **Responsive Design**: Use mobile-first approach
   ```jsx
   className="text-sm md:text-lg lg:text-xl"
   ```

2. **Dark Mode**: Always provide dark mode variants
   ```jsx
   className={`${darkMode ? "bg-gray-800" : "bg-white"}`}
   ```

3. **Consistent Colors**:
   - Primary: `sky-400`, `sky-600`, `sky-900`
   - Success: `emerald-400`, `teal-400`
   - Accent: `red-500`, `yellow-400`

### Custom Fonts
Fonts are configured in `tailwind.config.js`:
- `font-poppins` - For headings and important text
- `font-roboto` - Alternative font (if needed)

## Adding New Features

### Adding a New Route

1. Create the page component in `src/pages/`
2. Add route in `src/App.js`:
   ```jsx
   <Route path='/new-route' element={<NewPage/>} />
   ```
3. Add route constant in `src/utils/constants.js` (optional)

### Adding a New Course

1. Update `src/data/courses.json`:
   ```json
   {
     "id": 3,
     "title": "New Course",
     "image": "/photos/course.jpg",
     "description": "Course description",
     "lectures": [
       {
         "title": "Lecture 1",
         "link": "https://youtube.com/..."
       }
     ]
   }
   ```

### Modifying Theme Colors

1. Update Tailwind config in `tailwind.config.js`
2. Or update inline classes in components

## Best Practices

### Component Structure
```jsx
import statements
import { hooks } from 'react';
import { context hooks } from '../contexts';

function ComponentName() {
  // Hooks
  const { value } = useContext(Context);
  const [state, setState] = useState('');
  
  // Event handlers
  const handleClick = () => { ... };
  
  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}

export default ComponentName;
```

### Error Handling
- Use ErrorBoundary for React errors
- Validate user inputs before submission
- Show user-friendly error messages

### Accessibility
- Always include `aria-label` on icon-only buttons
- Use semantic HTML (`<nav>`, `<footer>`, `<header>`)
- Provide `alt` text for images
- Use `aria-expanded` for collapsible content

### Performance
- Avoid unnecessary re-renders
- Use React.memo for expensive components (if needed)
- Optimize images
- Lazy load routes (if adding many routes)

## Testing

Run tests with:
```bash
npm test
```

## Building for Production

```bash
npm run build
```

The build folder contains optimized production files.

## Troubleshooting

### Theme not persisting
- Check browser localStorage permissions
- Verify ThemeContext is properly wrapping the app

### Routes not working
- Ensure BrowserRouter wraps the app in `index.js`
- Check route paths match exactly (case-sensitive)

### Styling issues
- Verify Tailwind classes are correct
- Check if dark mode classes are properly applied
- Ensure PostCSS is configured correctly

## Code Quality Checklist

Before committing:
- ✅ No console.logs
- ✅ No unused imports
- ✅ Proper error handling
- ✅ Accessibility attributes added
- ✅ Responsive design tested
- ✅ Dark mode tested
- ✅ No linter errors

