const express = require('express');
const { createContacts, getAllContacts, updateContacts, deleteContacts } = require('../controllers/contactController');

const router = express.Router();

router.post('/contacts', createContacts);
router.get('/contacts', getAllContacts);
router.put('/contacts/:id', updateContacts);
router.delete('/contacts/:id', deleteContacts);

module.exports = router;