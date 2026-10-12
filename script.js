const cards = [...document.querySelectorAll(".avatar-card")];
const continueBtn = document.querySelector("#continueBtn");
const selectionStatus = document.querySelector("#selectionStatus");
const nextScreen = document.querySelector("#nextScreen");
const selectedPreview = document.querySelector("#selectedPreview");
let selected = null;
cards.forEach((card) =>
  card.addEventListener("click", () => {
    selected = card.dataset.character;
    cards.forEach((c) => c.setAttribute("aria-pressed", String(c === card)));
    continueBtn.disabled = false;
    selectionStatus.textContent = `${selected === "male" ? "Técnico" : "Técnica"} seleccionado/a. Puedes continuar.`;
    nextScreen.hidden = true;
  }),
);
continueBtn.addEventListener("click", () => {
  if (!selected) return;
  selectedPreview.src =
  selected === "male"
    ? "assets/avatares/tecnico_base.png"
    : "assets/avatares/tecnica_base.png";
    selected === "male" ? "assets/tecnico.svg" : "assets/tecnica.svg";
  selectedPreview.alt =
    selected === "male" ? "Técnico seleccionado" : "Técnica seleccionada";
  nextScreen.hidden = false;
  nextScreen.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
document.querySelector("#backBtn").addEventListener("click", () => {
  nextScreen.hidden = true;
  document.querySelector(".selection").scrollIntoView({ behavior: "smooth" });
});
