const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companyDetailsSchema = new Schema({
  userId: { type: Schema.ObjectId, ref: "User" },
  name: { type: String, required: true },
  website: { type: String, required: true },
  company_type: { type: String, default: true },
  about: { type: String, required: true },
  primary_hr: {
    name: { type: String, required: true },
    contactNo: { type: Number, minlength: 10, required: true },
    emailId: { type: String, required: true }
  },
  secondary_hr: {
    name: { type: String, required: true },
    contactNo: { type: Number, minlength: 10, required: true },
    emailId: { type: String, required: true }
  },
  isVerifiedByCDC: { type: Boolean, default: false },
});


module.exports = mongoose.model('CompanyDetails', companyDetailsSchema);