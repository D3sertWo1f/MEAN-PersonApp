const mongoose = require('mongoose');

const meanCrud = 'mongodb://localhost/mean-crud'

mongoose.connect(meanCrud)
.then(db => console.log("db is connected"))
.catch(err => console.error(err));

module.exports = mongoose;