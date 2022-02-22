const express = require('express');

const { protect, isAccesible, authorizeRoles } = require('../../middlewares/auth');

const { getInfById, getAllInfForUser, getLatestInfOfUser, getAllInf, createNewInf, updateInfById, deleteInfById, submitInf } = require('../../controllers/inf.controller');

const router = express.Router();

router.get('/:id', protect, isAccesible, getInfById);

router.get('/user/:userId', protect, isAccesible, getAllInfForUser);

router.get('/latest/inf', protect, getLatestInfOfUser);

router.get('/admin', protect, authorizeRoles('Admin'), getAllInf);

router.post('/', protect, createNewInf);

router.put('/:id', protect, updateInfById);

router.get('/submit/:id', protect, isAccesible, submitInf);

router.delete('/:id', protect, isAccesible, deleteInfById);

module.exports = router;