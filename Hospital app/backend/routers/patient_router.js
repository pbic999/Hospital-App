import express from 'express'
import patientModel from '../models/patient.js'

const patientRouter = express.Router()

patientRouter.post('/add', async (req,res) => {
    try {
        const patient_details = req.body 
        const newData = new patientModel(patient_details)
        await newData.save()
        res.status(201).send('added successfully')
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})

patientRouter.get('/name/:name', async (req,res) => {
    try {
        const patient_name = req.params.name
        const patients = await patientModel.find({patient_name})
        res.status(200).send(patients)
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})

patientRouter.get('/UHID/:UHID', async (req,res) => {
    try {
        const UHID = req.params.UHID
        const patient = await patientModel.findOne({UHID})
        res.status(200).send(patient)
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})

patientRouter.get('/DM', async (req,res) => {
    try {
        const patients = await patientModel.find({complaints: 'DM'})
        res.status(200).send(patients)
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})

patientRouter.get('/doa/:doa', async (req,res) => {
    try {
        const doa = req.params.doa
        const patients = await patientModel.find({doa})
        res.status(200).send(patients)
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})

patientRouter.get('/bp/:bp', async (req,res) => {
    try {
        const bp = req.params.bp
        const patients = await patientModel.find({bp})
        res.status(200).send(patients)
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})

patientRouter.get('/pr/:pr', async (req,res) => {
    try {
        const pr = req.params.pr
        const patients = await patientModel.find({pr})
        res.status(200).send(patients)
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})

patientRouter.get('/spo2/:spo2', async (req,res) => {
    try {
        const spo2 = parseInt(req.params.spo2)
        const patients = await patientModel.find({spo2})
        res.status(200).send(patients)
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})

patientRouter.get('/duty_doctor/:doctor', async (req,res) => {
    try {
        const duty_doctor = req.params.doctor
        const patients = await patientModel.find({duty_doctor})
        res.status(200).send(patients)
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})

patientRouter.get('/ward/:ward', async (req,res) => {
    try {
        const ward = req.params.ward
        const patients = await patientModel.find({ward})
        res.status(200).send(patients)
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})

export default patientRouter