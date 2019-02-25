

let yPosList = [];
let xPosList = [];
let speedList = [];





class Bubble {
  constructor() {
    this.xPos = Math.random() * 8990;
    this.yPos = Math.random() * 6900  / 1;
    this.speed = Math.random() * 3 + 1;
    this.r = Math.random() * 255;
    this.g = Math.random() * 255;
    this.b = Math.random() * 255;
  }
  
   display() {
     ellipse(this.xPos, this.yPos, 100, 100)
     fill(this.r, this.g, this.b);
   }

   move() {
  	 this.yPos += this.speed;
  	 
  	 if (this.yPos >= 660) {
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
  background(255, 0, 255);
  background("white");
  for (var i = 0; i < 100; i++) {
    bubbleList[i].display();
    bubbleList[i].move();
  }
}
  

