const heroes = require("../data/heroes");
module.exports = {
    home :  function (req, res) {
        res.render("index",{
            dh_heroes : heroes,
        });
    },
    detail : function (req,res) {
        const id = req.params.id;
        const hero = heroes.find((hero) => hero.id == id);
        if (!hero) {
            return res.redirect("/");
        }
        res.render("detalleHeroe",{
            hero,
        });
    },
}