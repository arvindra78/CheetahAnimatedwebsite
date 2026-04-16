# CheetahAnimatedwebsite

A cinematic scroll-driven storytelling website built around a local JPG frame sequence. The experience is designed for high-impact visuals, smooth scroll interaction, and a premium branded presentation.

## 🚀 Overview
- A fullscreen scrollytelling page driven by a sequence of local JPG frames.
- The animation updates as the user scrolls, revealing the cheetah run frame by frame.
- Animated copy, progress UI, and frame readout enhance the immersive experience.

## 🎯 Features
- Local image sequence playback using JPG files
- Scroll-driven scene control with GSAP ScrollTrigger
- Fully responsive layout for desktop and mobile
- Animated headline text and step markers tied to scroll progress
- Frame counter plus progress rail for cinematic pacing
- Fallback scroll behavior when GSAP is unavailable

## 🧩 Tech Stack
- HTML5 for structure
- CSS for layout, visuals, and responsive styling
- JavaScript for frame loading, scroll interaction, and state updates
- GSAP + ScrollTrigger from CDN for polished scroll animation

## 📁 Project Structure
- `index.html` — page structure and hero/scrollytelling sections
- `style.css` — visual styling, typography, responsive layout, and animation states
- `script.js` — directory detection, frame preloading, scroll updates, and fallback handling
- `Images/` — local JPG frames used for the cheetah animation sequence

## ⚙️ How It Works
1. The page detects whether the frames live in `Images/` or `images/`.
2. It preloads up to 240 JPG frames named `ezgif-frame-###.jpg`.
3. Scroll progress is mapped to the current frame and story line.
4. If GSAP ScrollTrigger loads successfully, the experience uses smooth scrubbing.
5. Otherwise, a plain scroll handler updates the scene based on the page position.

## 💻 Local Setup
1. Clone the repository.
2. Confirm the frame images are stored in `Images/`.
3. Open `index.html` in your browser.

## 🌐 Deployment
This repository is ready for any static hosting platform:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Static web server

## 📝 Notes
- Frame names must follow: `ezgif-frame-001.jpg` through `ezgif-frame-240.jpg`.
- The code falls back to manual scroll handling if GSAP CDN fails.
- The site is optimized for local static delivery and fast visual storytelling.

## 📌 License
This project is provided as-is for portfolio and demonstration use.
