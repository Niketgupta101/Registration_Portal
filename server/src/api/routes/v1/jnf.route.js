const express = require('express');

const { protect, isAccesible, authorizeRoles } = require('../../middlewares/auth');

const {
  getJnfById,
  getAllJnfForUser,
  getLatestJnfOfUser,
  getAllJnf,
  createNewJnf, 
  updateJnfById,
  deleteJnfById,
  submitJnf,
  searchJnfByPattern,
} = require('../../controllers/jnf.controller');

const router = express.Router();

router.get('/:id', protect, getJnfById);

router.get('/single/:id', protect, getJnfById);

router.get('/user/:userId/:pageno/:pagelimit', protect, getAllJnfForUser);

router.get('/latest', protect, getLatestJnfOfUser);

router.get('/admin/all/:pageno/:pagelimit', protect, getAllJnf);

router.get(
  '/search/:pattern/:pageno/:pagelimit',
  protect,
  authorizeRoles,
  searchJnfByPattern
);
router.post('/', protect, createNewJnf);

router.put('/:id', protect, updateJnfById);

router.get('/submit/:id', protect, submitJnf);

router.delete('/delete/:id', protect, deleteJnfById);

module.exports = router;
