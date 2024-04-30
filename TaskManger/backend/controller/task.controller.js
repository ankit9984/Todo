import Task from "../model/task.model.js";

const createTask = async (req, res) => {
    try {
        const {title} = req.body;

        const task = new Task({
            title
        });
        
        const newTask = await task.save();

        res.status(201).json(newTask);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
};

const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.find();

        res.status(200).json(tasks);
    } catch (error) {
        console.log('getAllTask Controller', error);
        res.status(500).json({message: error.message})
    }
};

const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const {title} = req.body;
    
        const updatedTask = await Task.findByIdAndUpdate(id, {title}, {new: true})
    
        res.status(200).json(updatedTask);
    } catch (error) {
        console.log('updateTask controller: ', error);
        res.status(500).json({message: error.message})
    }
};

const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;

        const task = await Task.findByIdAndDelete(id);
        
        if(!task){
            return res.status(400).json({error: 'Task is not found'})
        }

        res.status(200).json({message: 'Delete Task successfully' ,task})
    } catch (error) {
        console.log('deleteTask controller: ', error);
        res.status(500).json({message: error.message})
    }
}

export {
    createTask,
    getAllTask,
    updateTask,
    deleteTask
}