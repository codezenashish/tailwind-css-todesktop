const openBtn = document.querySelector("#openBtn");
const menu = document.querySelector("#menuOpen");
const closeBtn = document.querySelector("#closeBtn");

openBtn.addEventListener("click", () => {
  menu.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
});

