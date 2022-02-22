const express = require('express');

const { protect, authorizeRoles } = require('../../middlewares/auth');

const { sendContactData, changeContactStatus, deleteContactData } = require('../../controllers/contact.controller');

const router = express.Router();

router.post('/', sendContactData);

router.put('/:id', protect, authorizeRoles('Admin'), changeContactStatus);

router.delete('/:id', protect, authorizeRoles('Admin'), deleteContactData);

module.exports = router;