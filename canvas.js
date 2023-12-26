// Get the canvas element
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Spiral parameters
const centerX = canvas.width / 2; // Get the x-axis center
const centerY = canvas.height / 2; // Get the y-axis center
const radius = 7; // initial radius
let angle = 0;
const rounds = 3; // number of rounds of the  spiral
const lineColor = "black";
const lineThickness = 2;
let rotationSpeed = 360; // degrees per second

function drawSpiral() {
  // Clear the canvas each time function is called
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const timeElapsed = 0.0167; // Time elapsed in seconds (approximately 1/60th of a second)
  const angularDisplacement = (rotationSpeed * timeElapsed * Math.PI) / 180;
  // Update the angle
  angle += angularDisplacement;

  // Draw the spiral
  ctx.lineWidth = lineThickness;
  ctx.strokeStyle = lineColor;

  for (var i = 0; i <= rounds * 2 * Math.PI; i += 0.1) {
    // This calculates the horizontal coordinate of the arc's center based on the parameters given
    let x = centerX - (radius + i) * Math.cos(i + angle);
    // This calculates the vertical coordinate of the arc's center based on the parameters given
    let y = centerY - (radius + i) * Math.sin(i + angle);
    //This  adjusts the size of the circles
    const circleRadius = i / 10;

    ctx.beginPath();
    // draw an arc with parameters arc(x, y, radius, startAngle(in rad), endAngle(in rad))
    // where x and y is The horizontal and vertical coordinate of the arc's center respectively.
    ctx.arc(x, y, circleRadius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
}

// Start the animation loop in approximately 60 fps
setInterval(drawSpiral, 1000 / 60);
