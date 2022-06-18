const Company = require('../models/company_details');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/userModel');
const { readSheet, updateSheet } = require('../utils/service/GSheets');
const { sendInvitationMailToCompany } = require('./emailProvider');
const { sendEmail } = require('../utils/service/email');

const postCompanyDetails = async (details, next) => {
  try {
    let newCompany = await Company.create({
      ...details,
    });
    await updateCompanyInGSheets(newCompany);
    return { success: true, company: newCompany };
  } catch (error) {
    return next(error);
  }
};

const fetchCompanyById = async (comapnyId, next) => {
  try {
    let company = await Company.findOne({ _id: comapnyId }).populate('userId', {
      Name: 1,
      emailId: 1,
      ProfilePhoto: 1,
    });

    if (!company)
      return next(new ErrorResponse('No company found with given id.', 404));

    return { success: true, company };
  } catch (error) {
    return next(error);
  }
};

const fetchAllCompanies = async (offset, pagelimit, next) => {
  try {
    let companyList = await Company.find()
      .sort({ updatedAt: -1 })
      .skip(parseInt(offset))
      .limit(parseInt(pagelimit));

    let companyCount = await Company.find().count();

    return { success: true, companyList, companyCount };
  } catch (error) {
    return next(error);
  }
};

const sendInvitationToAll = async (next) => {
  try {
    const data = await readSheet(
      '1bmb6ntvaoVa2h44clYS0gfvYFQLyDXmsEepiztPU_x4',
      'Invitations',
      'A2:K'
    );

    for (let i in data) {
      if (data[i][10] !== 'Sent') {
        try {
          await sendInvitationMailToCompany(
            data[i][6],
            `${data[i][6]}`,
            `IIT(ISM)_${data[i][1]}_2022`
          );
          data[i][10] = 'Sent';
        } catch (error) {}
      }
    }
    await updateSheet(
      '1bmb6ntvaoVa2h44clYS0gfvYFQLyDXmsEepiztPU_x4',
      'Invitations',
      data,
      'A2:K'
    );

    return { success: true };
  } catch (error) {
    return next(error);
  }
};

const sendInvitations = async (data, subject, message, next) => {
  try {
    for (let i in data) {
      try {
        await sendEmail(data[i][6], subject, message);
        data[i][10] = 'Sent';
      } catch (error) {}
    }
    // await updateSheet(
    //   '1bmb6ntvaoVa2h44clYS0gfvYFQLyDXmsEepiztPU_x4',
    //   'Invitations',
    //   data,
    //   'A2:K'
    // );

    return { success: true, data };
  } catch (error) {
    return next(error);
  }
};

const updateCompanyInGSheets = async (company) => {
  let user = await User.findOne({ _id: company.userId }, { Name: 1 });
  let details = [
    company._id.valueOf(),
    user.Name,
    company.name,
    company.company_type,
    company.primary_hr.name,
    company.primary_hr.contactNo,
    company.primary_hr.emailId,
    company.secondary_hr.name,
    company.secondary_hr.contactNo,
    company.secondary_hr.emailId,
    company.isVerifiedByCDC,
    company.consent,
  ];

  let data = await readSheet(
    '1bmb6ntvaoVa2h44clYS0gfvYFQLyDXmsEepiztPU_x4',
    'Companies',
    'A1:L'
  );
  data.push(details);
  await updateSheet(
    '1bmb6ntvaoVa2h44clYS0gfvYFQLyDXmsEepiztPU_x4',
    'Companies',
    data,
    'A1:L'
  );
};

const searchCompany = async (pattern, offset, pagelimit, next) => {
  try {
    let companyList = await Company.find({
      name: { $regex: pattern, $options: 'im' },
    })
      .sort({ updatedAt: -1 })
      .skip(offset)
      .limit(pagelimit);

    let companyCount = await Company.find({
      name: { $regex: pattern, $options: 'im' },
    }).count();
    return { success: true, companyList, companyCount };
  } catch (error) {
    return next(error);
  }
};
const fetchAllCompaniesDeafultMail = async () => {
  const data = await readSheet(
    '1bmb6ntvaoVa2h44clYS0gfvYFQLyDXmsEepiztPU_x4',
    'Invitations',
    'A2:K'
  );

  return data;
};

module.exports = {
  postCompanyDetails,
  fetchCompanyById,
  fetchAllCompanies,
  sendInvitationToAll,
  searchCompany,
  updateCompanyInGSheets,
  fetchAllCompaniesDeafultMail,
  sendInvitations,
};
