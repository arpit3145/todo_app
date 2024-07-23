import TodoModel from "../models/Todo.model.js" 

export const addTodo = async(req, res)=>{
    try {
        const newTodo = await TodoModel.create({
            description : req.body.description
        })
        await newTodo.save()

        return res.status(200).json(newTodo)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export const getAllTodos = async(req,res)=>{
    try{

    }catch(error){
        return res.status(500).json(error.message)
    }
}