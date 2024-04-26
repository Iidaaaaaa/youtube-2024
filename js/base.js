let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener(
  "scroll",
  () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // Downscroll, hide header
      header.classList.add("header--hidden");
    } else {
      // Upscroll, show header
      header.classList.remove("header--hidden");
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  },
  false
);
