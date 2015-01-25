var forest;
var  intentos = 0;
var palabra = "M a d r i d";

function probrarLetra() {
	var existe = false;
	var letra = document.getElementById("letra").value;
	var formado = document.getElementById("frase").innerHTML;
	var cadena = "";
	
	for(var i = 0; i < palabra.length; i++){
		
		if(letra == palabra.charAt(i)){
			cadena = cadena.concat(letra);
			existe = true;
		}
		
		else
			cadena = cadena.concat(formado.charAt(i));
 		
	}
	
	frase.textContent = cadena;
	
	if(!existe) {
		if(intentos > 3){
			document.getElementById("letra").readOnly = true;
			alert("Estas muerto");
		}
		intentos++;
		
		dibujar();
	}
}

var livingForest = {
	ubicacion: "sprites/background.png",
	cargada: false
};

var scorpion = {
	cabezaU: "sprites/head.png",
	pechoU: "sprites/chest.png",
	brazoIzqU: "sprites/armLeft.png",
	brazoDerU: "sprites/armRight.png",
	piernaIzqU: "sprites/legLeft.png",
	piernaDerU: "sprites/legRight.png",
	craneoU: "sprites/skull.png",
	cargado: false
};

function inicio() {
	var canvas = document.getElementById("livingForest");
	forest = canvas.getContext("2d");
	
	livingForest.imagen = new Image();
	livingForest.imagen.src = livingForest.ubicacion;
	livingForest.imagen.onload = livingForest.cargado = true;
	
	scorpion.cabeza = new Image();
	scorpion.cabeza.src = scorpion.cabezaU;
	scorpion.pecho = new Image();
	scorpion.pecho.src = scorpion.pechoU;
	scorpion.brIzq = new Image();
	scorpion.brIzq.src = scorpion.brazoIzqU;
	scorpion.brDer = new Image();
	scorpion.brDer.src = scorpion.brazoDerU;
	scorpion.prIzq = new Image();
	scorpion.prIzq.src = scorpion.piernaIzqU;
	scorpion.prDer = new Image();
	scorpion.prDer.src = scorpion.piernaDerU;
	scorpion.craneo = new Image();
	scorpion.craneo.src = scorpion.craneoU;

	scorpion.cabeza.onload = scorpion.pecho.onload = scorpion.brIzq.onload =
	scorpion.brDer.onload = scorpion.prIzq.onload = scorpion.prDer.onload =
	scorpion.craneo.onload = scorpion.cargado = true;
	
	dibujar();
}

function dibujar() {
	if(livingForest.cargado && intentos == 0)
		forest.drawImage(livingForest.imagen, 0, 0);
		
	if(scorpion.cargado && intentos == 1)
		forest.drawImage(scorpion.cabeza, 140, 50);
		
	if(scorpion.cargado && intentos == 2)
		forest.drawImage(scorpion.pecho, 120, 70);
		
	if(scorpion.cargado && intentos == 3) {
		forest.drawImage(scorpion.brIzq, 164, 80);
		forest.drawImage(scorpion.brDer, 102, 84);
	}
	
	if(scorpion.cargado && intentos == 4) {
		forest.drawImage(scorpion.prIzq, 156, 114);
		forest.drawImage(scorpion.prDer, 124, 114);
	}
	
	if(scorpion.cargado && intentos == 5)
		forest.drawImage(scorpion.craneo, 140, 50);
}
