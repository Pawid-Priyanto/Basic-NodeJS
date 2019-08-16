const Product = require("../../models/Product.model")

class CreateProduct {
    constructor(req) {
        this.merk = req.body.merk,
        this.type = req.body.type,
        this.price = req.body.price
    }

    async exec() {
        try {
            let query = new Product({
                merk: this.merk,
                type: this.type,
                price: this.price
            })
            await query.save()

            return query
        } catch(err) {
            throw err
        }
    }
}

module.exports = CreateProduct