function drawRacemap() {
    
context.fillStyle = 'grey'
context.fillRect(0,0, 400, 500)

context.fillStyle = 'green';
context.fillRect(0, 0, 20, 600);


context.fillStyle = 'green';
context.fillRect(380, 0, 20, 600);

context.fillStyle = 'white';
context.fillRect(30, 0, 10, 600);

context.fillStyle = 'white';
context.fillRect(360, 0, 10, 600);

for (let i = 0; i < 16; i++) {
  context.fillStyle = 'white';
  context.fillRect(200, i * 50, 3, 20);
}
}