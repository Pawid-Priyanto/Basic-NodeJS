const express = require('express')
const router = express.Router()
const Shop = require("../actions/shopAction")
const ShowShop = require("../actions/shops/showAction")
// const CreateShop = require("../actions/shops/createshop")
const UpdateShop = require("../actions/shops/updateshop")
const DeleteShop = require("../actions/shops/deleteshop")
// const all = require("../actions/shops/getall")

router.post("/", async (req, res, next) => {
    try {
        let data = await Shop.create(req)

        return res.status(201).json({
            status: "success",
            data,
            message: "Shop created successfully"
        })
    } catch(err) {
        console.log(err)
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.get("/", async (req, res, next) => {
    try {
        let data = await Shop.all()

        return res.status(200).json({
            status: "success",
            data,
            message: "Get all shop data"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        let { id } = req.params
        let data = await new ShowShop(id).exec()
        console.log(`Type of ShowShop is ${typeof ShowShop}`)

        return res.status(200).json({
            status: "success",
            data,
            message: "Get detail of shop"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})
router.put("/:id", async (req, res) => {
    try {
        let {id} = req.params
        let data = await new UpdateShop(id,req).update()

        return res.status(200).json({
            status: "success",
            data,
            message: "Shop created successfully"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})
router.delete("/:id", async (req, res, next) => {
    try {
        let { id } = req.params
        let data = await new DeleteShop(id,req).delete()

        return res.status(201).json({
            status: "success",
            data,
            message: "Shop data deleted successfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

module.exports = router
