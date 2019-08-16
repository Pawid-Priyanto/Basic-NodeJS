const User = require("../../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

class Register {
    constructor(req) {
        this.name = req.body.name,
        this.email = req.body.email,
        this.address = req.body.address,
        this.phone = req.body.phone,
        this.password = req.body.password
    }

    async exec() {
        try {
            let password = bcrypt.hashSync(this.password, 8) // params: password, salt
            console.log(`Hashing password ${password}`)
            let insert_data = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                address: this.address,
                password
            }

            let query = new User(insert_data)
            await query.save()

            let payload = {
                user_id: query._id,
                user_name: query.name,
                user_email: query.email,
                user_phone: query.phone,
                user_address: query.address
            }
            let token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: 86400 // expires in 24 hours
            })

            return {
                user: payload,
                token,
                expires_in: '24 hours'
            }
        } catch(err) {
            throw err
        }
    }
}

module.exports = Register
