function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(50, 240);

    canvas = createCanvas(550, 500);
    canvas.position(screen.width - 600, 240);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}

function modelLoaded() {
    console.log("Posenet is Initialized");
}