const express = require('express')
const app = express()
require("./db") // database connection

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

require('./routes/main')(app) // all routes imported


// konek server
const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`Server running in PORT ${PORT}`))