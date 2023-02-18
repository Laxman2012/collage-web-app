var SpeechRecognition = window.webkitSpeechRecognition;

var  recognition = new SpeechRecognition;

function start()
{

    recognition.start();

}

recognition.onresult= function(event)
{

  console.log(event);


  var Content =event.results[0][0].transcript;
  console.log(Content);
  

  if(Content=="Cheese")
  {

   console.log("taking selfie---");
   speak();

  }  
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
 });
camera = document.getElementById("camera");

function speak()
{
     
  var synth = window.speechSynthesis; 


  speak_data = "Taking your Selfie in 5 seconds";
    
    
  var utterThis = new SpeechSynthesisUtterance(speak_data);
    
    
  synth.speak(utterThis);


  Webcam.attach("#camera");

  
  setTimeout(function()
  {

    take_snapshot();
    save();
  },5000)
  
  setTimeout(function()
  {

    take_snapshot();
    save();
  },10000)

  setTimeout(function()
  {

    take_snapshot();
    save();
  },15000)



}

function take_snapshot()
{
 
  Webcam.snap(function(data_uri)
  {

   document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';

  });

}


function save()
{

  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src;
  link.href = image;
  link.click();

}
