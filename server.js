var express = require('express');
var app = express();
const array_lib = require("./lib/array");
const object_lib = require("./lib/object");
const task_lib = require("./lib/task");
const conditional = require("./lib/conditional");
const task1 = require("./lib/task1")
const loop_for = require('./lib/loop_for')
const loop_foreach = require('./lib/loop_foreach')
const loop_map = require('./lib/loop_map')
const map_object = require('./lib/loop_map_object')

// listof imported array
const array_routes = require('./routes/array')
// for passin application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => { 
    
    var x,y,z
    var x = 5
    var y = 4
    z= x**y


    // looping
    var i;
    for(i=1; i<=100; i++){
        if(i % 3 === 0 && i % 5 !==0){
            console.log(i + " Selamat kamu mendapat undian Kipas")
        }else if(i % 5 === 0 && i % 3 !== 0){
            console.log( i + " Selamat kamu mendapat undian TV")
        }else if(i % 3 == 0 && i % 5 == 0){
            console.log( i + " Selamat kamu mendapat undian Motor")
        }else{
            console.log(i + " Maaf kamu belum beruntung")
        }    
    }
   
    return res.send(`<h1><center> ${z} </center></h1> <br>`)
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
    let manipulation = array_lib(data.sort())

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

    let result = object_lib.merge(input = input, data = data)
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

app.get('/task1', (req, res) => {
    let data = ["Bumi", "Udara", "Tanah", "Api"]
    let result = task_lib.manipulate(data)

    return res.send(result)
})



app.get('/task2', (req, res) => {
    let data = ["Bumi", "Udara", "Tanah", "Api"]
    let result = task_lib.kebalik(data)

    return res.send(result)
})


/**
  How to using query parameter:
  
  http://your_url:your_port/your_route?q=your_value
  or type in Query Params when using postman
  key      | value
  q        | your_value
 */
app.get("/task3", (req, res) => {
    let q = req.query.q
    console.log("First value ", q)

    let result = conditional.equal(q)

    return res.send(result)
})

app.get("/task4", (req, res) => {
    let today = new Date().getDay()
    console.log("Today ", today)

    let result = conditional.day(today)

    return res.send(result)
})

app.post("/task5", (req, res) => {
    let number = req.body.number
    console.log("section1 ", typeof number)
    number = parseInt(number)
    console.log("section2 ", typeof number)

    let result = conditional.compare(number)

    return res.send(result)
})

app.get("/task6", (req, res) => {
    let a = req.query.a
    let b = req.query.b
    let c = parseInt(a)

    console.log(typeof c)
    console.log(typeof b)
    

    let result = task1.chek(c,b)

    return res.send(result)
})
app.post('/task7', (req, res) =>{
    let {name, email} = req.body
    let result = task1.task2(name, email)
 
    
   return res.send(result)
  })

app.get('/loop-for', (req, res) => {
    let data = ["Red", "Blue", "Green"]
    let result = loop_for(data)

    return res.send(result)
})

app.get("/loop-foreach", (req, res) => {
    let data = ["Red", "Blue", "Green"]
    let result = loop_foreach(data)

    return res.send(result)
})

app.get("/loop-map", (req, res) => {
    let data = ["Red", "Blue", "Green"]
    let result = loop_map(data)

    return res.send(result)
})
// objectloop
app.get('/object-loop', (req, res) => {
    let data = [
        {
            name: "Red",
            note: "Danger"
        },
        {
            name: "Yellow",
            note: "Warning"
        },
        {
            name: "Green",
            note: "Success"
        }
    ]

    let result = map_object(data)

    return res.send(result)
})


app.listen(3300, () => {
    console.log('http://localhost:3300')
})