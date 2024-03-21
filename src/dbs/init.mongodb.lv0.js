'use strict';

const { default: mongoose } = require("mongoose");

const connectString = 'mongodb://localhost:27017/express-mongo';
mongoose.connect(connectString).then(() => {
  console.log('MongoDB connected');
}).catch(err => {    
  console.log(err);
});

// development mode
if (true) {
    mongoose.set('debug', true);
    mongoose.set('debug', { color: true})
}

module.exports = mongoose;