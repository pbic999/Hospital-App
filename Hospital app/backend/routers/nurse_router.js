import express from 'express'
import nurseModel from '../models/nurse.js'

const nurseRouter = express.Router()

nurseRouter.post('/add', async (req,res) => {
    try {
        const details = req.body
        const checkNurse = await nurseModel.findOne({email: details.email})
        if(checkNurse){
            res.send('User Already exist')
        }
        else {
            const newNurse = new nurseModel(details)
            await newNurse.save()
            res.status(201).send('added Successfully')
        }
    }
    catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
})

nurseRouter.get('/:nurse', async (req,res) => {
    try {
        const email = req.params.doctor
        const nurse = await nurseModel.findOne({email})
        res.status(200).send(nurse)
    }
    catch (err) {
        res.status(500).send(err)
    }
})

export default nurseRouter
