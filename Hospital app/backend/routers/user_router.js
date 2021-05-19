import express from 'express'
import userModel from '../models/user.js'

const userRouter = express.Router()

userRouter.post('/add', async (req,res) => {
    try {
        const details = req.body
        const checkDoctor = await userModel.findOne({email: details.email})
        if(checkDoctor){
            res.send('User Already exist')
        }
        else {
            const newDoctor = new userModel(details)
            await newDoctor.save()
            res.status(201).send('added Successfully')
        }
    }
    catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
})

export default userRouter
