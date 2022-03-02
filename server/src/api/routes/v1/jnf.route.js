const express = require('express');

const { protect, isAccesible, authorizeRoles } = require('../../middlewares/auth');

const { getJnfById, getAllJnfForUser, getLatestJnfOfUser, getAllJnf, createNewJnf, updateJnfById, deleteJnfById, submitJnf } = require('../../controllers/jnf.controller');

const router = express.Router();

router.get('/:id', protect, isAccesible, getJnfById);

router.get('/user/:userId', protect, getAllJnfForUser);

router.get('/latest/jnf', protect, getLatestJnfOfUser);

router.get('/admin', protect, authorizeRoles, getAllJnf);

router.post('/', protect, isAccesible, createNewJnf);

router.put('/:id', protect, isAccesible, updateJnfById);

router.get('/submit/:id', protect, isAccesible, submitJnf);

router.delete('/:id', protect, isAccesible, deleteJnfById);

module.exports = router;