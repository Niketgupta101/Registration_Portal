const express = require("express");
const { verifyEmail, fetchUser, editUser, searchUsers, getAllUsers } = require("../../controllers/user.controller");
const { protect, authorizeRoles, isAccesible } = require('../../middlewares/auth');

const router = express.Router();


router.get('/verifyEmail/:verifyToken', verifyEmail);

router.get('/fetchUser/:id', protect, authorizeRoles('Admin'), fetchUser);

router.put('/editUser/:id', protect, isAccesible, editUser);

router.get('/fetchAllUsers', protect, authorizeRoles('Admin'), getAllUsers);

router.get('/searchUsersWithInfo/:info', protect, authorizeRoles('Admin'), searchUsers);


module.exports = router;