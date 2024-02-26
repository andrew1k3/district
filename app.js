const splash = document.getElementById("splash");
const title = document.getElementById("title");
const damp = 0.5;

window.addEventListener("mousemove", (e) => {
  let xPercentage = e.x / e.view.innerWidth;
  console.log(xPercentage);
  splash.style.backgroundPosition = `${45 - (0.5 - xPercentage * damp)}%`;
});
