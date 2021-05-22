import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet,TextInput, Text, View, StatusBar, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button,  } from 'react-native-paper';

const PatientEntryForm = () => {

    const [s_no, setS_no] = useState();
    const [patient_name, setPatient_name] = useState();
    const [ward_name, setWard_name] = useState();
    const [UHID, setUHID] = useState();
    const [hospital_no, setHospital_no] = useState();
    const [bed, setbed] = useState();
    const [age, setAge] = useState();
    const [sex, setSex] = useState();
    const [pr, setPr] = useState();
    const [bp, setBp] = useState();
    const [rr, setRr] = useState();
    const [spo2,setSpo2] = useState();
    const [o2_niv_mv, setO2_niv_mv] = useState();
    const [o2_niv_mv_level, setO2_niv_mv_level] = useState();
    const [freshComplaints, setFreshComplaints] = useState();
    const [dutyDoctors,setDutyDoctors] = useState();


    const handleSubmit = () => {
        const duty_doctor = dutyDoctors.split(',')
        const complaints = freshComplaints.split(',')
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