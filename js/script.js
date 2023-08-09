let friends = document.querySelectorAll(".friend");
friends.forEach((f) => {
  let link = f.querySelector(".remov");
  link.addEventListener("click", (e) => {
    // e.preventDefault();
    f.remove();
  });
});
/*--------------------------------------------*/
let em = document.querySelector(".email");
let changeFunc = document.querySelector(".unic");
changeFunc.addEventListener("click", (e) => {
  em.toggleAttribute("disabled");
});
/*--------------------------------------------*/
let dark = document.querySelector(".dark-mood");
let bob = document.querySelector("body");
dark.addEventListener('click', (e) =>{
  window.style.backgroundColor = '#000';
})