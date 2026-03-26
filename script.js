function playAudio() {
  document.getElementById("audio").play();
}

// Create falling flowers 🌸
for (let i = 0; i < 30; i++) {
  let flower = document.createElement("span");
  flower.innerHTML = "🌸";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = Math.random() * 5 + 5 + "s";
  document.querySelector(".overlay").appendChild(flower);
}
