const express = require('express');

const { protect, isAccesible } = require('../../middlewares/auth');

const { getJnfById, getAllJnfForUser, getLatestJnfOfUser, getAllJnf, createNewJnf, updateJnfById, deleteJnfById, submitJnf } = require('../../controllers/jnf.controller');

const router = express.Router();

router.get('/:id', protect, getJnfById);

router.get('/single/:id', protect, getJnfById);

router.get('/user/:userId', protect, getAllJnfForUser);

router.get('/latest', protect, getLatestJnfOfUser);

router.get('/admin/all', protect, getAllJnf);

router.post('/', protect, createNewJnf);

router.put('/:id', protect, updateJnfById);

router.get('/submit/:id', protect, submitJnf);

router.delete('/delete/:id', protect, isAccesible, deleteJnfById);

module.exports = router;