const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", window.siteI18n.t("openMenu"));
  mobileNav.hidden = true;
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", window.siteI18n.t(isOpen ? "openMenu" : "closeMenu"));
  mobileNav.hidden = isOpen;
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const slides = [...document.querySelectorAll(".hero-slide")];
const dots = [...document.querySelectorAll(".slide-dots button")];
const heroVisual = document.querySelector(".hero__visual");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let activeSlide = 0;
let slideTimer;

function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === activeSlide;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });
  dots.forEach((dot, dotIndex) => {
    const isActive = dotIndex === activeSlide;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-current", String(isActive));
  });
}

function stopSlideshow() {
  window.clearInterval(slideTimer);
  slideTimer = undefined;
}

function startSlideshow() {
  stopSlideshow();
  if (!reducedMotion.matches && !document.hidden) {
    slideTimer = window.setInterval(() => showSlide(activeSlide + 1), 3900);
  }
}

document.querySelectorAll("[data-direction]").forEach((button) => {
  button.addEventListener("click", () => {
    showSlide(activeSlide + Number(button.dataset.direction));
    startSlideshow();
  });
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showSlide(Number(dot.dataset.goto));
    startSlideshow();
  });
});

heroVisual.addEventListener("mouseenter", stopSlideshow);
heroVisual.addEventListener("mouseleave", startSlideshow);
heroVisual.addEventListener("focusin", stopSlideshow);
heroVisual.addEventListener("focusout", (event) => {
  if (!heroVisual.contains(event.relatedTarget)) startSlideshow();
});
document.addEventListener("visibilitychange", startSlideshow);
reducedMotion.addEventListener("change", startSlideshow);

const delay = (milliseconds) => new Promise((resolve) => window.setTimeout(resolve, milliseconds));
const firstShip = document.querySelector(".hero-slide__ship--cargo");
const shipReady = firstShip.decode ? firstShip.decode().catch(() => {}) : Promise.resolve();

Promise.all([
  delay(reducedMotion.matches ? 100 : 360),
  Promise.race([shipReady, delay(1100)])
]).then(() => {
  document.documentElement.classList.add("is-ready");
  startSlideshow();
  window.setTimeout(() => document.documentElement.classList.add("ship-intro-done"), 1500);
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

document.getElementById("year").textContent = String(new Date().getFullYear());
