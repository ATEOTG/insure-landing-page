const mobileNav = document.querySelector(".nav-menu__hamburger");
const mobileDropdownMenu = document.querySelector(".nav-menu__mobile-list");

[mobileNav, mobileDropdownMenu].forEach((el) => {
  el.addEventListener("click", function () {
    mobileNav.classList.toggle("clicked");
    mobileDropdownMenu.classList.toggle("clicked");
    if (mobileNav.classList.contains("clicked")) {
      mobileNav.src = "./dist/images/icon-close.svg";
    } else {
      mobileNav.src = "./dist/images/icon-hamburger.svg";
    }
  });
});
