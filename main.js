prediction1="";
presiction2="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="capture">';
    })
}

console.log('ml5 version',ml5.version);
teach=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hPxNBotEE/model.json',modelloaded);

function modelloaded()
{
    console.log('Model has been Loaded');
}

function speak()
{
    var s1=windiow.speechSynthesis;
    speakdata1="The First Prediction is"+prediction1;
    speakdata2="The Second Prediction is"+prediction2;
    var merge=new speechSynthesisUtterance(speakdata1+speakdata2);
    s1.speak(merge);
}