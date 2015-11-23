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
app.use("/index.html", express.static(__dirname + '/index.html'));

// index.html auf /
app.get('/', function(req, res) {
res.sendFile(__dirname + '/index.html');

});

// ******************** Temperatur & Feuchtigkeit *******************
var sensorLib = require('node-dht-sensor');

var sensor = {
    initialize: function () {
    //GPIO Pin 4
        return sensorLib.initialize(22, 4);
    },
    read: function () {
        var readout = sensorLib.read();
        console.log('Temperature: ' + readout.temperature.toFixed(2) + 'C, ' +
            'humidity: ' + readout.humidity.toFixed(2) + '%');
        setTimeout(function () {
            sensor.read();
        }, 2000);
    }
};

if (sensor.initialize()) {
    sensor.read();
} else {
    console.warn('Failed to initialize sensor');
}

//************************************************************************











// Raspberry Module laden
	var five = require('johnny-five'),servo;
	var raspi = require("raspi-io");
	
	//var five = require("johnny-five");
   var arduboard = new five.Board();
	// Arduino initialisieren

	var board = new five.Board({
  		io: new raspi()
	});
// Lego IR lirc
	var sys = require('sys');
	var exec = require('child_process').exec;


// Weiche 1 an Port 7 Arduino definieren
arduboard.on("ready", function() {
// Weiche 1 an Port 7 Arduino definieren
  servo7 = new five.Servo({
    pin:7,
    range: [0,45],
    type: "standard",
    center:false
  });

//    var switchServo = new five.Servo(7); // Crossing Arm
	// Add devices to REPL (optional)
    this.repl.inject({
        servo7: servo7,
    });
     servo7.to(0); // Adjust this servo angle as needed
});
//*********************************************


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
    
   // Zug Befehl Kanal  Fahren
        socket.on('fahren1', function(kanal, farbe, speed, richtung){
console.log("Moving" +kanal +farbe +richtung +speed);
				pfir(kanal + farbe +'_'+ richtung + speed);
    });
// Zug Befehl ende    
// Servo 1 Pin 7 bewegen
socket.on('servo7call', function (winkel) {
    console.log(winkel);
    if(board.isReady){ servo7.to(winkel.pos);  }
  });
// Servo 1 Pin 7 ende


});

http.listen(80);





