function openMenu() {
  const nav = document.querySelector("nav");
  nav.classList.remove("closed");
  nav.classList.add("open");
}

function closeMenu() {
  const nav = document.querySelector("nav");
  nav.classList.remove("open");
  nav.classList.add("closed");
}
