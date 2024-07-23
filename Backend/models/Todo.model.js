import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    description:{
        type: String,
        reqiured: true
    },
    status:{
        type : String,
        default: "pending"
    }
},
{timestamps:true}
)

const TodoModel = mongoose.model('todo', TodoSchema);

export default TodoModel