import { taskServices } from "../services/taskServices.js";

export const taskControllers = {
    allTask: async (req, res) => {
        try{
            const result = await taskServices.getAll();
            return res.status(200).json({msg: "Ok",data: result})
        }catch(err){
            console.log(err);
        }
    },
    getTask: async (req, res) => {
        const {id} = req.params;
        try{
            const result = await taskServices.getOne(id);
            if(result.length == 0){
                return res.status(400).json({msg: "No existe esa tarea"});
            }
            return res.status(200).json({msg: "Ok", data: result});
        }catch(err){
            console.log(err);
        }
    },
    createTask: async (req, res) => {
        let {task} = req.body;
        task = task.toLowerCase();
        try{
            const result = await taskServices.create(task);
            res.status(200).json({msg: "Ok", data: "Tarea creada correctamente"});
        }catch(err){
            console.log(err);
        }
    },
    updateTask: async (req, res) => {
        let {id} = req.params;
        let {task} = req.body;
        task = task.toLowerCase();
        try{
            let result = await taskServices.getOne(id);
            if(result.length == 0){
                return res.status(400).json({msg: "Error", data: "No existe esa tarea"});
            }
            result = await taskServices.update(id,task);
            res.status(200).json({msg: "Ok", data: "Tarea actualizada correctamente"});
        }catch(err){
            console.log(err);
        }
    },
    deleteTask: async (req, res) => {
        let {id} = req.params;
        try{
            let task = await taskServices.getOne(id);
            if(task.length == 0){
                return res.status(400).json({msg: "Error", data: "No existe la tarea"});
            }
            task = await taskServices.delete(id);
            res.status(200).json({msg: "Ok", data: "Tarea eliminada con éxito"})
        }catch(err){
            console.log(err);
        }
    }
}