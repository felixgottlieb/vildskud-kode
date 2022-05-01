const mediaQuery = window.matchMedia("(max-width: 1000px)");
if (mediaQuery.matches) {
  document
    .querySelector("#nav-desk")
    .classList.add("hidden");
}
else {
    document
    .querySelector("#nav-phone")
    .classList.add("hidden");
}



const burgerMenu = document.querySelector("#burgerimg");
const exitButton = document.querySelector("#exitbutton");

burgerMenu.addEventListener("click", () => {
  document.querySelector("#burgermenu").classList.add("hidden");
  
  document.querySelector("#fullscreenmenu").classList.remove("hidden");
});

exitButton.addEventListener("click", () => {
  document.querySelector("#burgermenu").classList.remove("hidden");
  document.querySelector("#fullscreenmenu").classList.add("hidden");
});
