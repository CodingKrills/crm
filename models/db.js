const mongoose = require('mongoose');

mongoose.connect('xxx', 
{useNewUrlParser: true,useUnifiedTopology: true},

()=> console.log('Connected to MongoDB') );


require('./employee.model');
