var express = require('express')
var app = express()

// for passin application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => { 
    // //Fungsi 
    // function printText(z){
    //     var a = 'belajar <br>';
    //     var b = 'sinau';

    //     return a+b+z;
    // }    

    // function ngitung(){
    //     //pernjumlahan 
    //     a = 5;
    //     b = 10;
    //     return a+b;
    // }

    // //array 
    //     var kotak = ['palo','ammar', 11 ]
    var x,y,z
    var x = 5
    var y = 4
    z= x**y


    // looping
    var i;
    for(i=1; i<100; i++){
        if(i % 3){
            console.log(i + "kamu mendapatkan undian 1")
        }else if(i % 5){
            console.log(i + "kamu mendapatkan undian 2")
        }else if(i % 3 || 5){
            console.log(i + "kamu mendapatkan undian 3")
        }else{
            console.log(i + "kamu belum beruntung")
        }
    }
    return res.send(`<h1><center> ${z} </center></h1> <br> ${i}`)
})

app.post('/email', (req, res) => {
    var email = req.body.email
    
    return res.send('email saya' +' '+ email)
})

app.post('/tambah', (req, res) => {
 var x = req.body.x
  var y = req.body.y
  var hasil = parseInt(x) + parseInt(y);
    
    return res.send('jumlahnya ' + hasil)
})

app.post('/kali', (req, res) => {
  var x = req.body.x
   var y = req.body.y
   var hasil = parseInt(x) * parseInt(y);
     
     return res.send('jumlahnya ' + hasil)
 })

app.listen(3000, () => {
    console.log('http://localhost:3000')
})