import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet,TextInput, Text, View, StatusBar, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button,  } from 'react-native-paper';

const PatientEntryForm = () => {

    const [s_no, setS_no] = useState('');
    const [patient_name, setPatient_name] = useState('');
    const [ward_name, setWard_name] = useState('');
    const [UHID, setUHID] = useState('');
    const [hospital_no, setHospital_no] = useState('');
    const [bed, setBed] = useState('');
    const [doa, setDoa] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [pr, setPr] = useState('');
    const [bp, setBp] = useState('');
    const [rr, setRr] = useState('');
    const [spo2,setSpo2] = useState('');
    const [o2_niv_mv, setO2_niv_mv] = useState('');
    const [o2_niv_mv_level, setO2_niv_mv_level] = useState('');
    const [freshComplaints, setFreshComplaints] = useState('');
    const [dutyDoctors,setDutyDoctors] = useState('');

    const verfiyBp = (bp) => {
        var bp_regex = /^\d{1,3}\/\d{1,3}$/;
        if (bp.match(bp_regex)) {
            return true;
        } else {
            alert('BP must be of form (systolic/diastolic)!');
            return false;
        }
    }

    const checkTextInput = () => {
        //Check for the s.no TextInput
        if (!s_no.trim()) {
            alert('Please Enter s.no');
            return false;
        }
        //Check for the Name TextInput
        if (!patient_name.trim()) {
          alert('Please Enter Patient Name');
          return false;
        }
        //Check for the Duty Doctor TextInput
        if (!dutyDoctors.trim()) {
            alert('Please Enter Duty Doctor Name');
            return false;
          }
        //Check for the Ward Name TextInput
        if (!ward_name.trim()) {
          alert('Please Enter Ward Name');
          return false;
        }
        //Check for the UHID TextInput
        if (!UHID.trim()) {
            alert('Please Enter UHID');
            return false;
        }
        if (isNaN(UHID)) {
            alert('UHID must be a number!');
            return false;
        }
        if (!hospital_no.trim()) {
            alert('Please Enter Hospital number');
            return false;
        }
        if (isNaN(hospital_no)) {
            alert('Hospital no. must be a number!');
            return false;
        }
        if (!bed.trim()) {
            alert('Please Enter Bed Type!');
            return false;
        }
        if (!doa.trim()) {
            alert('Please Enter DOA');
            return false;
        }
        if (!age.trim()) {
            alert('Please Enter Age');
            return false;
        }
        if (isNaN(age)) {
            alert('Age must be a number!');
            return false;
        }
        if (!sex.trim()) {
            alert('Please fill the Sex field');
            return false;
        }
        if (!pr.trim()) {
            alert('Please Enter PR');
            return false;
        }
        if (isNaN(pr)) {
            alert('PR must be a number!');
            return false;
        }
        if (!bp.trim()) {
            alert('Please Enter BP!');
            return false;
        }
        if (!verfiyBp(bp)) {
            return false
        }
        if (!rr.trim()) {
            alert('Please Enter RR');
            return false;
        }
        if (isNaN(rr)) {
            alert('RR must be a number!');
            return false;
        }
        if (!spo2.trim()) {
            alert('Please Enter SPO2');
            return false;
        }
        if (!o2_niv_mv.trim()) {
            alert('Please Enter O2 NIV MV');
            return false;
        }
        if (!o2_niv_mv_level.trim()) {
            alert('Please Enter O2NRBM in L');
            return false;
        }
        if (!freshComplaints.trim()) {
            alert('Please Enter COMORBID complaints');
            return false;
        }
        
        //Checked Successfully
        //Do whatever you want
        return true;
    };

    const handleSubmit = () => {
        if (!checkTextInput()) return;
        const duty_doctor = dutyDoctors.split(',');
        const complaints = freshComplaints.split(',');
        
        axios.post('http://192.168.0.106:5000/patient/add',{
            patient_name,
            s_no,
            ward_name,
            UHID,
            hospital_no,
            bed,
            age,
            sex,
            pr,
            bp,
            rr,
            spo2,
            o2_niv_mv,
            o2_niv_mv_level,
            complaints,
            duty_doctor
        }).then((res)=> console.log(res.data))

        setS_no('');
        setPatient_name('');
        setDutyDoctors('');
        setWard_name('');
        setUHID('');
        setHospital_no('');
        setDoa('');
        setAge('');
        setSex('');
        setPr('');
        setBp('');
        setRr('');
        setSpo2('');
        setO2_niv_mv('');
        setO2_niv_mv_level('');
        setFreshComplaints(''); 
    }

    return(

        <>
            <View style={styles.container}>
            <ScrollView>
                    <StatusBar backgroundColor="#0481eb" />
                    
                    <Text style={styles.title}>Enter new patient information :</Text>
                    <TextInput 
                        placeholder='S. no'
                        value={s_no}
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setS_no(text)}
                    />
                    <TextInput 
                        placeholder='Patient Name'
                        value={patient_name}
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setPatient_name(text)}
                    />
                    <TextInput 
                        placeholder='Duty Doctors'
                        value={dutyDoctors}
                        theme={{colors:{primary: "#0481eb"}}} 
                        style={styles.textInput}
                        onChangeText={(text)=>setDutyDoctors(text)}
                    />
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                        placeholder='Name of Ward'
                        value={ward_name}
                        theme={{colors:{primary: "#0481eb"}}}
                        onChangeText={(text)=>setWard_name(text)}
                        style={styles.smallTextInput} />
                        <TextInput 
                        value={UHID}
                        placeholder='UHID'
                        theme={{colors:{primary: "#0481eb"}}}
                        onChangeText={(text)=>setUHID(text)}
                        style={styles.smallTextInput} />
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                        placeholder='Hospital No'
                        value={hospital_no}
                        theme={{colors:{primary: "#0481eb"}}}
                        onChangeText={(text)=>setHospital_no(text)}
                        style={styles.smallTextInput} />
                        <TextInput 
                        placeholder='Bed type(O2/ICU..)'
                        value={bed}
                        theme={{colors:{primary: "#0481eb"}}}
                        onChangeText={(text)=>setbed(text)}
                        style={styles.smallTextInput} />
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                        placeholder='Age'
                        value={age}
                        theme={{colors:{primary: "#0481eb"}}}
                        onChangeText={(text)=>setAge(text)}
                        style={styles.smallTextInput} />
                        <TextInput 
                        placeholder='Sex'
                        value={sex}
                        theme={{colors:{primary: "#0481eb"}}}
                        onChangeText={(text)=>setSex(text)}
                        style={styles.smallTextInput} />
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                        placeholder='PR'
                        value={pr}
                        theme={{colors:{primary: "#0481eb"}}}
                        onChangeText={(text)=>setPr(text)}
                        style={styles.smallTextInput} />
                        <TextInput 
                        value={bp}
                        placeholder='BP'
                        theme={{colors:{primary: "#0481eb"}}}
                        onChangeText={(text)=>setBp(text)}
                        style={styles.smallTextInput} />
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                    value={rr}
                        placeholder='RR'
                        theme={{colors:{primary: "#0481eb"}}}
                        onChangeText={(text)=>setRr(text)}
                        style={styles.smallTextInput} />
                    <TextInput 
                    value={spo2}
                        placeholder='SPO2'
                        theme={{colors:{primary: "#0481eb"}}}
                        onChangeText={(text)=>setSpo2(text)}
                        style={styles.smallTextInput} />
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                    value={o2_niv_mv}
                        placeholder='O2 NIV MV'
                        theme={{colors:{primary: "#0481eb"}}}
                        onChangeText={(text)=>setO2_niv_mv(text)}
                        style={styles.smallTextInput} />
                    <TextInput 
                    value={o2_niv_mv_level}
                        placeholder='O2 NRBM in L'
                        theme={{colors:{primary: "#0481eb"}}}
                        onChangeText={(text)=>setO2_niv_mv_level(text)}
                        style={styles.smallTextInput} />
                    </View>
                    <TextInput
                    value={freshComplaints}
                        placeholder='Fresh Complaints'
                        theme={{colors:{primary: "#0481eb"}}}
                        onChangeText={(text)=>setFreshComplaints(text)}
                        style={styles.textInput} />
                    <Text style={styles.submitButton} onPress={handleSubmit}> Submit </Text>
            </ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width:"100%",
        height:"100%",
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 10,
        paddingLeft: 10
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
    },
    textInput: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#a2a2a2',
        borderRadius: 5,
        fontSize: 20,
        lineHeight: 30,
        padding: 8
    },
    smallFieldsContainer: {
        flexDirection: 'row',
        marginTop: 10,
    }, 
    smallTextInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#a2a2a2',
        borderRadius: 5,
        fontSize: 20,
        lineHeight: 30,
        padding: 8
    },
    submitButton: {
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#0481eb',
        borderRadius: 3,
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        marginTop: 20
    }
});

export default PatientEntryForm;