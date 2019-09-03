module.exports = {
    devServer: {
        before(app) {
            app.get("/getlist", (req, res) => {
                let data = require("./mock/data.json").data.categoryList
                res.send(data)
            })
        }
    }
}