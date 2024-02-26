const splash = document.getElementById("splash");
const title = document.getElementById("title");
const damp = 0.8;

window.addEventListener("mousemove", (e) => {
  let xPercentage = e.x / e.view.innerWidth;
  let yPercentage = e.y / e.view.innerHeight;
  splash.style.backgroundPosition = `${45 - (0.5 - xPercentage * damp)}% ${
    45 - (0.5 - yPercentage * damp)
  }%`;
});
