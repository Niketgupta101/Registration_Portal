const express = require('express');

const router = express.Router();

const {
  protect,
  isAccesible,
  authorizeRoles,
} = require('../../middlewares/auth');

const {
  saveCompanyDetails,
  getCompanyDetailsById,
  getAllCompanyDetails,
  sendInvitationToAllCompanies,
  searchCompanyByPattern,
  fetchAllDefaultInvites,
  sendCustomEmail,
} = require('../../controllers/company.controller');

router.post('/', saveCompanyDetails);

router.get('/:id', protect, isAccesible, getCompanyDetailsById);

router.get(
  '/all/:pageno/:pagelimit',
  protect,
  authorizeRoles,
  getAllCompanyDetails
);
router.post('/mail/all', sendInvitationToAllCompanies);

router.get(
  '/search/:pattern/:pageno/:pagelimit',
  protect,
  authorizeRoles,
  searchCompanyByPattern
);
router.get('/mail/defaultinvites', fetchAllDefaultInvites);
router.post('/sendcustommail', sendCustomEmail);

module.exports = router;
