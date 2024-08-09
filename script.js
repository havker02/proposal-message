const yesBtn = document.querySelector(".yesBtn")

const noBtn = document.querySelector(".noBtn");

const msg = document.querySelector(".msg");

const gif = document.querySelector(".gif");

const body = document.querySelector("body");

function handleYes() {
  msg.innerHTML = "Then i can be your Naruto 🥰";
  msg.style.color = "antiqueWhite";
  msg.style.fontSize = "20px";
  gif.src = "naruhina.png";
  noBtn.classList.add("hidden");
  yesBtn.innerHTML = "Agree!"
  yesBtn.style.backgroundColor = "#FFBF00";
  body.style.backgroundImage = "url('')"
}

function handleNo() {
  posX = Math.ceil(Math.random()*80);
  posY = Math.ceil(Math.random()*80);
  noBtn.style.left = `${posX}px`;
  noBtn.style.top = `${posY}px`;
}

noBtn.addEventListener("click", handleNo);
yesBtn.addEventListener("click", handleYes);