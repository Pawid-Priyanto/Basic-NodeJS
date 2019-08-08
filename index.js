var express = require('express')
var app = express();

app.get('/', (req, res) => { 

  // looping
  for(i=1; i<10; i++){
    console.log(i);
  }
  // if else
  var nilai = 70;
  if(nilai < 70){
    console.log("kamu remidi")
  }else{
    console.log("kamu lulus")
  }

  // if else if
  var time = 25;
  if(time < 12){
    console.log(" Say, Selamat Pagi")
  }else if(time == 12){
    console.log("Say, Selamat Siang")
  }else{
    console.log("Say, Selamat Sore")
  }

  // switch
  var job = "";
  switch(job){
    case "Web Security":
      console.log("Profesinya Web Security");
    break;
    case "Backend":
    console.log("Profesinya Backend");
    break;
    case "Frontend":
    console.log("Profesinya Frontend");
    break;
    case "FullStack":
    console.log("Profesinya Fullstack");
    break;
    default:
    console.log("Freelancer");

  }
    
// function
  function nulis(){
      var a = "kok";
      var b = "susah";
      return a+b;
  }

  var add=new Function("num1","num2","return num1+num2"); 

// function validasi
function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
emailIsValid ("adi@gmail.com");
  return res.send(nulis() + " " + add(8,9));
});

app.listen(3000, () => {
  console.log('running on port 3000')
})