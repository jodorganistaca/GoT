// El primer paso es crear un nuevo objeto "Phaser.Game" y definir su tamaño
var juego = new Phaser.Game(944,793, Phaser.CANVAS, "got");

//declara las variables globales
var fondo,fondoPix,cerrar,bolita;

//gifs places
var winterfell,castleBlack,greyjoy,casaArryn,lannisport,casaTully,highGarden,dragonstone,casaMartell,baratheon; 

//Para los titulos
var style1 = { font: "100px Times New Roman", fill: "#6797F1"};
var style3 = { font: "100px Times New Roman", fill: "#FBFF75"};
var style4 = { font: "100px Times New Roman", fill: "#ff3333"};
var style5 = { font: "100px Times New Roman", fill: "#26872C"};
//Para el contenido
var style2 = { font: "18px Lucida Console", fill: "#ffffff", align: "justify"};


//botones
var castleBlackButton;
var winterfellButton;
var greyjoyButton;
var casaArrynButton;
var lannisportButton; 
var casaTullyButton; 
var highGardenButton; 
var baratheonButton; 
var casaMartellButton;

//titulos 
var t1, t2, t3, t4, t5, t6, t7, t8, t9;

//parrafos
var p1,p2,p3,p4,p5,p6,p7,p8,p9;
// Define "jugando", donde va a ocurrir el juego
// El estado jugando tiene tres métodos básicos: preload, create y update
var jugando = {
	preload: function() {        // primero carga todas las imágenes
		
		juego.load.image("imgfondo", "imagenes/mapaGoT.jpg");
		//gifs señales
		//juego.load.spritesheet('f1','imagenes/arrowGif.png',200,200,8);
		//gifs places
		juego.load.spritesheet('winterfell','imagenes/winterfell.png',590,329,41);
		juego.load.spritesheet('castleBlack','imagenes/castleBlack.png',480,263,50);
		juego.load.spritesheet('greyjoy','imagenes/greyjoy.png',500,490,10);
		juego.load.image('casaArryn','imagenes/casaArryn.jpg');
		juego.load.spritesheet('lannisport','imagenes/lannisport.png',434,250,29);
		juego.load.spritesheet('highGarden','imagenes/highGarden.png',248,140,9);
		juego.load.spritesheet('dragonstone','imagenes/dragonstone.png',480,268,50);
		juego.load.spritesheet('casaTully','imagenes/casaTully.png',480,268,34);
		juego.load.spritesheet('baratheon','imagenes/baratheon.png',250,170,34);
		juego.load.spritesheet('casaMartell','imagenes/casaMartell.png',420,237,9);
		//Imagenes botones
		juego.load.image("button1","imagenes/castleBlackButton.jpg");
		juego.load.image("button2","imagenes/winterfellButton.jpg");
		juego.load.image("button3","imagenes/greyjoyButton.jpg");
		juego.load.image("button4","imagenes/casaArrynButton.jpg");
		juego.load.image("button5","imagenes/lannisportButton.jpg");
		juego.load.image("button6","imagenes/casaTullyButton.jpg");
		juego.load.image("button7","imagenes/highGardenButton.jpg");
		juego.load.image("button8","imagenes/baratheonButton.jpg");
		juego.load.image("button9","imagenes/casaMartellButton.jpg");
		//Imagen para cerrar la descripcións
		//juego.load.image("botoncerrar", "imagenes/botoncerrar.png");
		

	},
	
    create: function() {           // crea los actores y muestra las imágenes
        juego.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		juego.scale.setMinMax(500, 336, 1000, 800); //se indica el tamaño minimo y maximo del canvas

		//Se agregan las imagenes de ondo y oculta la pixelada
		fondo = juego.add.sprite(0, 0, "imgfondo");
		//fondo.visible=false;
		//places Igualmente se crean las animaciones de los lugares y se ocultan
		winterfell = juego.add.sprite(590,329,'winterfell',41);
		winterfell.scale.setTo(0.5,0.7);
		var winterfellA= winterfell.animations.add('winterfell');
		winterfellA.play(8, true);
		winterfell.visible = false;

		castleBlack = juego.add.sprite(480,263,'castleBlack',50);
		castleBlack.scale.setTo(0.7,0.7);
		var castleBlackA= castleBlack.animations.add('castleBlack');
		castleBlackA.play(8, true);
		castleBlack.visible = false;

		greyjoy = juego.add.sprite(500,490,'greyjoy',10);
		greyjoy.scale.setTo(0.6,0.6);
		var greyjoyA= greyjoy.animations.add('greyjoy');
		greyjoyA.play(8, true);
		greyjoy.visible = false;

		casaArryn = juego.add.sprite(0,0,'casaArryn');
		casaArryn.scale.setTo(0.28,0.28);
		casaArryn.visible = false

		highGarden = juego.add.sprite(250,430,'highGarden',23);
		highGarden.scale.setTo(0.7,0.7);
		var highGardenA= highGarden.animations.add('highGarden');
		highGardenA.play(8, true);
		highGarden.visible = false;

		lannisport = juego.add.sprite(434,250,'lannisport',29);
		lannisport.scale.setTo(0.7,0.7);
		var lannisportA= lannisport.animations.add('lannisport');
		lannisportA.play(8, true);
		lannisport.visible = false;

		dragonstone = juego.add.sprite(480,270,'dragonstone',50);
		dragonstone.scale.setTo(0.7,0.7);
		var dragonstoneA= dragonstone.animations.add('dragonstone');
		dragonstoneA.play(8, true);
		dragonstone.visible = false;

		casaTully = juego.add.sprite(480,268,'casaTully',34);
		casaTully.scale.setTo(0.7,0.7);
		var casaTullyA= casaTully.animations.add('casaTully');
		casaTullyA.play(8, true);
		casaTully.visible = false;
      
		baratheon = juego.add.sprite(250,170,'baratheon',34);
		var baratheonA= baratheon.animations.add('baratheon');
		baratheonA.play(8, true);
		baratheon.visible = false;
		
		casaMartell = juego.add.sprite(420,237,'casaMartell',9);
		casaMartell.scale.setTo(0.6,0.6);
		var casaMartellA= casaMartell.animations.add('casaMartell');
		casaMartellA.play(8, true);
		casaMartell.visible = false;

		//botones y agrega funciones para el momento de hacer clic mostar la info
		castleBlackButton = juego.add.button(469,42, "button1",verCastleBlack,this);
		winterfellButton = juego.add.button(431,163, "button2",verWinterfell,this);
		greyjoyButton = juego.add.button(319,404, "button3",verGreyjoy,this);
		casaArrynButton = juego.add.button(501,379, "button4",verCasaArryn,this);
		lannisportButton = juego.add.button(347,500, "button5",verLannisport,this);
		casaTullyButton = juego.add.button(408,	437, "button6",verCasaTully,this);
		highGardenButton = juego.add.button(379,616, "button7",verHighGarden,this);
		baratheonButton = juego.add.button(526,560, "button8",verBaratheon,this);
		casaMartellButton = juego.add.button(514,718, "button9",verCasaMartell,this);
		
		
		bolita = this.add.graphics();
	},
	
	update: function(){                // ejecuta de manera reiterativa
		//interaccion con tactil
		if (juego.input.pointer1.isDown){ //poner una bolita gris donde se presiona
			bolita.clear(); //quita las bolitas anteriores
			bolita.beginFill(0x555555); //empieza a rellenar figuras con el color dado por parametro
			bolita.drawCircle(this.input.pointer1.x, this.input.pointer1.y, 15); // se dibuja una bolita de radio 15px en la pocision donde se toco la pantalla
			bolita.endFill();// se deja de rellenar figuras
		}
	},

}
function verCastleBlack(){
	castleBlack.visible = true;
}
function verWinterfell(){
	winterfell.visible = true;
}
function verGreyjoy(){
	greyjoy.visible = true;
}
function verCasaArryn(){
	casaArryn.visible = true;
}
function verLannisport(){
	lannisport.visible = true;
}
function verCasaTully(){
	casaTully.visible = true;
} 
function verHighGarden(){
	highGarden.visible = true;
} 
function verBaratheon(){
	baratheon.visible = true;
} 
function verCasaMartell(){
	casaMartell.visible = true;
}

juego.state.add("activo", jugando);   // define a "jugando" como un estado
juego.state.start("activo");                 // inicia con el estado "jugando"
