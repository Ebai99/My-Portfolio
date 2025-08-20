// JavaScript to hide the loading screen when the page is fully loaded
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("loader-hidden");
  }, 500); // Optional delay for smoother transition
});

// Function to open the navigation menu
function openMenu() {
  const nav = document.querySelector("nav");
  nav.classList.remove("closed");
  nav.classList.add("open");
}

// Function to close the navigation menu
function closeMenu() {
  const nav = document.querySelector("nav");
  nav.classList.remove("open");
  nav.classList.add("closed");
}

// Form submission
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Reset error messages
  nameError.style.display = "none";
  emailError.style.display = "none";
  messageError.style.display = "none";

  // Validate inputs
  let isValid = true;
  if (!nameInput.value.trim()) {
    nameError.style.display = "block";
    isValid = false;
  }
  if (
    !emailInput.value.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())
  ) {
    emailError.style.display = "block";
    isValid = false;
  }
  if (!messageInput.value.trim()) {
    messageError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    // Format the message for WhatsApp
    const name = encodeURIComponent(nameInput.value.trim());
    const email = encodeURIComponent(emailInput.value.trim());
    const message = encodeURIComponent(messageInput.value.trim());
    const whatsappNumber = "+237672815082";
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0A%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Open WhatsApp link in a new tab
    window.open(whatsappUrl, "_blank");

    // Reset form
    form.reset();
  }
});

// Hero section animation on page load
window.onload = () => {
  const heroContent = document.querySelector(".hero-content");
  heroContent.classList.add("visible");
};

// Scroll-based animations for other sections
const slideElements = document.querySelectorAll(
  ".slide-in-left, .slide-in-right, .slide-in-bottom"
);
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  },
  {
    threshold: 0.1, // Trigger when 10% of element is visible
  }
);

slideElements.forEach((element) => {
  observer.observe(element);
});
