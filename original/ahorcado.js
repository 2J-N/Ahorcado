var palabra = "t a m a r i n d o";
var hombre;

var Ahorcado = function(contexto){
	//this son variables locales de clase, accesibles en toda la clase
	/*this.contexto es el contesto de dibujo del canvas,
	que llega por parametro desde la variable contexto*/
	this.contexto = contexto;
	this.maximo = 5;
	this.intentos = 0;
	this.vivo = true;
	
	this.dibujar();
}
Ahorcado.prototype.dibujar = function(){
	var dibujo = this.contexto;
	
	dibujo.beginPath();
	dibujo.moveTo(150,100);
	dibujo.lineTo(150,50);
	dibujo.lineTo(400,50);
	dibujo.lineTo(400,350);
	dibujo.lineWidth = 15;
	dibujo.strokeStyle = "#000000";
	dibujo.stroke();
	dibujo.closePath();
	
	if(this.intentos > 0){
		//cabeza
		dibujo.beginPath();
		dibujo.arc(150,140,40,0,Math.PI*2,false);
		dibujo.strokeStyle = "red";
		dibujo.lineWidth = 5;
		dibujo.stroke();
		dibujo.closePath();
		
		if(this.intentos > 1){
			//torzo
			dibujo.beginPath();
			dibujo.moveTo(150,180);
			dibujo.lineTo(150,250);
			dibujo.strokeStyle = "red";
			dibujo.lineWidth = 5;
			dibujo.stroke();
			dibujo.closePath();
			
			if(this.intentos > 2){
				//brazos
				dibujo.beginPath();
				dibujo.moveTo(120,210);
				dibujo.lineTo(150,180);
				dibujo.lineTo(180,210);
				dibujo.strokeStyle = "red";
				dibujo.lineWidth = 5;
				dibujo.stroke();
				dibujo.closePath();
				
				if(this.intentos > 3){
					//piernas
					dibujo.beginPath();
					dibujo.moveTo(120,290);
					dibujo.lineTo(150,250);
					dibujo.lineTo(180,290);
					dibujo.strokeStyle = "red";
					dibujo.lineWidth = 5;
					dibujo.stroke();
					dibujo.closePath();
					
					if(this.intentos > 4){
						//ojos muertos
						dibujo.beginPath();
						//ojo izquierdo
						dibujo.moveTo(125,120);
						dibujo.lineTo(145,145);
						dibujo.moveTo(145,120);
						dibujo.lineTo(125,145);
						
						//ojo derecho
						dibujo.moveTo(155,120);
						dibujo.lineTo(175,145);
						dibujo.moveTo(175,120);
						dibujo.lineTo(155,145);
						
						dibujo.strokeStyle = "blue";
						dibujo.stroke();
						dibujo.closePath();
					}
				}
			}
		}
	}
}
Ahorcado.prototype.trazar = function(){
	this.intentos++;
	
	if(this.intentos >= this.maximo){
		this.vivo = false;
		alert("Estas muerto");
	}
	
	this.dibujar();
}

function iniciar(){
	var canvas = document.getElementById("c");
	canvas.width = 500;
	canvas.height = 400;
	var contexto = canvas.getContext("2d");
	hombre = new Ahorcado(contexto);
}

function probarLetra(){
	var existe = false;
	var letra = document.getElementById("letra").value;
	var formado = document.getElementById("pista").innerHTML;
	var cadena = "";
	
	for(var i = 0; i < palabra.length; i++){
		if(letra === palabra.charAt(i)){
			cadena = cadena.concat(letra);
			existe = true
		}
		else
			cadena = cadena.concat(formado.charAt(i));
	}

	pista.textContent = cadena;

	if(!existe)
		hombre.trazar();
}