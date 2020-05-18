const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: 'This Is Required'
    },
    email: {
        type: String
    },
    mobile:{
        type: Number,
        default: '001'
    },
    city: {
        type: String
    }
});

//custom validation foe email

mongoose.model('Employee', employeeSchema);