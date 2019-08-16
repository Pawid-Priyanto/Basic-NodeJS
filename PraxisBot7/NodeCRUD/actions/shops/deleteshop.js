const Shop = require("../../models/shopModel")

class DeleteShop {
    constructor(id) {
       this.id=id
    }

    async delete(id) {
      try {
        let query = await Shop.findOneAndDelete({
            _id: this.id
        }).exec()

        return query
    } catch(err) {
        throw err
    }
   }
}


module.exports = DeleteShop