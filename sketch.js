let slider
let zoff = 0
// let phase = 0

function setup() {
  createCanvas(innerWidth, innerHeight - 30)
  slider = createSlider(0, 10, 5, 0.1)
}

function draw() {
  background(0)
  translate(width / 2, height / 2)
  stroke(255)
  // noFill()
  beginShape()
  let noiseMax = slider.value()
  for (let a = 0; a < TWO_PI; a += 0.01) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax)
    let yoff = map(sin(a), -1, 1, 0, noiseMax)

    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, 200)
    let x = r * cos(a)
    let y = r * sin(a)
    vertex(x, y)
  }
  endShape(CLOSE)
  zoff += 0.01
  // phase += 0.02
}

