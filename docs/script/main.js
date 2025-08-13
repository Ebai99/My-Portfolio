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

// JavaScript to hide the loading screen when the page is fully loaded
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("loader-hidden");
  }, 500); // Optional delay for smoother transition
});
