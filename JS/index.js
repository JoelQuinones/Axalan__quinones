function desplazar_derecha(){
	let mainNosotros = document.querySelector(".main__nosotros");
	let scroll = document.documentElement.scrollTop;
	let alturaDerecha = mainNosotros.offsetTop-300;
	if (alturaDerecha <= scroll) {
		mainNosotros.style.transform = "translate(0px)";
		mainNosotros.style.opacity = "1";
		mainNosotros.style.transition = "1s";
	}
}
window.addEventListener("scroll", desplazar_derecha);

// function desplazar_arriba(){
// 	let ofertas = document.querySelectorAll(".ofertas");
// 	let scroll = document.documentElement.scrollTop;
// 	for(i = 0; i < ofertas.lenght; i++){
// 		let alturaArriba = ofertas[i].offsetTop;
// 		if (alturaArriba <= scroll) {
// 		ofertas[i].style.transform = "translateY(0px)";
// 		ofertas[i].style.opacity = "1";
// 		ofertas[i].style.transition = `1s`;
// 		}
// 	}
	
// }
// window.addEventListener("scroll", desplazar_arriba);