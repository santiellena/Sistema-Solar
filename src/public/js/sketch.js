

let sun;
let mercurio;
let venus;
let tierra;
let marte;
let jupiter;
let saturno;
let urano;
let neptuno;

let bg;

let G = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = loadImage('/img/background.jpg')
  sun = new Body(150, createVector(0,0), createVector(0,0), 246, 255, 0, 0);

  let radiousMercurio = 157; //sun.r = 100 -- windowWidth = 340.5 (en mitad de pantalla en notebook)
  // r es la distancia entre el sol y el planeta y theta es en que parte de la orbita se encuentra el planeta
  let thetaMercurio = 22;
  let PosMercurio = createVector(radiousMercurio*cos(thetaMercurio), radiousMercurio*sin(thetaMercurio));
  let VelMercurio = PosMercurio.copy();
  VelMercurio.rotate(HALF_PI);
  VelMercurio.setMag(sqrt(G * sun.mass / PosMercurio.mag()));

  mercurio = new Body(5, PosMercurio, VelMercurio, 120, 58, 47, 100);

  let radiousVenus = 208;
  let thetaVenus = 22;
  let PosVenus = createVector(radiousVenus*cos(thetaVenus), radiousVenus*sin(thetaVenus));
  let VelVenus = PosVenus.copy();
  VelVenus.rotate(HALF_PI);
  VelVenus.setMag(sqrt(G * sun.mass / PosVenus.mag()));

  venus = new Body(10, PosVenus, VelVenus, 222, 184, 177, 100);

  let radiousTierra = 255;
  let thetaTierra = 22;
  let PosTierra = createVector(radiousTierra* cos(thetaTierra), radiousTierra* sin(thetaTierra));
  let VelTierra = PosTierra.copy();
  VelTierra.rotate(HALF_PI);
  VelTierra.setMag(sqrt(G * sun.mass / PosTierra.mag()));

  tierra = new Body(11, PosTierra, VelTierra, 77, 123, 168, 100);

  let radiousMarte = 300;
  let thetaMarte = 22;
  let PosMarte = createVector(radiousMarte * cos(thetaMarte), radiousMarte * sin(thetaMarte));
  let VelMarte = PosMarte.copy();
  VelMarte.rotate(HALF_PI);
  VelMarte.setMag(sqrt(G * sun.mass / PosMarte.mag()));

  marte = new Body(5.5, PosMarte, VelMarte, 124, 50, 50, 100);

  let radiousJupiter = 360;
  let thetaJupiter = 22;
  let PosJupiter = createVector(radiousJupiter * cos(thetaJupiter), radiousJupiter * sin(thetaJupiter));
  let VelJupiter = PosJupiter.copy();
  VelJupiter.rotate(HALF_PI);
  VelJupiter.setMag(sqrt(G * sun.mass / PosJupiter.mag()));

  jupiter = new Body(70, PosJupiter, VelJupiter, 186, 99, 52, 100);

  let radiousSaturno = 470;
  let thetaSaturno = 22;
  let PosSaturno = createVector(radiousSaturno * cos(thetaSaturno), radiousSaturno * sin(thetaSaturno));
  let VelSaturno = PosSaturno.copy();
  VelSaturno.rotate(HALF_PI);
  VelSaturno.setMag(sqrt(G * sun.mass / PosSaturno.mag()));

  saturno = new Body(70, PosSaturno, VelSaturno, 222, 157, 122, 100);

  let radiousUrano = 540;
  let thetaUrano = 22;
  let PosUrano = createVector(radiousUrano * cos(thetaUrano), radiousUrano * sin(thetaUrano));
  let VelUrano = PosUrano.copy();
  VelUrano.rotate(HALF_PI);
  VelUrano.setMag(sqrt(G * sun.mass / PosUrano.mag()));

  urano = new Body(35, PosUrano, VelUrano, 151, 192, 199, 100);

  let radiousNeptuno = 600;
  let thetaNeptuno = 22;
  let PosNeptuno = createVector(radiousNeptuno * cos(thetaNeptuno), radiousNeptuno * sin(thetaNeptuno));
  let VelNeptuno = PosNeptuno.copy();
  VelNeptuno.rotate(HALF_PI);
  VelNeptuno.setMag(sqrt(G * sun.mass / PosNeptuno.mag()));

  neptuno = new Body(32, PosNeptuno, VelNeptuno, 107, 116, 150, 100);

  if(windowWidth <= 768){ //responsive
    createCanvas(windowWidth, windowHeight);

  sun = new Body(75, createVector(0,0), createVector(0,0), 246, 255, 0, 0);

  let radiousMercurio = 79; //sun.r = 100 -- windowWidth = 340.5 (en mitad de pantalla en notebook)
  // r es la distancia entre el sol y el planeta y theta es en que parte de la orbita se encuentra el planeta
  let thetaMercurio = 22;
  let PosMercurio = createVector(radiousMercurio*cos(thetaMercurio), radiousMercurio*sin(thetaMercurio));
  let VelMercurio = PosMercurio.copy();
  VelMercurio.rotate(HALF_PI);
  VelMercurio.setMag(sqrt(G * sun.mass / PosMercurio.mag()));

  mercurio = new Body(2.5, PosMercurio, VelMercurio, 120, 58, 47, 50);

  let radiousVenus = 104;
  let thetaVenus = 22;
  let PosVenus = createVector(radiousVenus*cos(thetaVenus), radiousVenus*sin(thetaVenus));
  let VelVenus = PosVenus.copy();
  VelVenus.rotate(HALF_PI);
  VelVenus.setMag(sqrt(G * sun.mass / PosVenus.mag()));

  venus = new Body(5, PosVenus, VelVenus, 222, 184, 177, 50);

  let radiousTierra = 127.5;
  let thetaTierra = 22;
  let PosTierra = createVector(radiousTierra* cos(thetaTierra), radiousTierra* sin(thetaTierra));
  let VelTierra = PosTierra.copy();
  VelTierra.rotate(HALF_PI);
  VelTierra.setMag(sqrt(G * sun.mass / PosTierra.mag()));

  tierra = new Body(5.5, PosTierra, VelTierra, 77, 123, 168, 50);

  let radiousMarte = 150;
  let thetaMarte = 22;
  let PosMarte = createVector(radiousMarte * cos(thetaMarte), radiousMarte * sin(thetaMarte));
  let VelMarte = PosMarte.copy();
  VelMarte.rotate(HALF_PI);
  VelMarte.setMag(sqrt(G * sun.mass / PosMarte.mag()));

  marte = new Body(2.75, PosMarte, VelMarte, 124, 50, 50, 50);

  let radiousJupiter = 180;
  let thetaJupiter = 22;
  let PosJupiter = createVector(radiousJupiter * cos(thetaJupiter), radiousJupiter * sin(thetaJupiter));
  let VelJupiter = PosJupiter.copy();
  VelJupiter.rotate(HALF_PI);
  VelJupiter.setMag(sqrt(G * sun.mass / PosJupiter.mag()));

  jupiter = new Body(35, PosJupiter, VelJupiter, 186, 99, 52, 50);

  let radiousSaturno = 235;
  let thetaSaturno = 22;
  let PosSaturno = createVector(radiousSaturno * cos(thetaSaturno), radiousSaturno * sin(thetaSaturno));
  let VelSaturno = PosSaturno.copy();
  VelSaturno.rotate(HALF_PI);
  VelSaturno.setMag(sqrt(G * sun.mass / PosSaturno.mag()));

  saturno = new Body(35, PosSaturno, VelSaturno, 222, 157, 122, 50);

  let radiousUrano = 270;
  let thetaUrano = 22;
  let PosUrano = createVector(radiousUrano * cos(thetaUrano), radiousUrano * sin(thetaUrano));
  let VelUrano = PosUrano.copy();
  VelUrano.rotate(HALF_PI);
  VelUrano.setMag(sqrt(G * sun.mass / PosUrano.mag()));

  urano = new Body(17.5, PosUrano, VelUrano, 151, 192, 199, 50);

  let radiousNeptuno = 300;
  let thetaNeptuno = 22;
  let PosNeptuno = createVector(radiousNeptuno * cos(thetaNeptuno), radiousNeptuno * sin(thetaNeptuno));
  let VelNeptuno = PosNeptuno.copy();
  VelNeptuno.rotate(HALF_PI);
  VelNeptuno.setMag(sqrt(G * sun.mass / PosNeptuno.mag()));

  neptuno = new Body(16, PosNeptuno, VelNeptuno, 107, 116, 150, 50);
  }

  if(windowWidth <= 460){ //responsive
    createCanvas(windowWidth, windowHeight);

  sun = new Body(50, createVector(0,0), createVector(0,0), 246, 255, 0, 0);

  let radiousMercurio = 52.66; //sun.r = 100 -- windowWidth = 340.5 (en mitad de pantalla en notebook)
  // r es la distancia entre el sol y el planeta y theta es en que parte de la orbita se encuentra el planeta
  let thetaMercurio = 22;
  let PosMercurio = createVector(radiousMercurio*cos(thetaMercurio), radiousMercurio*sin(thetaMercurio));
  let VelMercurio = PosMercurio.copy();
  VelMercurio.rotate(HALF_PI);
  VelMercurio.setMag(sqrt(G * sun.mass / PosMercurio.mag()));

  mercurio = new Body(3, PosMercurio, VelMercurio, 120, 58, 47, 40);

  let radiousVenus = 69.33;
  let thetaVenus = 22;
  let PosVenus = createVector(radiousVenus*cos(thetaVenus), radiousVenus*sin(thetaVenus));
  let VelVenus = PosVenus.copy();
  VelVenus.rotate(HALF_PI);
  VelVenus.setMag(sqrt(G * sun.mass / PosVenus.mag()));

  venus = new Body(3.34, PosVenus, VelVenus, 222, 184, 177, 40);

  let radiousTierra = 85;
  let thetaTierra = 22;
  let PosTierra = createVector(radiousTierra* cos(thetaTierra), radiousTierra* sin(thetaTierra));
  let VelTierra = PosTierra.copy();
  VelTierra.rotate(HALF_PI);
  VelTierra.setMag(sqrt(G * sun.mass / PosTierra.mag()));

  tierra = new Body(3.67, PosTierra, VelTierra, 77, 123, 168, 40);

  let radiousMarte = 100;
  let thetaMarte = 22;
  let PosMarte = createVector(radiousMarte * cos(thetaMarte), radiousMarte * sin(thetaMarte));
  let VelMarte = PosMarte.copy();
  VelMarte.rotate(HALF_PI);
  VelMarte.setMag(sqrt(G * sun.mass / PosMarte.mag()));

  marte = new Body(2.5, PosMarte, VelMarte, 124, 50, 50, 50);

  let radiousJupiter = 120;
  let thetaJupiter = 22;
  let PosJupiter = createVector(radiousJupiter * cos(thetaJupiter), radiousJupiter * sin(thetaJupiter));
  let VelJupiter = PosJupiter.copy();
  VelJupiter.rotate(HALF_PI);
  VelJupiter.setMag(sqrt(G * sun.mass / PosJupiter.mag()));

  jupiter = new Body(23.34, PosJupiter, VelJupiter, 186, 99, 52, 70);

  let radiousSaturno = 156.66;
  let thetaSaturno = 22;
  let PosSaturno = createVector(radiousSaturno * cos(thetaSaturno), radiousSaturno * sin(thetaSaturno));
  let VelSaturno = PosSaturno.copy();
  VelSaturno.rotate(HALF_PI);
  VelSaturno.setMag(sqrt(G * sun.mass / PosSaturno.mag()));

  saturno = new Body(23.34, PosSaturno, VelSaturno, 222, 157, 122, 70);

  let radiousUrano = 180;
  let thetaUrano = 22;
  let PosUrano = createVector(radiousUrano * cos(thetaUrano), radiousUrano * sin(thetaUrano));
  let VelUrano = PosUrano.copy();
  VelUrano.rotate(HALF_PI);
  VelUrano.setMag(sqrt(G * sun.mass / PosUrano.mag()));

  urano = new Body(11.67, PosUrano, VelUrano, 151, 192, 199, 75);

  let radiousNeptuno = 200;
  let thetaNeptuno = 22;
  let PosNeptuno = createVector(radiousNeptuno * cos(thetaNeptuno), radiousNeptuno * sin(thetaNeptuno));
  let VelNeptuno = PosNeptuno.copy();
  VelNeptuno.rotate(HALF_PI);
  VelNeptuno.setMag(sqrt(G * sun.mass / PosNeptuno.mag()));

  neptuno = new Body(10.66, PosNeptuno, VelNeptuno, 107, 116, 150, 80);
  }

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  background(bg);
}

function draw() {
 
  translate(width/2, height/2);
  background(bg);
  

  sun.show(); 


  sun.gravity(mercurio);
  mercurio.move();  
  mercurio.show();
  

  sun.gravity(venus);
  venus.move();
  venus.show();

  sun.gravity(tierra);
  tierra.move();
  tierra.show();

  sun.gravity(marte);
  marte.move();
  marte.show();

  sun.gravity(jupiter);
  jupiter.move();
  jupiter.show();

  sun.gravity(saturno);
  saturno.move();
  saturno.show();

  sun.gravity(urano);
  urano.move();
  urano.show();

  sun.gravity(neptuno);
  neptuno.move();
  neptuno.show();

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
    for(let i = 0; i < this.path.length -2 ; i++){
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

