leftWristx = 0;
leftWristy=0;
rightWristx = 0;
rightWristy =0;
var silhouette = "";
var colors = "";

function preload(){
    silhouette = loadSound("KANA-BOON - Silhouette.mp3");
    colors = loadSound("Flow - COLORS.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,600,500);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristx=results[0].pose.leftWrist.x;
        leftWristy=results[0].pose.leftWrist.y;
        console.log("Left Wrist x is " + leftWristx+"Left Wrist y is " + leftWristy);

        rightWristx=results[0].pose.rightWrist.x;
        rightWristy=results[0].pose.rightWrist.y;
        console.log("Right Wrist x is "+ rightWristx+"Right Wrist y is "+rightWristy);
    }
}
