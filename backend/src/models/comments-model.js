
import mongoose from 'mongoose'

let commentsSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    web: { type: String, required: true },
    comment: { type: String, required: true },
})

let Comments = mongoose.model('comments', commentsSchema)

export default Comments