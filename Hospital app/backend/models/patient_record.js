import mongoose from 'mongoose'

const patientRecordSchema = mongoose.Schema({
    ward_name: {
        type: Array,
        require: true
    },
    UHID: {
        type: String,
        require: true
    },
    doa: {
        type: Array,
        require: true
    },
    pr: {
        type: Array,
        require: true
    },
    bp: {
        type: Array,
        require: true
    },
    rr: {
        type: Array,
        require: true
    },
    spo2: {
        type: Array,
        require: true
    },
    o2_niv_mv: {
        type: Array,
        require: true
    },
    complaints: {
        type: Array,
    },
    o2_niv_mv_level: Number,
    doctors: Array,
    nurses: Array,
    hospital_id: String
})

const patientRecordModel = mongoose.model('patient_record',patientRecordSchema)
export default patientRecordModel