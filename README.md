# CheetahAnimatedwebsite

A cinematic scroll-driven storytelling website built around a local JPG frame sequence. The interface combines a sticky fullscreen visual stage with animated text, progress indicators, and smooth scroll interaction powered by GSAP ScrollTrigger.

## Demo
- Scroll through the page to control the cheetah animation.
- The page loads frames from the local `Images` folder and updates the scene based on scroll progress.

## Features
- Local frame-sequence playback from JPG images
- Smooth scroll-driven animation with GSAP ScrollTrigger
- Responsive layout for desktop and mobile
- Animated headline text tied to scroll position
- Frame counter and visual progress rail
- Fallback scroll logic if GSAP fails to load

## Project Structure
- `index.html` – main page markup
- `style.css` – visual styling and responsive layout
- `script.js` – frame loading, scroll tracking, and scene updates
- `Images/` – directory containing `ezgif-frame-001.jpg` through `ezgif-frame-240.jpg`

## Setup
1. Clone the repository.
2. Place the JPG animation frames in the `Images` folder.
3. Open `index.html` in a browser.

## Notes
- The project uses `Images/` or `images/` as the source directory for frame files.
- The frame sequence is expected to be named using the `ezgif-frame-###.jpg` pattern.
- GSAP is loaded from CDN for scroll animation; if unavailable, the site falls back to standard scroll handling.

## Deployment
This site can be hosted as a static site on GitHub Pages, Netlify, Vercel, or any static web host.

## License
This repository is provided as-is for demonstration and portfolio use.
