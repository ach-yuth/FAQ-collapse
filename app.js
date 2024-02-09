const icons = document.querySelectorAll(".icon");
const xmark = document.querySelectorAll(".x-mark");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.parentNode.classList.toggle("active");
  });
});

xmark.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.parentNode.classList.toggle("active");
  });
});
