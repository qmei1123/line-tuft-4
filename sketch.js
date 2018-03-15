var i;
var y;
let ragged = [];
var yOne;
var yTwo;
var yThree;
var yFour;
var yFive;

function setup() {
    createCanvas(1600, 1000);
    background(34,45,91);
    ragged = new Ragged();
    frameRate(.75);
}
        
class Ragged {
    constructor() {
    
    }
//    move() {
//        xOne = xOne + random(-5, 5);
//        xTwo = xTwo + random(-5, 5);
//    }
    show() {
        noFill();
        stroke(random(50, 190),random(50, 190),224);
        strokeWeight(random(5, 10));
        strokeCap(SQUARE);
        beginShape();
            vertex(xOne + i, yOne + y);
            vertex(xTwo + i, yTwo + y);
        endShape(CLOSE);
    }
}

function draw() {
    for (i = 0; i < width; i += 50) {
        for (y = 0; y < height; y += 50) {
            xOne = 50 * sin(60) + 10;
            xTwo = random(10, 60)*cos(60) + 10;
            
            yOne = 75 * cos(60) + 10;
            yTwo = random(30, 140)*sin(60) + 10;

            ragged.show();
        //    ragged.move();
        }
    }
}


