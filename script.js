const title = document.getElementById("title");
const question = document.getElementById("question");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let step = 0;


// Set Title
title.innerText = `Hey ${CONFIG.name}`;

// First Question
question.innerText = CONFIG.questions[0];


// YES Button
yesBtn.addEventListener("click", () => {

  if (step < CONFIG.questions.length - 1) {

    alert(CONFIG.yesMessages[step]);

    step++;

    question.innerText = CONFIG.questions[step];

  } else {

    question.innerText = CONFIG.finalMessage;

    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    startHearts();
  }

});


// NO Button Runs Away 😆
noBtn.addEventListener("mouseover", () => {

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform =
    `translate(${x}px, ${y}px)`;

});

noBtn.addEventListener("click", () => {
  alert(CONFIG.noMessage);
});


// Floating Hearts Effect 💖
function startHearts() {

  setInterval(() => {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerText = "💖";

    heart.style.left =
      Math.random() * 100 + "vw";

    heart.style.animationDuration =
      Math.random() * 3 + 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);

  }, 300);

}
