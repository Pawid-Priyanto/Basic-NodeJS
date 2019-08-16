const ShopModel = require("../models/shopModel")

class Shop {
    static async create(req) {
        try {
            let { name, description, owner } = req.body
            let data = new ShopModel({
                name,
                description,
                owner
            })
            console.log(data)
            await data.save()

            return data
        } catch(err) {
            throw err
        }
    }

    static async all() {
        try {
            let data = await ShopModel.find({}).exec()
            let hasil = data.map((v, i) => {
              return {
                  name: v.name,
                  owner: v.owner,
                  description: v.description
             }
          })

            return hasil
        } catch(err) {
            throw err
        }
    }

    hello() {
        return 'Hello Shop!'
    }
}

module.exports = Shop