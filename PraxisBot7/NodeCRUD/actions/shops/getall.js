const all = require("../../models/shopModel")

class showall {
    constructor(req) {
     this.name = name,
      this.owner = owner,
      this.description = description
    }

    async exec() {
        try {
            let query = await all.find({}).exec()
            let data = query.map((v, i) => {
              return {
                  name: v.name,
                  owner: v.owner,
                  description: v.description
             }
          })

            return data
        } catch(err) {
            throw err
        }
    }
}

module.exports = showall