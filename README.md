Project Description

Campus Companion is a mobile-first responsive web application designed to help students view and explore campus events. The application demonstrates modern responsive web design principles, structured data rendering, adaptive navigation, and interactive functionality across mobile, tablet, and desktop screen sizes.

The project was developed as part of a responsive design lab assignment and focuses on usability, accessibility, and progressive enhancement.

Framework Used

This project was built using:

React (v18)

Vite (v7)

React Router DOM

HTML5

CSS3 (Flexbox and CSS Grid)

Vite was used as the development server and build tool for fast performance and modern ES module support.

Responsive Breakpoints Used

The application follows a mobile-first design approach with the following breakpoints:

Small Screens: ≤ 480px

Single-column layout

Hamburger navigation menu

Stacked content

Medium Screens: 481px – 900px

Two-column grid layout

Expanded spacing

Improved content distribution

Large Screens: ≥ 901px

Three-column grid layout

Horizontal navigation bar

Optimized desktop layout

Each breakpoint introduces meaningful layout changes beyond simple font resizing.

Instructions to Run Locally

To run this application on your local machine:

1. Clone the Repository
git clone https://github.com/MiguelHaley/mobile-optimized-web-app.git
cd mobile-optimized-web-app

2. Install Dependencies
npm install

3. Start the Development Server
npm run dev


The application will be available at:

http://localhost:5173/

System Requirements

Node.js (LTS version recommended)

npm (installed with Node)

Modern web browser (Chrome, Edge, Firefox)

Deployment

This project can be deployed using Vercel or Netlify.

To deploy with Vercel:

Install Vercel CLI:

npm install -g vercel


Run:

vercel


Follow the prompts to deploy.

Alternatively, connect the GitHub repository directly to Vercel for automatic deployment.

If deployed, include the live link here:

[Insert deployment URL here]

Implemented Features

Mobile-first responsive design

Three defined breakpoints with layout changes

Responsive navigation (hamburger menu on mobile, horizontal nav on desktop)

CSS Grid layout for event cards

Flexbox for navigation and alignment

Structured local JSON data with 8+ events

Dynamic list rendering

Individual event detail view using route parameters

Search functionality for filtering events

Favorites toggle feature

Accessible form inputs with labels

Touch-friendly buttons

Visible keyboard focus states

Responsive typography using relative units

No horizontal scrolling at standard viewport sizes
