document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("typed")) {
    new Typed("#typed", {
      strings: [
        "Welcome to my blog world",
        "Hexo + Butterfly"
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true
    });
  }
});