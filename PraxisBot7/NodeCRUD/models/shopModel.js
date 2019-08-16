const mongoose = require("mongoose")
const Schema = mongoose.Schema

let shopSchema = new Schema({
    name:{
        type: String,
        required: false
    }, 
    description: String,
    owner:{
      type: String,
      required: false
    }, 
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
})

let Shop = mongoose.model("Shop", shopSchema)

module.exports = Shop