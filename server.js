var express = require('express')
var app = express()
const array_lib = require("./lib/array")
const object_lib = require("./lib/object")
const task_lib = require("./lib/task")


//   List of imported routes

const array_routes = require('./routes/array')


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
 app.get('/example-1', (req, res) => {
    let data = ["Red", "Blue", "Yellow", "Green"]
    let manipulation = array_lib(data)

    return res.send(manipulation)
})

app.get('/example-2', (req, res) => {
    let data = {
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@mail.com",
        gender: "men"
    }
    let result = object_lib.manipulate(data)

    return res.send(result)
})

app.get("/example-3", (req, res) => {
    let input = ["Black"]
    let data = ["Red", "Blue", "Yellow", "Green"]
    console.log("before ", data)

    let result = object_lib.merge(data = data, input = input)
    console.log("after ", result)

    return res.send(result)
})

app.get("/example-4", (req, res) => {
    let empty_data = []
    console.log("before ", empty_data)

    let color = "Red"
    object_lib.add(empty_data, color)
    console.log("after ", empty_data)

    return res.send(empty_data)
})

app.get('/task-1', (req, res) => {
    let data = ["Red", "Blue", "Yellow", "Green"]
    let manipulate = task_lib.manipulate(data)

    return res.send(manipulate)
})

app.get('/task-2', (req, res) => {
    let data = ["Red", "Blue", "Yellow", "Green"]
    let desc = task_lib.kebalik(data)

    return res.send(desc)
})
//   Set all routes
 
app.use("/array", array_routes)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})