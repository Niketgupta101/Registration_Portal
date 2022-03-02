const express = require('express');

const { protect, isAccesible, authorizeRoles } = require('../../middlewares/auth');

const { getInfById, getAllInfForUser, getLatestInfOfUser, getAllInf, createNewInf, updateInfById, deleteInfById, submitInf } = require('../../controllers/inf.controller');

const router = express.Router();

router.get('/:id', protect, getInfById);

router.get('/single/:id', protect, getInfById);

router.get('/user/:userId', protect, getAllInfForUser);

router.get('/latest', protect, getLatestInfOfUser);

router.get('/admin/all', protect, getAllInf);

router.post('/', protect, createNewInf);

router.put('/:id', protect, updateInfById);

router.get('/submit/:id', protect, submitInf);

router.delete('/delete/:id', protect, isAccesible, deleteInfById);

module.exports = router;