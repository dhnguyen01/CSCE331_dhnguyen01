document.addEventListener("mousemove", function (e) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const offsetX = e.clientX - (viewportWidth / 2);
  const offsetY = e.clientY - (viewportHeight / 2);

  document.body.style.backgroundPosition = `calc(50% + ${offsetX}px) calc(50% + ${offsetY}px)`;
});


function loadStyle() {
  const currentStyle = localStorage.getItem("cssStyle") || "style1.css";
  document.getElementById("stylesheet").href = currentStyle;
}

function toggleStyle() {
  const stylesheet = document.getElementById("stylesheet");
  const currentStyle = localStorage.getItem("cssStyle");

  if (currentStyle === "style1.css") {
    stylesheet.href = "style2.css";
    localStorage.setItem("cssStyle", "style2.css");
  } else {
    stylesheet.href = "style1.css";
    localStorage.setItem("cssStyle", "style1.css");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadStyle();
  
  const toggleButton = document.getElementById("StyleButton");
  
  if (toggleButton) {
    toggleButton.addEventListener("click", toggleStyle);
  }
});

