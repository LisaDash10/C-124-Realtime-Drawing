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
    }
}

function draw() {
    background('#0000FF');
}
