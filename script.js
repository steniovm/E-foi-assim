const startscreem = document.getElementById("startscreem");
const loaderfich = document.getElementById("loaderfich");
const searchfich = document.getElementById("searchfich");
const setupfich = document.getElementById("setupfich");
const datafich = document.getElementById("datafich");
const newfichButton = document.getElementById("newfich");
const loadfichButton = document.getElementById("loadfich");
const findfichButton = document.getElementById("findfich");
const backButton = document.getElementsByClassName("backButton");

newfichButton.addEventListener("click", () => {
  startscreem.classList.add("hidden");
  setupfich.classList.remove("hidden");
});

for (let i = 0; i < backButton.length; i++) {
  backButton[i].addEventListener("click", () => {
    setupfich.classList.add("hidden");
    startscreem.classList.remove("hidden");
  });
}

loadfichButton.addEventListener("click", () => {
  startscreem.classList.add("hidden");
  loaderfich.classList.remove("hidden");
});

findfichButton.addEventListener("click", () => {
  startscreem.classList.add("hidden");
  searchfich.classList.remove("hidden");
});
