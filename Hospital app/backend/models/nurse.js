import mongoose from 'mongoose'

const nurseSchema = mongoose.Schema({
    email: {
        unique: true,
        require: true,
        type: String
    },
    name: {
        require: true,
        type: String
    },
    gender: {
        require: true,
        type: String
    },
    password: {
        type: String,
        require: true
    }
})

const nurseModel = mongoose.model('nurse',nurseSchema)
export default nurseModel