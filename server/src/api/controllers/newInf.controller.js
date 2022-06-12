const { NewInf } = require('../models/InfData');
const ErrorResponse = require('../utils/errorResponse');
const {
  createInfPdfForAdmin,
  createInfPdfForStudent,
} = require('../utils/PdfService/createInfPdf');

const fetchInf = async (req, res, next) => {
  const { infId } = req.params;
  try {
    let inf = await NewInf.findOne({ _id: infId });

    console.log({ infId, inf });

    if (!inf) return next(new ErrorResponse('No INF found with given id', 404));

    res.status(201).json({ success: true, job: inf });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const fetchAllInf = async (req, res, next) => {
  let { pageLimit, pageNo } = req.params;

  try {
    pageLimit = parseInt(pageLimit);
    pageNo = parseInt(pageNo);
    let offset = (pageNo - 1) * pageLimit;

    let infList = await NewInf.find({ status: 'complete' })
      .sort({ updatedAt: -1 })
      .limit(pageLimit)
      .skip(offset);

    res.status(201).json({ success: true, jobs: infList });
  } catch (error) {
    return next(error);
  }
};

const fetchAllInfForUser = async (req, res, next) => {
  let { pageLimit, pageNo } = req.params;
  let userId = req.user._id;

  try {
    pageLimit = parseInt(pageLimit);
    pageNo = parseInt(pageNo);
    let offset = (pageNo - 1) * pageLimit;

    let infList = await NewInf.find({ userId })
      .sort({ updatedAt: -1 })
      .skip(offset)
      .limit(pageLimit);

    res.status(201).json({ success: true, jobs: infList });
  } catch (error) {
    return next(error);
  }
};

const fetchPendingInfForUser = async (req, res, next) => {
  let { pageLimit, pageNo } = req.params;
  let userId = req.user._id;

  try {
    pageLimit = parseInt(pageLimit);
    pageNo = parseInt(pageNo);
    let offset = (pageNo - 1) * pageLimit;

    let infList = await NewInf.find({ userId, status: 'incomplete' })
      .sort({ updatedAt: -1 })
      .limit(pageLimit)
      .skip(offset);

    res.status(201).json({ success: true, jobs: infList });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const createInf = async (req, res, next) => {
  const { Company_Overview } = req.body;
  const userId = req.user._id;
  try {
    const newInf = await NewInf.create({
      userId,
      Company_Overview,
    });

    res.status(201).json({ success: true, jobId: newInf._id });
  } catch (error) {
    console.log(error);

    return next(error);
  }
};

const updateInf = async (req, res, next) => {
  const infData = req.body;
  console.log('here');
  try {
    let inf = await NewInf.findOne({ _id: infData._id });

    if (!inf) return next(new ErrorResponse('No INF found with given id', 404));

    inf.set({ ...infData });

    await inf.save();

    res.status(201).json({ success: true });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const submitReviewedInf = async (req, res, next) => {
  const { infId } = req.params;
  try {
    let inf = await NewInf.findOne({ _id: infId });

    if (!inf) return next(new ErrorResponse('No INF found with given id', 404));

    if (inf.Intern_Profile.IP_Internship_Duration === 'May-July 2023')
      await createInfPdfForAdmin(inf, 'INF.docx');
    else await createInfPdfForAdmin(inf, 'INF_Dual_Admin.docx');

    inf.set({ status: 'complete' });

    await inf.save();

    if (inf.Intern_Profile.IP_Internship_Duration === 'May-July 2023')
      await createInfPdfForStudent(inf._id, 'INFstudent.docx');
    else await createInfPdfForStudent(inf._id, 'INF_Dual_Student.docx');

    res.status(201).json({ success: true });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const removeInf = async (req, res, next) => {
  let { infId } = req.params;

  try {
    let inf = await NewInf.findOne({ _id: infId });

    if (!inf) return next(new ErrorResponse('Inf not found', 404));

    await inf.remove();

    res.status(201).json({ success: true });
  } catch (error) {
    return next(error);
  }
};

const searchInf = async (req, res, next) => {
  let { pattern, pageLimit, pageNo } = req.params;

  try {
    pageLimit = parseInt(pageLimit);
    pageNo = parseInt(pageNo);
    let offset = (pageNo - 1) * pageLimit;

    let infList = await NewInf.find({
      $or: [
        {
          'Company_Overview.CO_Name_Of_The_Company': {
            $regex: pattern,
            $options: 'im',
          },
          status: 'complete',
        },
        {
          'Company_Overview.CO_Category': {
            $regex: pattern,
            $options: 'im',
          },
          status: 'complete',
        },
        {
          'Company_Overview.CO_Sector': {
            $regex: pattern,
            $options: 'im',
          },
          status: 'complete',
        },
      ],
    })
      .sort({ updatedAt: -1 })
      .limit(pageLimit)
      .skip(offset);

    res.status(201).json({ success: true, jobs: infList });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  fetchInf,
  createInf,
  updateInf,
  submitReviewedInf,
  fetchAllInf,
  fetchAllInfForUser,
  fetchPendingInfForUser,
  searchInf,
  removeInf,
};
