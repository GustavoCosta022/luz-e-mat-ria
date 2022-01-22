let nbPlanets = 8;
let planets = [];
let speedMin = 0.4;
let speedMax = 2;
let trails = 64;

function setup() {
  angleMode(DEGREES);
  createCanvas(1920 , 1080 );
  noFill();
  noStroke();
  for (i = 0; i < nbPlanets; i++) {
    let planet = new Planet();
    planets.push(planet);
  }
}

function draw() {
  background(10);
  translate(width / 2, height / 2);
  for (i = 0; i < planets.length; i++) {
    push();
    rotate(planets[i].orbitAngle);
    //    ellipse(0, 0, planets[i].orbitX * 2, planets[i].orbitY * 2);
    for (j = 1; j < trails + 1; j++) {
      let colooor = planets[i].color;
      colooor.setBlue(j * 1.5);
      colooor.setGreen(j * 1.5);
      colooor.setAlpha((255 / trails) * j);
      fill(colooor);
      circle(
        cos(planets[i].planetAngle - 1.5 * (trails - j) * planets[i].dir) *
          planets[i].orbitX,
        sin(planets[i].planetAngle - 1.8 * (trails - j) * planets[i].dir) *
          planets[i].orbitY,
        (planets[i].size / trails) * j
      );
      fill(random(200,255), random(100,255),0,2);
      push();
      rotate(random(180))
      ellipse(random(-10,10), random(-10,10), random(10,120), random(10,60))
      pop();
    }
    planets[i].planetAngle += planets[i].speed * planets[i].dir;
    planets[i].orbitAngle += planets[i].speed / 50;
    pop();
  }
}

class Planet {
  constructor() {
    this.orbitX = random(60, width / 2 - 20);
    this.orbitY = random(60, height / 2 - 20);
    this.orbitAngle = random(0, 90);
    this.planetAngle = random(0, 360);
    this.speed = random(speedMin, speedMax);
    this.dir = 2 * round(random()) - 1;
    this.size = random(10, 40);
    this.color = color(random(50, 150), 0, random(150, 255));
  }
}