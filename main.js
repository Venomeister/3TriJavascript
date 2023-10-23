function tocaSomFeliz(){
    document.querySelector("#som_tecla_feliz").play();
}
const listadeTeclas = document.querySelectorAll(".tecla");

listadeTeclas[2].onclick = tocaSomFeliz