var NUM_CIRCLES = 12;
var circleDiameter;
var circleRadius;
var rVal;
var gVal;
var bVal;

function setup() {
    createCanvas(480, 600);
    circleDiameter = width/NUM_CIRCLES
    circleRadius = circleDiameter/2
}

function draw() {
    rVal = 22;
    gVal = 39;
    bVal = 54;
    
    var isShifted = false;
    
    var y = height;
    
    while (y >= 0) {
        
        var x;
        
        if (isShifted) {
            x = circleRadius;
        } else {
            x = 0;
        }
        
        while (x <= width) {
            fill(color(rVal+20, gVal+20, bVal+20))
            stroke(color(rVal-20, gVal-20, bVal-20))
            ellipse(x, y, circleDiameter, circleDiameter)
            x += circleDiameter;
        }
        
        y -= circleRadius;
        isShifted = !isShifted;
    }
}

function keyPressed() {
    if (keyCode === 15 || keyCode === 83) {
        saveCanvas('geometricPattern', 'png');
    }
    return false;
}