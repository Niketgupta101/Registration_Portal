const { NewInf } = require('../models/InfData');
const ErrorResponse = require('../utils/errorResponse');

const ObjectId = require('mongoose').Schema.ObjectId;

const fetchInf = async (req, res, next) => {
  const { infId } = req.params;
  try {
    let inf = await NewInf.findOne({ _id: infId });

    console.log(infId, inf);

    if (!inf) return next(new ErrorResponse('No INF found with given id', 404));

    res.status(201).json({ success: true, job: inf });
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
  console.log(infData._id);
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

    // await createInfPdfForAdmin(inf);
    // createInfPdfForStudent(inf);

    inf.set({ status: 'complete' });

    await inf.save();

    res.status(201).json({ success: true });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = { fetchInf, createInf, updateInf, submitReviewedInf };
