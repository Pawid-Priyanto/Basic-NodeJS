const isString = (input) => {
  return typeof input == "string" ? true : false
}

const chek = (data, data1) => {
  let result = []
  let cek = isString(data)
  let cek1 = isString(data1)

   if(cek === true && cek1 === true){
     result.push(data)
     result.push(data1)

     return result
   } else {
     return "Failed"
   }
 }

 const task2 = (name, email) => {
   let result = {
     name,
     email
   }
   return result

 }



module.exports = {
  chek,
  task2
}
