// PLTB Pi Lego Train Basement 0.1
// David Wagner


// Lade plugins
var fs = require('fs');
var express = require('express'),
app = express(),
http = require('http').Server(app),
io = require('socket.io')(http);
 //Verzeichnisse Webserver definieren
app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/img", express.static(__dirname + '/img'));
// index.html auf /
app.get('/', function(req, res) {
res.sendFile(__dirname + '/index.html');
});

// Raspberry Module laden
	var five = require('johnny-five');
	var raspi = require("raspi-io");
	var board = new five.Board({
  		io: new raspi()
	});
// Lego IR lirc
	var sys = require('sys');
	var exec = require('child_process').exec;

// Linux Infrarot Transmitter sendet Kommando
// Code concept and prerequisites found here: https://github.com/dspinellis/lego-power-scratch
	function pfir(command){
        exec('irsend SEND_ONCE LEGO_Single_Output ' + command, function(error, stdout, stderr){ 
        	if(error)
          		console.log("Error sending command: " + command);
        });
	}

//Socket.io Funktion

io.sockets.on('connection', function (socket) {
    console.log('A client is connected!');
 //Test Message Client verbunden   
  socket.on('message', function (message) {
        console.log('A client is speaking to me! They\'re saying: ' + message);
    }); 
    
   // Zug Befehl Kanal 1 Fahren
        socket.on('fahren1', function(kanal, farbe, speed, richtung){
console.log("Moving" +kanal +farbe +richtung +speed);
				pfir(kanal + farbe +'_'+ richtung + speed);
    });
// Zug Befehl ende    
});

http.listen(8080);




