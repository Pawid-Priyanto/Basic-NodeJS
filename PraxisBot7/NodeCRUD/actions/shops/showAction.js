const Shop = require("../../models/shopModel")

class ShowShop {
    constructor(id) {
        this.id = id
    }

    async exec() {
        try {
            let query = await Shop.find({
                _id: this.id
            }).exec()
            let data = query.map((v, i) => {
              return {
                  name: v.name,
                  owner: v.owner,
                  description: v.description
             }
          })

            return data
        } catch(err) {
            throw err
        }
    }
}

module.exports = ShowShop