const Contact = require('../models/contact');
const ErrorResponse = require('../utils/errorResponse');

const postContactData = async (details, next) => {
    try {
        let contact = await Contact.create(details);

        return { success: true, contact };
    } catch (error) {
        return next(error);
    }
}

const updateContactStatus = async (id, next) => {
    try {
        let contact = await Contact.findOne({ _id: id });

        if(!contact)
        return next(new ErrorResponse('No contact found with given id', 404));

        if(contact.progress === 'Pending')
        contact.set({ progress: 'Resolved' });
        else
        contact.set({ progress: 'Pending' });

        await contact.save();

        return { success: true, contact };
    } catch (error) {
        return next(error);
    }
}

const deleteContactData = async (id, next) => {
    try {
        let contact = await Contact.findOne({ _id: id });

        if(!contact)
        return next(new ErrorResponse('No contact found with given id', 404));

        await contact.remove();

        return { success: true, message: "Contact details deleted successfully" };
    } catch (error) {
        return next(error);
    }
}

const fetchAllContacts = async (next) => {
    try {
        let contactList = await Contact.find().sort({ createdAt: -1 });

        return { success: true, contactList };
    } catch (error) {
        return next(error);
    }
}

module.exports = { postContactData, updateContactStatus, deleteContactData, fetchAllContacts };