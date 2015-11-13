// traincrossing.js

// Dependencies 
var five = require("johnny-five");
var arduboard = new five.Board();

// Arduino board connection
arduboard.on("ready", function() {


    var switchServo = new five.Servo(7); // Crossing Arm
	// Add devices to REPL (optional)
    this.repl.inject({
        switchServo: switchServo,
        
    });
    
     switchServo.to(0); // Adjust this servo angle as needed
        
});