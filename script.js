document.addEventListener("mousemove", function (e) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const offsetX = e.clientX - (viewportWidth / 2);
  const offsetY = e.clientY - (viewportHeight / 2);

  document.body.style.backgroundPosition = `calc(50% + ${offsetX}px) calc(50% + ${offsetY}px)`;
});





document.addEventListener("DOMContentLoaded", function () {
  var themeStyle = document.getElementById("themeStyle");
  var storedTheme = localStorage.getItem("themeStyle");

  if (storedTheme) {
    themeStyle.setAttribute("href", storedTheme);
  }

  var button = document.getElementById("styleButton");
  if (button) {
    button.addEventListener("click", function () {
      var newTheme =
        themeStyle.getAttribute("href") === "style1.css"
          ? "style2.css"
          : "style1.css";
      themeStyle.setAttribute("href", newTheme);

      localStorage.setItem("themeStyle", newTheme);
    });
  }
});
