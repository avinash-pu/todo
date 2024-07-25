const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);


const employeeSchema = new mongoose.Schema({
    employeeId : {type: Number},
    employeeName: { type: String, required: true },
    location: { type: String },
  joiningDate: { type: Date },
  contact: { type: String }, 
  designation: { type: String },
    employeeStatus: { type: String, enum: ['Remote Location', 'Contract Employee', 'Full-Time'], required: true }
});


employeeSchema.plugin(AutoIncrement, { inc_field: 'employeeId' });

module.exports = mongoose.model('Employee', employeeSchema);
