function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(600, 40, 70);
    circle(40, 40, 70);
    circle(600, 440, 70);
    circle(40, 440, 70);
    fill(255, 0, 0);
    rect(10, 30, 40, 420);
    rect(45, 410, 550, 40);
    rect(45, 30, 550, 40);
    rect(590, 30, 40, 420);
}

function take_snapshot(){
    save('student_name.png');
}