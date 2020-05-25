window.addEventListener("load", () => {
  preventPageRefresh();
  changeColor();
});

function preventPageRefresh() {
  event.preventDefault();
}

function changeColor() {
  let red = document.querySelector("#redRange").value;
  let green = document.querySelector("#greenRange").value;
  let blue = document.querySelector("#blueRange").value;

  // TEXTS
  let redNumber = document.querySelector("#redNumber");
  let greenNumber = document.querySelector("#greenNumber");
  let blueNumber = document.querySelector("#blueNumber");

  redNumber.value = red;
  greenNumber.value = green;
  blueNumber.value = blue;

  var color = "rgb(" + red + ", " + green + ", " + blue + ")";
  let copyColor = (document.getElementById("copyColor").value = color);

  changeBackgroundColor(color);
}

function changeBackgroundColor(color) {
  document.getElementsByClassName(
    "colorOutput"
  )[0].style.backgroundColor = color;
}

document.querySelector("#redRange").addEventListener("input", changeColor);
document.querySelector("#greenRange").addEventListener("input", changeColor);
document.querySelector("#blueRange").addEventListener("input", changeColor);
