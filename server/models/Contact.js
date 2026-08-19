const mongoose = require('mongoose');

let ContactModel = null;
const inMemoryContacts = [];

try {
  const contactSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    subject: { type: String, default: 'Data Analyst Portfolio Inquiry' },
    company: { type: String, trim: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  });

  ContactModel = mongoose.model('Contact', contactSchema);
} catch (e) {
  // Mongoose schema initialization
}

const saveContactMessage = async (data) => {
  const record = {
    id: 'msg_' + Date.now(),
    name: data.name,
    email: data.email,
    subject: data.subject || 'Portfolio Inquiry',
    company: data.company || 'N/A',
    message: data.message,
    createdAt: new Date().toISOString()
  };

  if (mongoose.connection.readyState === 1 && ContactModel) {
    try {
      const doc = new ContactModel(record);
      await doc.save();
      return { success: true, mode: 'mongodb', data: doc };
    } catch (err) {
      console.warn('MongoDB save error, falling back to memory store:', err.message);
    }
  }

  inMemoryContacts.push(record);
  return { success: true, mode: 'in-memory', data: record };
};

const getContactMessages = async () => {
  if (mongoose.connection.readyState === 1 && ContactModel) {
    try {
      return await ContactModel.find().sort({ createdAt: -1 });
    } catch (err) {
      console.warn('MongoDB fetch error, falling back to memory:', err.message);
    }
  }
  return inMemoryContacts;
};

module.exports = {
  ContactModel,
  saveContactMessage,
  getContactMessages
};
