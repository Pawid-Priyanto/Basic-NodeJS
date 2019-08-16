const Product = require("../models/productModel")

class deleteProduct {
    static async delete(id) {
        try {
          let hasil = await Product.findOneAndDelete({
              _id: id
          }).exec()
    
          return hasil
      } catch(err) {
          throw err
      }
    }

}


module.exports =  deleteProduct