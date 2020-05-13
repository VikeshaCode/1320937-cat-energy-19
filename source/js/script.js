var header = document.querySelector(".header");
var headerToogle = document.querySelector(".header__toogle");

header.classList.remove("header--nojs");

headerToogle.addEventListener("click", function () {
  if (header.classList.contains("header--closed")) {
    header.classList.remove("header--closed");
    header.classList.add("header--opened");
  } else {
    header.classList.add("header--closed");
    header.classList.remove("header--opened");
  }
});

svg4everybody();
