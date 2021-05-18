import express from 'express'
import doctorModel from '../models/doctor.js'

const doctorRouter = express.Router()

doctorRouter.post('/add', async (req,res) => {
    try {
        const details = req.body
        const checkDoctor = await doctorModel.findOne({email: details.email})
        if(checkDoctor){
            res.send('User Already exist')
        }
        else {
            const newDoctor = new doctorModel(details)
            await newDoctor.save()
            res.status(201).send('added Successfully')
        }
    }
    catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
})

doctorRouter.get('/:doctor', async (req,res) => {
    try {
        const email = req.params.doctor
    const doctor = await doctorModel.findOne({email})
    res.status(200).send(doctor)
    }
    catch (err) {
        res.status(500).send(err)
    }
})

export default doctorRouter
