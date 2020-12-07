function setup() {
  createCanvas(400, 400);
  background(0);

  var nn = new redeNeural(1,3,5);
  var arr = [1,2];
  Matrix.arrayToMatrix(arr)

  nn.feedforward(arr)

}

function draw() {
  
}