# Perilous Roleplay Website

## Project Structure

The Perilous Roleplay website is a single-page application (SPA) built with HTML, CSS, and vanilla JavaScript. Here's an overview of its structure:

```
perilous-roleplay-website/
│
├── index.html
├── styles.css
├── scripts.js
└── assets/
    └── images/
        ├── background images
        ├── character overlays
        └── logos
```

### Key Files

- `index.html`: Contains the entire structure of the single-page application.
- `styles.css`: Manages all styling, including responsive design and animations.
- `scripts.js`: Handles dynamic content loading, transitions, and interactivity.

## Single-Page Architecture

The website utilizes a single-page architecture to provide a smooth, app-like experience:

1. All content sections (About Us, Rules, Departments) are present in the HTML but initially hidden.
2. Navigation is handled through hash changes in the URL.
3. The `scripts.js` file manages content visibility based on the current hash.

## Key JavaScript Functionalities

The `scripts.js` file is the core of the website's dynamic behavior:

1. **Content Switching**:

   - Listens for hash changes in the URL.
   - Shows/hides content sections based on the current hash.
   - Manages smooth transitions between sections.

2. **Background Transitions**:

   - Implements a carousel of background images.
   - Uses `setTimeout` for timed transitions.
   - Manages opacity changes for smooth fading effects.

3. **Character Overlay Transitions**:

   - Similar to background transitions, but for character images.
   - Positioned at the bottom of the viewport.
   - Hidden on mobile view widths.

4. **Rules and Department Toggles**:

   - Manages expandable/collapsible sections for rules and department information.
   - Uses CSS transitions for smooth height animations.

5. **Scroll-to-Top Functionality**:

   - Shows/hides a scroll-to-top button based on scroll position.
   - Smoothly scrolls to the top of the page when clicked.

6. **Performance Logging**:
   - Logs page load times to the console for performance monitoring (not removed saw no need who cares).

## CSS Highlights

1. **Responsive Design**:

   - Uses media queries to adjust layout for different screen sizes.
   - Hides character overlays on smaller screens.

2. **Glass Effect**:

   - Implements a translucent, blurred background for content sections.
   - Uses `backdrop-filter` for the frosted glass effect.

3. **Animations**:
   - Fade-in animations for content sections.
   - Smooth transitions for expandable sections.

## Bootstrap Integration

While the project primarily uses custom CSS, it leverages Bootstrap 5.3 for:

- Responsive grid system
- Basic component styling (buttons, navbars)
- Utility classes for spacing and flexbox

This single-page application architecture provides a seamless user experience while maintaining a simple, lightweight codebase. The separation of concerns between HTML structure, CSS styling, and JavaScript functionality allows for easy maintenance and future enhancements.
