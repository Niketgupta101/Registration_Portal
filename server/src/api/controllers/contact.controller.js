const {
  postContactData,
  updateContactStatus,
  deleteContactById,
  fetchAllContacts,
} = require('../services/contactProvider');

const sendContactData = async (req, res, next) => {
  const details = req.body;
  try {
    let response = await postContactData(details, next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const changeContactStatus = async (req, res, next) => {
  const id = req.params.id;

  try {
    const response = await updateContactStatus(id, next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const deleteContactData = async (req, res, next) => {
  const id = req.params.id;

  try {
    let response = await deleteContactById(id, next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res, next) => {
  try {
    let response = await fetchAllContacts(next);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  sendContactData,
  changeContactStatus,
  deleteContactData,
  getAllContacts,
};
