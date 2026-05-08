// ==========================
// TRADUTOR
// ==========================

const button = document.getElementById("translate-button");

let currentLanguage = "en";

button.addEventListener("click", () => {
  const englishTexts = document.querySelectorAll(".lang-en");
  const portugueseTexts = document.querySelectorAll(".lang-pt");

  if (currentLanguage === "en") {
    englishTexts.forEach((element) => {
      element.style.display = "none";
    });

    portugueseTexts.forEach((element) => {
      element.style.display = "block";
    });

    button.textContent = "EN | PT";

    currentLanguage = "pt";
  } else {
    englishTexts.forEach((element) => {
      element.style.display = "block";
    });

    portugueseTexts.forEach((element) => {
      element.style.display = "none";
    });

    button.textContent = "PT | EN";

    currentLanguage = "en";
  }
});

// ==========================
// ANIMAÇÃO AO ROLAR
// ==========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

sections.forEach((section) => {
  observer.observe(section);
});

// ==========================
// JAMES WEBB FOLLOW
// ==========================

const webb = document.getElementById("webb-follow");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

// animação suave

function animateWebb() {
  currentX += (mouseX - currentX) * 0.08;
  currentY += (mouseY - currentY) * 0.08;

  webb.style.left = currentX + "px";
  webb.style.top = currentY + "px";

  requestAnimationFrame(animateWebb);
}

animateWebb();
