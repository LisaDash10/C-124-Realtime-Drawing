noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 300);

    canvas = createCanvas(500, 500);
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model Loaded!");
}

function gotPoses(results) {
    if(results.length >0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX + "noseY =" + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "difference =" + difference);

    }
}

function draw() {
    background('#0000FF');
    document.getElementById("square_size").innerHTML = difference;
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}
