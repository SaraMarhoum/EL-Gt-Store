let motDePasse = document.getElementById("MDP_oublié");
const seConnecter = document.getElementById("seConnecter");
const sEnregistrer = document.getElementById("s'enregistrer");
let section = document.querySelectorAll(".sec__signup");


motDePasse.addEventListener("click", () =>{

    section[0].classList.add("hide");
    section[1].classList.remove("hide");

});



