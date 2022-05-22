const express = require('express');

const {
  protect,
  isAccesible,
  authorizeRoles,
} = require('../../middlewares/auth');

const {
  getInfById,
  getAllInfForUser,
  getLatestInfOfUser,
  getAllInf,
  createNewInf,
  updateInfById,
  deleteInfById,
  submitInf,
  searchInfByPattern,
} = require('../../controllers/inf.controller');

const router = express.Router();

router.get('/:id', protect, getInfById);

router.get('/single/:id', protect, getInfById);

router.get('/user/:userId/:pageno/:pagelimit', protect, getAllInfForUser);

router.get(
  '/search/:pattern/:pageno/:pagelimit',
  protect,
  authorizeRoles,
  searchInfByPattern
);

router.get('/latest', protect, getLatestInfOfUser);

router.get('/admin/all/:pageno/:pagelimit', protect, getAllInf);

router.post('/', protect, createNewInf);

router.put('/:id', protect, updateInfById);

router.get('/submit/:id', protect, submitInf);

router.delete('/delete/:id', protect, deleteInfById);

module.exports = router;
