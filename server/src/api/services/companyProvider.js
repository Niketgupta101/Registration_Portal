const Company = require('../models/company_details');
const ErrorResponse = require('../utils/errorResponse');

const postCompanyDetails = async (details, next) => {
    try {
        let newCompany = await Company.create({
            ...details
        });

        return { success: true, company: newCompany };
    } catch (error) {
        return next(error);
    }
}

const fetchCompanyById = async (comapnyId, next) => {
    try {
        let company = await Company.findOne({ _id: comapnyId }).populate('userId', { Name: 1, emailId: 1, ProfilePhoto: 1 });

        if(!company)
        return next(new ErrorResponse('No company found with given id.', 404));

        return { success: true, company };
    } catch (error) {
        return next(error);
    }
}

const fetchAllCompanies = async (offset, pagelimit, next ) => {
    try {
        let companyList = await Company.find().sort({ updatedAt: -1 }).skip(offset).limit(pagelimit);

        return { success: true, companyList };
    } catch (error) {
        return next(error);
    }
}

module.exports = { postCompanyDetails, fetchCompanyById, fetchAllCompanies };