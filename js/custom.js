document.addEventListener("DOMContentLoaded", function () {
  const el = document.getElementById("typed");
  if (!el) return;

  new Typed("#typed", {
    strings: [
      "I love it",
      "Hexo + Butterfly"
    ],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true
  });
});