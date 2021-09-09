/* create a simple physics simulation */
var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
var mouse = {
  x: 0,
  y: 0
};
var maxRadius = 50;
var minRadius = 5;
var color = '#ff0000';
var particles = [];
function Particle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.velocity = {
    x: 0,
    y: 0
  };
  this.acceleration = {
    x: 0,
    y: 0
  };
}
Particle.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  ctx.fillStyle = this.color;
  ctx.fill();
};
Particle.prototype.update = function() {
  this.draw();
  if (this.x + this.radius > canvas.width) {
    this.velocity.x = -this.velocity.x;
  } else if (this.x - this.radius < 0) {
    this.velocity.x = -this.velocity.x;
  }
  if (this.y + this.radius > canvas.height) {
    this.velocity.y = -this.velocity.y;
  } else if (this.y - this.radius < 0) {
    this.velocity.y = -this.velocity.y;
  }
  this.x += this.velocity.x;
  this.y += this.velocity.y;
};
function addParticle() {
  var x = Math.random() * canvas.width;
  var y = Math.random() * canvas.height;
  var radius = Math.random() * maxRadius + minRadius;
  var color = '#' + Math.random().toString(16).substr(-6);
  var particle = new Particle(x, y, radius, color);
  particle.velocity.x = Math.random() * 2 - 1;
  particle.velocity.y = Math.random() * 2 - 1;
  particle.acceleration.x = Math.random() * 2 - 1;
  particle.acceleration.y = Math.random() * 2 - 1;
  particles.push(particle);
}
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < particles.length; i++) {
    var particle = particles[i];
    particle.update();
  }
}
function windowResized() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', windowResized);
function mouseMoved(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}
window.addEventListener('mousemove', mouseMoved);
function loop() {
  update();
  requestAnimationFrame(loop);
}
loop();

/* disable scrollbar */
document.body.style.overflow = 'hidden';

/* add particle when mouse is clicked */
canvas.addEventListener('click', function(e) {
  addParticle();
});
