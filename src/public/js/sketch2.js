let earth;

let moon;
let satellites = [];

let bg;


let G = 3;

function setup(){
    createCanvas(windowWidth, windowHeight);
  bg = loadImage('/img/background.jpg');

  earth = new Body(150, createVector(0,0), createVector(0,0), 11, 64, 150)

  let radiousMoon = 200;
  let thetaMoon = 22;
  let PosMoon = createVector(radiousMoon*cos(thetaMoon), radiousMoon*sin(thetaMoon));
  let VelMoon = PosMoon.copy();
  VelMoon.rotate(HALF_PI);
  VelMoon.setMag(sqrt(G * earth.mass / PosMoon.mag()));

  moon = new Body(35, PosMoon, VelMoon, 114, 133, 130, 100);

  for (let i = 0; i < 15; i++) {
     let r = random(30, 110);
     let theta = random(TWO_PI);
     let pos = createVector(r*cos(theta), r*sin(theta));
     let vel = pos.copy();
     vel.rotate(HALF_PI);
     vel.setMag(sqrt(G * earth.mass / pos.mag()));

     let satellite =  new Body(3, pos, vel, 255, 255, 255, 15);
     satellites.push(satellite);
  }
}

if(windowWidth <= 768){ //responsive
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('/img/background.jpg');
  
    earth = new Body(150, createVector(0,0), createVector(0,0), 11, 64, 150)
  
    let radiousMoon = 200;
    let thetaMoon = 22;
    let PosMoon = createVector(radiousMoon*cos(thetaMoon), radiousMoon*sin(thetaMoon));
    let VelMoon = PosMoon.copy();
    VelMoon.rotate(HALF_PI);
    VelMoon.setMag(sqrt(G * earth.mass / PosMoon.mag()));
  
    moon = new Body(35, PosMoon, VelMoon, 114, 133, 130, 100);
  
    for (let i = 0; i < 15; i++) {
       let r = random(30, 110);
       let theta = random(TWO_PI);
       let pos = createVector(r*cos(theta), r*sin(theta));
       let vel = pos.copy();
       vel.rotate(HALF_PI);
       vel.setMag(sqrt(G * earth.mass / pos.mag()));
  
       let satellite =  new Body(3, pos, vel, 255, 255, 255, 15);
       satellites.push(satellite);
    }
}

if(windowWidth <= 460){ 
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('/img/background.jpg');
  
    earth = new Body(150, createVector(0,0), createVector(0,0), 11, 64, 150)
  
    let radiousMoon = 200;
    let thetaMoon = 22;
    let PosMoon = createVector(radiousMoon*cos(thetaMoon), radiousMoon*sin(thetaMoon));
    let VelMoon = PosMoon.copy();
    VelMoon.rotate(HALF_PI);
    VelMoon.setMag(sqrt(G * earth.mass / PosMoon.mag()));
  
    moon = new Body(35, PosMoon, VelMoon, 114, 133, 130, 100);
  
    for (let i = 0; i < 15; i++) {
       let r = random(30, 110);
       let theta = random(TWO_PI);
       let pos = createVector(r*cos(theta), r*sin(theta));
       let vel = pos.copy();
       vel.rotate(HALF_PI);
       vel.setMag(sqrt(G * earth.mass / pos.mag()));
  
       let satellite =  new Body(3, pos, vel, 255, 255, 255, 15);
       satellites.push(satellite);
    };
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    background(bg);

}

function draw() {
    translate(width/2, height/2);
    background(bg);

    for (let i = 0; i < satellites.length; i++) {

        earth.gravity(satellites[i]);
        satellites[i].move();
        satellites[i].show();
    
    }

    earth.show();

    earth.gravity(moon);
    moon.move();
    moon.show();

    for (let i = 0; i < satellites.length; i++) {

        earth.gravity(satellites[i]);
        satellites[i].move();
        satellites[i].show();
    
    }
}

function Body(_mass, _pos, _vel, _r, _g, _b, _splice){
    this.mass  = _mass;
    this.pos = _pos;
    this.vel = _vel; 
    this.rColor = _r;
    this.gColor = _g;
    this.bColor = _b;
    this.splice = _splice;
    this.r = this.mass;

    this.path = [];

    this.show = () => {
        noStroke(); fill(this.rColor, this.gColor, this.bColor);
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
        stroke(255);
        
        for (let i = 0; i < this.path.length -2; i++) {
            line(this.path[i].x, this.path[i].y, this.path[i+1].x, this.path[i+1].y);
        }
    }
    this.move = () => {
        //actualiza la posicion del planeta
    
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y; 
        this.path.push(this.pos.copy());
    
        if(this.path.length > this.splice){
          this.path.splice(0, 1);
        }
      }
    
      this.applyForce = (f) => {
        this.vel.x += f.x / this.mass;
        this.vel.y += f.y / this.mass;
      }
    
      this.gravity = (child) => {
        let r = dist(this.pos.x, this.pos.y, child.pos.x, child.pos.y);
        let f = this.pos.copy().sub(child.pos);
        f.setMag(G * this.mass * child.mass / (r * r));
        child.applyForce(f);
      }
}