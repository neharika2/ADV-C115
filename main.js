function preload(){
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide()
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes)
    }
    function gotposes(results){
        if(results.length>0){
        console.log(results);
        console.log ("nose x" +results[0].pose.nose.x);
        console.log ("nose y" + results[0].pose.nose.y);
        }
        }
        function modelloaded(){
            console.log("model is loaded");
        }
        function draw(){
            image(video,0,0,300,300)
        }
        function take_snapshot(){
            save('myFilterImage.png');
        }
        