const express = require('express');

const {
  protect,
  isAccesible,
  authorizeRoles,
} = require('../../middlewares/auth');

const {
  fetchJnf,
  createJnf,
  updateJnf,
  submitReviewedJnf,
  removeJnf,
  fetchAllJnf,
  fetchAllJnfForUser,
  fetchPendingJnfForUser,
  searchJnf,
} = require('../../controllers/newJnf.controller');

const router = express.Router();

router.get('/new/fetch/:jnfId', protect, fetchJnf);

router.post('/new', protect, createJnf);

router.put('/new/update', protect, updateJnf);

router.put('/new/submit/:jnfId', submitReviewedJnf);

router.delete('/new/delete/:jnfId', protect, removeJnf);

router.get(
  '/new/admin/:pageLimit/:pageNo',
  protect,
  authorizeRoles,
  fetchAllJnf
);
router.get('/new/user/:pageLimit/:pageNo', protect, fetchAllJnfForUser);
router.get(
  '/new/user/pending/:pageLimit/:pageNo',
  protect,
  fetchPendingJnfForUser
);
router.get('/new/search/:pattern/:pageLimit/:pageNo', protect, searchJnf);

module.exports = router;
