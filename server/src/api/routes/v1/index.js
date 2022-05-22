const express = require('express');
const userRoutes = require('./user.route.js');
const authRoutes = require('./auth.route.js');
const companyRoutes = require('./company.route.js');
const INFRoutes = require('./inf.route.js');
const JNFRoutes = require('./jnf.route.js');
const contactRoutes = require('./contact.route');
const jobRoutes = require('./job.route');
const courseRoutes=require('./course.route');
const router = express.Router();

router.get('/ping', (req, res) => res.send('OK'));

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/company', companyRoutes);
router.use('/company', companyRoutes);
router.use('/inf', INFRoutes);
router.use('/jnf', JNFRoutes);
router.use('/contact', contactRoutes);
router.use('/jobs', jobRoutes);
router.use('/courses', courseRoutes);

module.exports = router;