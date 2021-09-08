/* remove padding and margins */
document.body.style.padding = 0;
document.body.style.margin = 0;

/* add fullscreen canvas */
var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

/* add basic particle class with no functions and lifetime */
var Particle = function() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.vx = Math.random() * 10 - 5;
  this.vy = Math.random() * 10 - 5;
  this.lifetime = Math.random() * 100;
};

/* rewrite with arguments */
var Particle = function(x, y, vx, vy, lifetime) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.lifetime = lifetime;
};

/* add color argument */
var Particle = function(x, y, vx, vy, lifetime, color) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.lifetime = lifetime;
  this.color = color;
};

/* add array */
var particles = [];

/* create update function that deletes particles with lifetime is 0 */
var update = function() {
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.lifetime--;
    if (p.lifetime === 0) {
      particles.splice(i, 1);
      i--;
    }
  }
};

/* create draw function */
var draw = function() {
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, 10, 10);
  }
};

/* particle should be circles and opacity should be calculate from lifetime */
var Particle = function(x, y, vx, vy, lifetime, color) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.lifetime = lifetime;
  this.color = color;
};
var update = function() {
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.lifetime--;
    if (p.lifetime === 0) {
      particles.splice(i, 1);
      i--;
    }
  }
};
var draw = function() {
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    ctx.fillStyle = 'rgba(' + p.color + ', ' + (p.lifetime / 100) + ')';
    ctx.beginPath();
    ctx.arc(p.x, p.y, 10, 0, Math.PI * 2, true);
    ctx.fill();
  }
};

/* split color into components */
var Particle = function(x, y, vx, vy, lifetime, color) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.lifetime = lifetime;
  this.color = color;
  this.r = color[0];
  this.g = color[1];
  this.b = color[2];
};

/* rewrite draw function */
var draw = function() {
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    ctx.fillStyle = 'rgba(' + p.r + ', ' + p.g + ', ' + p.b + ', ' + (p.lifetime / 100) + ')';
    ctx.beginPath();
    ctx.arc(p.x, p.y, 10, 0, Math.PI * 2, true);
    ctx.fill();
  }
};

/* add particle when mouse click */
var Particle = function(x, y, vx, vy, lifetime, color) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.lifetime = lifetime;
  this.color = color;
  this.r = color[0];
  this.g = color[1];
  this.b = color[2];
};
var update = function() {
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.lifetime--;
    if (p.lifetime === 0) {
      particles.splice(i, 1);
      i--;
    }
  }
};
var draw = function() {
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    ctx.fillStyle = 'rgba(' + p.r + ', ' + p.g + ', ' + p.b + ', ' + (p.lifetime / 100) + ')';
    ctx.beginPath();
    ctx.arc(p.x, p.y, 10, 0, Math.PI * 2, true);
    ctx.fill();
  }
};
canvas.addEventListener('click', function(e) {
  var p = new Particle(e.offsetX, e.offsetY, Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 100, [Math.random() * 255, Math.random() * 255, Math.random() * 255]);
  particles.push(p);
});

/* run */
setInterval(update, 20);
setInterval(draw, 20);
