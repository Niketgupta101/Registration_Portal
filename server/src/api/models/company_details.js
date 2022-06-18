const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companyDetailsSchema = new Schema(
  {
    userId: { type: Schema.ObjectId, ref: 'User' },
    name: { type: String, required: true, text: true },
    website: { type: String, required: true },
    company_type: { type: String, default: true },
    about: { type: String, required: true },
    categoryData: { type: String, required: true },
    sectorData: { type: String, required: true },

    primary_hr: {
      name: { type: String, required: true },
      contactNo: { type: String, required: true },
      emailId: { type: String, required: true },
    },
    secondary_hr: {
      name: { type: String },
      contactNo: { type: String },
      emailId: { type: String },
    },
    isVerifiedByCDC: { type: Boolean, default: false },
    consent: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('CompanyDetails', companyDetailsSchema);
