module.exports = {
    devServer: {
        before(app) {
            app.get("/movielist", (req, res) => {
                let data = require("./mock/data.json")
                res.send(data.movieList)
            })
            app.get("/cinemalist", (req, res) => {
                let data = require("./mock/cinemalist.json")
                res.send(data.cinemas);
            })
            app.get("/getDetails", (req, res) => {
                let data = require("./mock/data.json")
                data.movieList.forEach(item => {
                    if (item.id == req.query.id) {
                        res.send(item);
                    }
                })
            })
        }
    }
}