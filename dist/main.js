const openBtn = document.querySelector("#openBtn");
const menu = document.querySelector("#menuOpen");
const closeBtn = document.querySelector("#closeBtn");

openBtn.addEventListener("click", () => {
  menu.classList.remove("hidden");
  document.body.classList.add("overflow-hidden"); //  Disable scroll
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
  document.body.classList.remove("overflow-hidden"); // Enable scroll
});
