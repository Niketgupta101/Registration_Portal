const express = require("express");

const { protect, authorizeRoles } = require("../../middlewares/auth");

const {
  sendContactData,
  changeContactStatus,
  deleteContactData,
  getAllContacts,
} = require("../../controllers/contact.controller");

const router = express.Router();

router.post("/", sendContactData);

router.put("/:id", changeContactStatus);

router.delete("/:id", protect, authorizeRoles, deleteContactData);

router.get("/all", protect, getAllContacts);

module.exports = router;
