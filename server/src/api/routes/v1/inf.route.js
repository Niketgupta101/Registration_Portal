const express = require('express');

const {
  protect,
  isAccesible,
  authorizeRoles,
} = require('../../middlewares/auth');

const {
  fetchInf,
  createInf,
  updateInf,
  submitReviewedInf,
  fetchAllInf,
  fetchAllInfForUser,
  searchInf,
  fetchPendingInfForUser,
  removeInf,
} = require('../../controllers/newInf.controller');

const router = express.Router();

router.get('/new/fetch/:infId', protect, fetchInf);

router.post('/new', protect, createInf);

router.put('/new/update', protect, updateInf);

router.put('/new/submit/:infId', submitReviewedInf);

router.delete('/new/delete/:infId', protect, removeInf);

router.get(
  '/new/admin/:pageLimit/:pageNo',
  protect,
  authorizeRoles,
  fetchAllInf
);
router.get('/new/user/:pageLimit/:pageNo', protect, fetchAllInfForUser);
router.get(
  '/new/user/pending/:pageLimit/:pageNo',
  protect,
  fetchPendingInfForUser
);
router.get('/new/search/:pattern/:pageLimit/:pageNo', protect, searchInf);

module.exports = router;
