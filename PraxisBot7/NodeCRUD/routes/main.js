const users = require("./user")
const index = require("./index")
const products = require("./product")
const shops = require("./shopRoute")
const auth = require("./authroute")

const routes = (app) => {
    app.use("/", index)
    app.use("/product", products)
    app.use("/shop", shops)
    app.use("/user", users)
    app.use("/auth", auth)
}

module.exports = routes