import mongoose from 'mongoose'

const doctorSchema = mongoose.Schema({
    email: {
        unique: true,
        require: true,
        type: String
    },
    isAdmin: Boolean,
    name: {
        require: true,
        type: String
    },
    gender: {
        require: true,
        type: String
    },
    designation: {
        type: String
    },
    qualification: {
        type: String
    },
    password: {
        type: String,
        require: true
    }
})

const doctorModel = mongoose.model('doctor',doctorSchema)
export default doctorModel