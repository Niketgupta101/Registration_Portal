const express = require("express");
const { verifyEmail, fetchUser, editUser, searchUsers, getAllUsers } = require("../../controllers/user.controller");
const { protect, authorizeRoles, isAccesible } = require('../../middlewares/auth');

const router = express.Router();


router.get('/verifyEmail/:verifyToken', verifyEmail);

router.get('/fetchUser/:id', protect, authorizeRoles, fetchUser);

router.put('/editUser/:id', protect, isAccesible, editUser);

router.get('/fetchAllUsers', protect, authorizeRoles, getAllUsers);

router.get('/searchUsersWithInfo/:info', protect, authorizeRoles, searchUsers);


module.exports = router;