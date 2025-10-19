document.getElementById("checkButton").addEventListener("click", function () {
  let color = document.getElementById("colorInput").value.toLowerCase();
  let resultText = document.getElementById("resultText");

  if (color === "red") {
    resultText.textContent = "Stop";
  } else if (color === "yellow") {
    resultText.textContent = "Get ready";
  } else if (color === "green") {
    resultText.textContent = "Go";
  } else {
    resultText.textContent = "Invalid Traffic Light";
  }
});
