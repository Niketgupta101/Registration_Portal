const { postCompanyDetails, fetchCompanyById, fetchAllCompanies } = require('../services/companyProvider');

const saveCompanyDetails = async (req, res, next) => {
    const details = req.body;
    try {
        let response = await postCompanyDetails(details, next);

        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
}

const getCompanyDetailsById = async (req, res, next) => {
    const companyId = req.params.id;

    try {
        const response = await fetchCompanyById(companyId, next);

        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
}

const getAllCompanyDetails = async (req, res, next ) => {
    let { pageno, pagelimit } = req.params;

    try {
        pageno= pageno || 1;
        pagelimit = pagelimit || 20;
        let offset = pagelimit*(pageno - 1);

        let response = await fetchAllCompanies(offset, pagelimit, next);

        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
}

module.exports = { getCompanyDetailsById, saveCompanyDetails, getAllCompanyDetails };