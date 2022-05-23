const express = require('express');

<<<<<<< HEAD
const {
  protect,
  isAccesible,
  authorizeRoles,
} = require('../../middlewares/auth');
=======
const { protect, isAccesible, authorizeRoles } = require('../../middlewares/auth');
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf

const {
  getJnfById,
  getAllJnfForUser,
  getLatestJnfOfUser,
  getAllJnf,
<<<<<<< HEAD
  createNewJnf,
=======
  createNewJnf, 
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
  updateJnfById,
  deleteJnfById,
  submitJnf,
  searchJnfByPattern,
} = require('../../controllers/jnf.controller');

const router = express.Router();

router.get('/:id', protect, getJnfById);

router.get('/single/:id', protect, getJnfById);

router.get('/user/:userId/:pageno/:pagelimit', protect, getAllJnfForUser);

<<<<<<< HEAD
router.get('/latest', protect, getLatestJnfOfUser);

router.get('/admin/all/:pageno/:pagelimit', protect, getAllJnf);

=======
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
router.get(
  '/search/:pattern/:pageno/:pagelimit',
  protect,
  authorizeRoles,
  searchJnfByPattern
);

<<<<<<< HEAD
=======
router.get('/latest', protect, getLatestJnfOfUser);

router.get('/admin/all/:pageno/:pagelimit', protect, getAllJnf);

>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
router.post('/', protect, createNewJnf);

router.put('/:id', protect, updateJnfById);

router.get('/submit/:id', protect, submitJnf);

router.delete('/delete/:id', protect, deleteJnfById);

module.exports = router;
