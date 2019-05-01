const User = require('../models/user');

module.exports = {
    test: (req, res) => {
        res.json({
            msg: "users route works"
        });
    }
}