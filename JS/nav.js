const hamburger = document.querySelector(".nav-button");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");


// cardDuo Poup 
var cardDuo  = document.getElementsByClassName("li-card__duo-tittle");
var cardDuoChild = document.getElementsByClassName("card-duo__child");
var cardBigger = document.getElementsByClassName("li-card__duo");

console.log(cardDuo);


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

for (let i = 0; i < 2; i++) {
  cardDuo[i].addEventListener("click",() => {
    console.log("se clickio la card duo.")
    cardDuo[i].classList.toggle("moveTittle");
    cardBigger[i].classList.toggle("cardBigger")
    cardDuoChild[i].classList.toggle("openChild");
  }
   )
}