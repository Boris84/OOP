

let yPosList = [];
let xPosList = [];
let speedList = [];



class Bubble {
  constructor() {
    this.xPos = Math.random() * 8000 / 1;
    this.yPos = Math.random() * 800;
    this.speed = Math.random() * 3 + 1;
    this.r = Math.random() * 255;
    this.g = Math.random() * 255;
    this.b = Math.random() * 255;
  }
  
   display() {
     ellipse(this.xPos, this.yPos, 50, 50);
     fill(this.r, this.g, this.b);
     stroke("black");
     strokeWeight(4);
   }

   move() {
  	 this.yPos += this.speed;

  	 if (this.yPos >= 2000) {
  	 	this.yPos = 0;
  	 }
   }

}




const bubbleList = [];
  for (let i = 0; i < 100; i++) {
  	bubbleList.push(new Bubble());
   }

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
 
function draw() {
  background(75, 130, 135);
  for (var i = 0; i < 100; i++) {
    bubbleList[i].display();
    bubbleList[i].move();

  }
}
  

