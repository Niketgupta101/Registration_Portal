const { NewJnf } = require('../models/JnfData');
const ErrorResponse = require('../utils/errorResponse');
const {
  createJnfPdfForAdmin,
  createJnfPdfForStudent,
  updateJnfInGSheets,
} = require('../utils/PdfService/createJnfPdf');

const fetchJnf = async (req, res, next) => {
  const { jnfId } = req.params;
  try {
    let jnf = await NewJnf.findOne({ _id: jnfId });

    if (!jnf) return next(new ErrorResponse('No INF found with given id', 404));

    res.status(201).json({ success: true, job: jnf });
  } catch (error) {
    return next(error);
  }
};

const fetchAllJnf = async (req, res, next) => {
  let { pageLimit, pageNo } = req.params;

  try {
    pageLimit = parseInt(pageLimit);
    pageNo = parseInt(pageNo);
    let offset = (pageNo - 1) * pageLimit;

    let jnfList = await NewJnf.find({ status: 'complete' })
      .sort({ updatedAt: -1 })
      .limit(pageLimit)
      .skip(offset);

    let count = await NewJnf.find({ status: 'complete' }).count();

    res.status(201).json({ success: true, jobs: jnfList, count });
  } catch (error) {
    return next(error);
  }
};

const fetchAllJnfForUser = async (req, res, next) => {
  let { pageLimit, pageNo } = req.params;
  let userId = req.user._id;

  try {
    pageLimit = parseInt(pageLimit);
    pageNo = parseInt(pageNo);
    let offset = (pageNo - 1) * pageLimit;

    let jnfList = await NewJnf.find({ userId })
      .sort({ updatedAt: -1 })
      .skip(offset)
      .limit(pageLimit);
    let count = await NewJnf.find({ userId }).count();

    res.status(201).json({ success: true, jobs: jnfList, count });
  } catch (error) {
    return next(error);
  }
};

const fetchPendingJnfForUser = async (req, res, next) => {
  let { pageLimit, pageNo } = req.params;
  let userId = req.user._id;

  try {
    pageLimit = parseInt(pageLimit);
    pageNo = parseInt(pageNo);
    let offset = (pageNo - 1) * pageLimit;

    let jnfList = await NewJnf.find({ userId, status: 'incomplete' })
      .sort({ updatedAt: -1 })
      .limit(pageLimit)
      .skip(offset);

    let count = await NewJnf.find({ userId, status: 'incomplete' }).count();

    res.status(201).json({ success: true, jobs: jnfList, count });
  } catch (error) {
    return next(error);
  }
};

const createJnf = async (req, res, next) => {
  const { Company_Overview, Primary_Hr } = req.body;
  const userId = req.user._id;
  try {
    const newJnf = await NewJnf.create({
      userId,
      Company_Overview,
      Primary_Hr,
    });

    res.status(201).json({ success: true, jobId: newJnf._id });
  } catch (error) {
    return next(error);
  }
};

const updateJnf = async (req, res, next) => {
  const jnfData = req.body;
  try {
    let jnf = await NewJnf.findOne({ _id: jnfData._id });

    if (!jnf) return next(new ErrorResponse('No JNF found with given id', 404));

    jnf.set({ ...jnfData });

    await jnf.save();

    res.status(201).json({ success: true });
  } catch (error) {
    return next(error);
  }
};

const submitReviewedJnf = async (req, res, next) => {
  const { jnfId } = req.params;
  try {
    let jnf = await NewJnf.findOne({ _id: jnfId });

    if (!jnf) return next(new ErrorResponse('No INF found with given id', 404));

    await createJnfPdfForAdmin(jnf, 'JNF.docx');

    jnf.set({ status: 'complete' });

    await jnf.save();

    createJnfPdfForStudent(jnf._id, 'JNFstudent.docx');

    updateJnfInGSheets(jnf);

    res.status(201).json({ success: true });
  } catch (error) {
    return next(error);
  }
};

const removeJnf = async (req, res, next) => {
  let { jnfId } = req.params;
  try {
    let jnf = await NewJnf.findOne({ _id: jnfId });

    if (!jnf) return next(new ErrorResponse('Jnf not found', 404));

    await jnf.remove();

    res.status(201).json({ success: true });
  } catch (error) {
    return next(error);
  }
};

const searchJnf = async (req, res, next) => {
  let { pattern, pageLimit, pageNo } = req.params;

  try {
    pageLimit = parseInt(pageLimit);
    pageNo = parseInt(pageNo);
    let offset = (pageNo - 1) * pageLimit;

    let searchOptions = {
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
    };

    let jnfList = await NewJnf.find(searchOptions)
      .sort({ updatedAt: -1 })
      .limit(pageLimit)
      .skip(offset);

    let count = await NewJnf.find(searchOptions).count();

    res.status(201).json({ success: true, jobs: jnfList, count });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  fetchJnf,
  createJnf,
  updateJnf,
  submitReviewedJnf,
  fetchAllJnf,
  fetchAllJnfForUser,
  fetchPendingJnfForUser,
  searchJnf,
  removeJnf,
};
