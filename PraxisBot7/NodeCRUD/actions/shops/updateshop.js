const Shop = require("../../models/shopModel")

class UpdateShop {
    constructor(id,req) {
        this.name = req.body.name,
        this.description = req.body.description,
        this.owner = req.body.owner,
        this.id = id
    }

    async update() {
        try {
            let data = new Shop({
                name: this.name,
                description: this.description,
                owner: this.owner,
                _id: this.id
            })
            let query = await Shop.findOneAndUpdate({
              _id: this.id
            },data).exec()

          return query
        } catch(err) {
            throw err
        }
    }
}

module.exports = UpdateShop