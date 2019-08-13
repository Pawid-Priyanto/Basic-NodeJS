const Book = require("../models/book")

const create = async (req) => {
    let { title, description, price } = req.body
    price = parseInt(price)
    var insert_data = {
       title,
       description,
       price
    }

    let data = new Book(insert_data)

    try {
        await data.save()

        return data
    } catch(err) {
        throw err
    }
}

const getAll = async () => {
    try {
        let query = await Book.find({}).exec()
        let data = query.map((v, i) => {
            return {
                title: v.title,
                description: v.description,
                price: v.price
            }
        })

        return data
    } catch(err) {
        throw err
    }
}

const getDetail = async (id) => {
    try {
        let query = await Book.findOne({
            _id: id
        }).exec()

        return query
    } catch(err) {
        throw err
    }
}

module.exports = {
    create,
    getAll,
    getDetail
}
