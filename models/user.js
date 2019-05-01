const mongoose = require('mongoose');
const bycrpt = require('bcryptjs');

var Schema = mongoose.Schema;

const UserSchema= new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

UserSchema.pre(name= "save", async function (next) {
    try {
        const salt = await bycrpt.genSalt(10);
        this.password = await bycrpt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
})

module.exports = User = mongoose.model(name="users", UserSchema);