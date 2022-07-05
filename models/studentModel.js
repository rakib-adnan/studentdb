const mongoose = require('mongoose')

//* Create Student schema
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,

    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: true
    },
    cell: {
        type: String,
        required: [true, "Cell is required"],
        trim: true,
        unique: true
    },
    photo: {
        type: String,
        default: "https://www.w3schools.com/howto/img_avatar.png"
    }

},{
    timestamps : true
})




//! Exports Our Mondel
module.exports = mongoose.model('Student', studentSchema);