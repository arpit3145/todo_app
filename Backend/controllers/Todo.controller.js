import TodoModel from "../models/Todo.model.js" 

export const addTodo = async(req, res)=>{
    try {
        const{description, status} = req.body
//         if(description.trim() === ""){
// res.status(400).json({message:"field is required"})
//         }
        const newTodo = await TodoModel.create({
            description : description
        })
        await newTodo.save()

        return res.status(200).json(newTodo)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export const getAllTodos = async(req,res)=>{
    try{
        const todos = await TodoModel.find()

        if(todos.length ===0){
            return res.status(404).json({message:"No Todo Found"})
        }
        res.status(200).json(todos)
    }catch(error){
        return res.status(500).json(error.message)
    }
}

export const updateTodo = async(req,res)=>{
    try{
         await TodoModel.findOneAndUpdate(
            {_id: req.params.id},
            {description: req.body.description}
        )
const  todo = await TodoModel.findById(req.params.id)
return res.status(200).json(todo)
    }catch(error){
        return res.status(500).json(error.message)
    }
}

export const deleteTodo = async(req,res)=>{
    try{
       const todo = await TodoModel.findByIdAndDelete(req.params.id)
         return res.status(200).json(todo)
    }catch(error){
        return res.status(500).json(error.message)
    }
}


export const toggleTodoDone = async(req,res)=>{
    try{
        const todos = await TodoModel.findById(req.params.id)

       const todo = await TodoModel.findOneAndUpdate(
            {_id: req.params.id},
            {status: !todos.status}
        )
       await todo.save();

        res.status(200).json(todo)
    }catch(error){
        return res.status(500).json(error.message)
    }
}