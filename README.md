# 🐆 CheetahAnimatedwebsite

![Stars](https://img.shields.io/github/stars/arvindra78/CheetahAnimatedwebsite?style=for-the-badge)
![Forks](https://img.shields.io/github/forks/arvindra78/CheetahAnimatedwebsite?style=for-the-badge)
![Repo Size](https://img.shields.io/github/repo-size/arvindra78/CheetahAnimatedwebsite?style=for-the-badge)
![License](https://img.shields.io/github/license/arvindra78/CheetahAnimatedwebsite?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)

---

## 🧩 Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge\&logo=greensock\&logoColor=black)
![ScrollTrigger](https://img.shields.io/badge/ScrollTrigger-GSAP-informational?style=for-the-badge)

---

A cinematic scroll-driven storytelling website built around a local JPG frame sequence. The experience is designed for high-impact visuals, smooth scroll interaction, and a premium branded presentation.

---

## 🚀 Overview

* A fullscreen scrollytelling page driven by a sequence of local JPG frames.
* The animation updates as the user scrolls, revealing the cheetah run frame by frame.
* Animated copy, progress UI, and frame readout enhance the immersive experience.

## 🎯 Features

* Local image sequence playback using JPG files
* Scroll-driven scene control with GSAP ScrollTrigger
* Fully responsive layout for desktop and mobile
* Animated headline text and step markers tied to scroll progress
* Frame counter plus progress rail for cinematic pacing
* Fallback scroll behavior when GSAP is unavailable

## 📁 Project Structure

* `index.html`
* `style.css`
* `script.js`
* `Images/`

## ⚙️ How It Works

1. Detects image directory (`Images/` or `images/`)
2. Preloads up to 240 frames
3. Maps scroll → animation frames
4. Uses GSAP if available, fallback otherwise

## 💻 Local Setup

1. Clone repo
2. Ensure frames in `Images/`
3. Open `index.html`

## 🌐 Deployment

GitHub Pages • Netlify • Vercel • Firebase Hosting

## 📌 License

Portfolio/demo use.
