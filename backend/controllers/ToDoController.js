const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
    try {
        const toDo = await ToDoModel.find();
        res.send(toDo);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports.saveToDo = async (req, res) => {
    const { text } = req.body;
    try {
        const data = await ToDoModel.create({ text });
        console.log("Added Successfully...");
        console.log(data);
        res.send(data);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports.updateToDo = async(req, res) =>{
    const {_id,text} = req.body
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(()=> res.set(201).send("Updated successfully...."))
    .catch((err) => console.log(err))
}

module.exports.deleteToDo = async(req, res) =>{
    const {_id} = req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=> res.send("Deleted successfully...."))
    .catch((err) => console.log(err))
}
