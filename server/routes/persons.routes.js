const express = require('express');

const router = express.Router();

const personsCtrl = require('../controllers/persons.controller')

router.get('/', personsCtrl.getPersons);
router.post('/', personsCtrl.createPerson);
router.get('/:id', personsCtrl.getPerson);
router.put('/:id', personsCtrl.editPerson);
router.delete('/:id', personsCtrl.deletePerson);



module.exports = router;