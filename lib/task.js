const manipulate = (data) => {
  let urut, all

 urut = data.sort()
  all = data

  let result = {
      urut,
      all
  }

  return result
}

const desc = (data) => {
  let kebalik

 kebalik = data.sort().reverse()


  let result = {
     kebalik
    
  }

  return result
}



module.exports = {
  manipulate,
  kebalik: desc
}