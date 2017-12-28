var five = require('johnny-five'); //Inclui módulos existentes em arquivos separados no programa
var board = new five.Board(); 

board.on("ready", function() { // on => Liga o Led
	var led = new five.Led(13); //porta
	led.blink(100); //delay
});