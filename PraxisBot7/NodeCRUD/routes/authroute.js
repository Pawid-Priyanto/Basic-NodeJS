const express = require('express')
const router = express.Router()
const Register = require("../actions/users/registeraction")

router.post("/register", async (req, res) => {
    try {
        let data = await new Register(req).exec()

        return res.status(201).json({
            status: "success",
            data,
            message: "Regiseter successfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

module.exports = router