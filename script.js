var c = document.getElementById('maisonCanvas');
var ctx = c.getContext('2d');
// ctx.arc(x, y, rayon, angleInitial, angleFinal, antihoraire);
// ctx.beginPath();
// ctx.arc(100, 80, 20, 0, Math.PI, true);
// ctx.fillStyle = '#8A0908';
// ctx.fill();

// carré
// quadraticCurveTo(cp1x, cp1y, x, y)
ctx.beginPath();
ctx.moveTo(5, 5);
ctx.quadraticCurveTo(380, 5, 380, 5);
ctx.quadraticCurveTo(380, 5, 380, 395);
ctx.quadraticCurveTo(5, 395, 5, 395);
ctx.fillStyle = '#0000FF';
ctx.fill();

// soucoupe
//bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) cp=> poignées
//dôme
ctx.beginPath();
ctx.moveTo(250, 170);
ctx.bezierCurveTo(210, 100, 190, 100, 150, 170);
ctx.fillStyle = 'white';
ctx.fill();

//corp
ctx.beginPath();
ctx.moveTo(70, 200);
ctx.bezierCurveTo(170, 140, 230, 140, 330, 200);
ctx.bezierCurveTo(230, 260, 170, 260, 70, 200);
ctx.fillStyle = '#E0E1F3';
ctx.fill();
