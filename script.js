const TOTAL_FRAMES = 240;
const FRAME_DIRECTORIES = ["Images", "images"];

const sequenceImage = document.getElementById("sequence-image");
const frameReadout = document.getElementById("frame-readout");
const progressFill = document.getElementById("progress-fill");
const statusPill = document.getElementById("status-pill");
const storyLines = Array.from(document.querySelectorAll(".story-line"));
const stepMarkers = Array.from(document.querySelectorAll(".step-marker"));
const storySection = document.querySelector(".scrollytelling");

const preloadedFrames = new Array(TOTAL_FRAMES);

let activeDirectory = "Images";
let currentFrame = -1;
let currentLine = -1;

function isMobileViewport() {
  return window.matchMedia("(max-width: 900px)").matches;
}

function getFramePath(index) {
  return `${activeDirectory}/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function setStatus(message) {
  statusPill.textContent = message;
}

function hideStatus() {
  statusPill.classList.add("is-hidden");
}

function showLine(index) {
  if (index === currentLine) {
    return;
  }

  currentLine = index;

  storyLines.forEach((line, lineIndex) => {
    line.classList.toggle("is-active", lineIndex === index);
  });

  stepMarkers.forEach((marker, markerIndex) => {
    marker.classList.toggle("is-active", markerIndex === index);
  });
}

function renderFrame(index) {
  const nextFrame = clamp(index, 0, TOTAL_FRAMES - 1);
  if (nextFrame === currentFrame) {
    return;
  }

  currentFrame = nextFrame;

  const preloaded = preloadedFrames[nextFrame];
  sequenceImage.src = preloaded && preloaded.src ? preloaded.src : getFramePath(nextFrame);
  frameReadout.textContent = String(nextFrame + 1).padStart(3, "0");
}

function updateScene(progress) {
  const clampedProgress = clamp(progress, 0, 1);
  const frameIndex = Math.round(clampedProgress * (TOTAL_FRAMES - 1));
  const lineIndex = Math.min(
    storyLines.length - 1,
    Math.floor(clampedProgress * storyLines.length)
  );

  renderFrame(frameIndex);
  showLine(lineIndex);
  progressFill.style.transform = `scaleY(${Math.max(clampedProgress, 0.02)})`;
}

function detectFrameDirectory() {
  const probes = FRAME_DIRECTORIES.map(
    (directory) =>
      new Promise((resolve) => {
        const image = new Image();
        image.onload = () => resolve(directory);
        image.onerror = () => resolve(null);
        image.src = `${directory}/ezgif-frame-001.jpg`;
      })
  );

  return Promise.all(probes).then((results) => {
    const resolvedDirectory = results.find(Boolean);

    if (!resolvedDirectory) {
      throw new Error("Frame sequence not found.");
    }

    activeDirectory = resolvedDirectory;
  });
}

function preloadFrames() {
  let loaded = 0;

  Array.from({ length: TOTAL_FRAMES }, (_, index) => {
    const image = new Image();
    image.decoding = "async";
    image.src = getFramePath(index);
    preloadedFrames[index] = image;

    const markLoaded = () => {
      loaded += 1;

      if (loaded < TOTAL_FRAMES) {
        setStatus(`Loading local JPG frames ${loaded} / ${TOTAL_FRAMES}`);
      } else {
        hideStatus();
      }
    };

    image.onload = markLoaded;
    image.onerror = markLoaded;
  });
}

function setupGsapScroll() {
  if (!window.gsap || !window.ScrollTrigger) {
    return false;
  }

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: storySection,
    start: "top top",
    end: "bottom bottom",
    scrub: isMobileViewport() ? 0.6 : 0.35,
    onUpdate: (self) => updateScene(self.progress)
  });

  window.addEventListener("resize", () => ScrollTrigger.refresh());
  return true;
}

function setupFallbackScroll() {
  const onScroll = () => {
    const totalScroll = storySection.offsetHeight - window.innerHeight;
    const passed = clamp(window.scrollY - storySection.offsetTop, 0, totalScroll);
    const progress = totalScroll > 0 ? passed / totalScroll : 0;
    updateScene(progress);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
}

function initialize() {
  sequenceImage.src = getFramePath(0);
  renderFrame(0);
  showLine(0);
  preloadFrames();

  if (!setupGsapScroll()) {
    setupFallbackScroll();
  } else {
    updateScene(0);
  }
}

detectFrameDirectory()
  .then(initialize)
  .catch(() => {
    setStatus("Could not find JPG frames in /Images or /images");
  });
