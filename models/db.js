const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://MyUsername:MyPassword@mycluster-rkncu.mongodb.net/EmployeeDB?retryWrites=true&w=majority', 
{useNewUrlParser: true,useUnifiedTopology: true},

()=> console.log('Connected to MongoDB') );


require('./employee.model');