import express from 'express'
import patientModel from '../models/patient.js'
import patientRecordModel from '../models/patient_record.js' 

const patientRouter = express.Router()

patientRouter.post('/add', async (req,res) => {
    try {
        const patient_details = req.body 
        const patient = await patientModel.findOne({UHID: patient_details.UHID})
        const date = new Date()
        const timestamp = `${date.toLocaleDateString().split('/').join('-')} ${date.getHours()}-${date.getMinutes()}`
        if(patient) res.send('patient already exist.')
        else {
        const newData = new patientModel(patient_details)
        await newData.save()
        const newRecordData = new patientRecordModel({
            UHID: patient_details.UHID,
            hospital_id: patient_details.hospital_id,
            record: {
                ward_name: patient_details.ward_name,
                doa: patient_details.doa,
                pr: patient_details.pr,
                bp: patient_details.bp,
                rr: patient_details.rr,
                spo2: patient_details.spo2,
                o2_niv_mv: patient_details.o2_niv_mv,
                complaints: patient_details.complaints,
                o2_niv_mv_level: patient_details.o2_niv_mv_level,
                doctors: patient_details.duty_doctor,
                nurses: patient_details.duty_nurse,
                timestamp
            }
        })
        await newRecordData.save()
        res.status(201).send('added successfully')
    }
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})

patientRouter.post('/add/record', async (req,res)=> {
    try{
        const {UHID,hospital_id,...record} = req.body
        const date = new Date()
        const timestamp = `${date.toLocaleDateString().split('/').join('-')} ${date.getHours()}-${date.getMinutes()}`
        await patientRecordModel.findOneAndUpdate(
            {$and:[{ UHID,hospital_id }]},{$push: {record: {...record,timestamp}}});
        const {ward_name,doa,pr,bp,rr,spo2,o2_niv_mv
            ,complaints,o2_niv_mv_level,duty_doctor,duty_nurse} = record
        await patientModel.findOneAndUpdate({$and:[{ UHID,hospital_id }]},{$set: {
            ward_name,doa,bp,rr,pr,spo2,o2_niv_mv,o2_niv_mv_level,complaints,duty_doctor,duty_nurse
        }})
        res.send('updated successfully')
    }
    catch(err) {
        res.status(500).send(err)
        console.log(err);
    }
})

/*patientRouter.get('/UHID/:UHID/:hospital_id:', async (req,res) => {
    try {
        const UHID = req.params.UHID
        const hospital_id = req.params.hospital_id
        const patients = await patientModel.findOne({$and:{ UHID,hospital_id }})
        res.status(200).send(patients)
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})*/

patientRouter.get('/UHIDOrName/:UHIDOrName/:hospital_id', async (req,res) => {
    try {
        const UHIDOrName = req.params.UHIDOrName
        const hospital_id = req.params.hospital_id
        const patient = await patientModel.find({$and:[{hospital_id},
            {$or:[{UHID:UHIDOrName},{patient_name:UHIDOrName}]}]})
        res.status(200).send(patient)
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})

patientRouter.get('/DM/:hospital_id', async (req,res) => {
    try {
        const hospital_id = req.params.hospital_id
        const patients = await patientModel.find({$and: [{hospital_id,complaints: 'DM'}]})
        res.status(200).send(patients)
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})

patientRouter.get('/doa/:doa/:hospital_id', async (req,res) => {
    try {
        const doa = req.params.doa
        const hospital_id = req.params.hospital_id
        const patients = await patientModel.find({$and:[{ doa,hospital_id }]})
        res.status(200).send(patients)
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})

patientRouter.get('/bp/:bp/:hospital_id', async (req,res) => {
    try {
        const hospital_id = req.params.hospital_id
        const bp = req.params.bp.replace('-','/')
        const patients = await patientModel.find({$and:[{ bp,hospital_id }]})
        res.status(200).send(patients)
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})

patientRouter.get('/pr/:pr/:hospital_id', async (req,res) => {
    try {
        const pr = req.params.pr
        const hospital_id = req.params.hospital_id
        const patients = await patientModel.find({$and:[{ pr,hospital_id }]})
        res.status(200).send(patients)
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})

patientRouter.get('/spo2/:spo2/:hospital_id', async (req,res) => {
    try {
        const spo2 = parseInt(req.params.spo2)
        const hospital_id = req.params.hospital_id
        const patients = await patientModel.find({$and:[{ spo2,hospital_id }]})
        res.status(200).send(patients)
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})

patientRouter.get('/duty_doctor/:doctor/:hospital_id', async (req,res) => {
    try {
        const duty_doctor = req.params.doctor
        const hospital_id = req.params.hospital_id
        const patients = await patientModel.find({$and:[{ duty_doctor,hospital_id }]})
        res.status(200).send(patients)
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})

patientRouter.get('/ward/:ward/:hospital_id', async (req,res) => {
    try {
        const ward = req.params.ward
        const hospital_id = req.params.hospital_id
        const patients = await patientModel.find({$and:[{ ward,hospital_id }]})
        res.status(200).send(patients)
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})

patientRouter.get('/get/record/:UHID/:date/:hospital_id', async (req,res) => {
    try{
        const UHID =  req.params.UHID
        const timestamp = req.params.date
        const hospital_id = req.params.hospital_id
        const data = await patientRecordModel.findOne({$and:[{ UHID,hospital_id }]},
            {_id:0,record: {$elemMatch: {timestamp}}})
        res.send(data)
    }
    catch(err) {
        res.status(500).send(err)
    }
})

export default patientRouter