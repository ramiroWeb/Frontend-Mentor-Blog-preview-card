const titleCard = document.querySelector(".container-card__title");
const containerCard = document.querySelector(".container-card");

console.log(titleCard.onfocus);

titleCard.addEventListener("mouseover", (e) => {
  if(!containerCard.classList.contains('mouse-hover')){
    containerCard.classList.add("mouse-hover");
    console.log(e);
  }
});
