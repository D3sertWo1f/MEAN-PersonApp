const Person = require('../models/persons')

const personsCtrl = {}

personsCtrl.getPersons = async(req, res) => {
 const persons = await Person.find();
 res.json(persons);
}

personsCtrl.createPerson = async(req, res) => {
    const person = new Person({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        country: req.body.country
    });
    await person.save();
    res.json({
        status: "Person saved"
    });
   }

personsCtrl.getPerson = async(req, res) => {
    const person = await Person.findById(req.params.id)
    res.json(person)

}

personsCtrl.editPerson = async(req, res) => {
    const {id} = req.params;
    const person = {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        coutry: req.body.country
    }
    await Person.findByIdAndUpdate(id, {$set: person})
    res.json({status: "Person updated"})

}

personsCtrl.deletePerson = async(req, res) => {
    await Person.findByIdAndRemove(req.params.id)
    res.json({
        status: "Person deleted"
    })
}

module.exports = personsCtrl;