document.addEventListener("mousemove", function (e) {
  const offsetX = e.clientX - 950;
  const offsetY = e.clientY - 480 + window.scrollY;
  document.body.style.backgroundPosition = `${offsetX}px ${offsetY}px`;
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
