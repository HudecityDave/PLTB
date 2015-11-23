var socket = io.connect('http://192.168.1.149:80');
$('#poke').on('click', function() {
  socket.emit('message', 'Hi server, how are you?');
  });
    
    


    $('#1bstop').on('click', function() {
//  socket.emit('stoppen');
    $('#1blue.knob')
        .val(0)
        .trigger('change');
});
    $('#2bstop').on('click', function() {
//  socket.emit('stoppen');
    $('#2blue.knob')
        .val(0)
        .trigger('change');
});
    $('#3bstop').on('click', function() {
//  socket.emit('stoppen');
    $('#3blue.knob')
        .val(0)
        .trigger('change');
});
    $('#4bstop').on('click', function() {
//  socket.emit('stoppen');
    $('#4blue.knob')
        .val(0)
        .trigger('change');
});




// Roooooooot


    $('#1rstop').on('click', function() {
//  socket.emit('stoppen');
    $('#1red.knob')
        .val(0)
        .trigger('change');
});

    $('#2rstop').on('click', function() {
//  socket.emit('stoppen');
    $('#2red.knob')
        .val(0)
        .trigger('change');
});
    $('#3rstop').on('click', function() {
//  socket.emit('stoppen');
    $('#3red.knob')
        .val(0)
        .trigger('change');
});
    $('#4rstop').on('click', function() {
//  socket.emit('stoppen');
    $('#4red.knob')
        .val(0)
        .trigger('change');
});