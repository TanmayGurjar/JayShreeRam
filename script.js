const teamName = "Your Team Name"; // 👈 CHANGE

const audio = document.getElementById("audio");

function enableAudio() {
  audio.play().catch(() => {});
}

function playAudio() {
  audio.play();
}

// ✍️ Typewriter
const text = "🙏Jai Shree Ram🙏";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 70);
  }
}
typing();

// 👥 Personalized message
document.getElementById("teamMessage").innerHTML =
  `Happy Ram Navami to <b>${teamName}</b> 🌸<br>
   May Lord Ram guide us to success & greatness 🚀`;

// 🌌 Particle system (cinematic)
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    dx: Math.random() - 0.5,
    dy: Math.random() - 0.5,
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,215,0,0.7)";

  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(draw);
}

draw();

// 🖱️ Parallax effect
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;

  document.querySelector(".card").style.transform = `translate(${x}px, ${y}px)`;
});
