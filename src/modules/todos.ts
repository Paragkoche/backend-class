import mongoose from "mongoose";


const Todos = new mongoose.Schema({
    time: {
        type: Number,
        default: Date.now()
    },
    message: {
        type: String,
    },
    completeOn: {
        type: Number
    }
})

export default mongoose.model("todos", Todos);