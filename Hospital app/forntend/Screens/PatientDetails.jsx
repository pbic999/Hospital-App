import React, { useState,useEffect } from 'react';
import { StyleSheet,TextInput, Text, View, StatusBar, ScrollView, KeyboardAvoidingView } from 'react-native';

const PatientDetails = () => {

    const [patientDetails,setPatientDetails] = useState({})
    const [ward_name, setWard_name] = useState('');
    const [doa, setDoa] = useState('');
    const [pr, setPr] = useState('');
    const [bp, setBp] = useState('');
    const [rr, setRr] = useState('');
    const [spo2,setSpo2] = useState('');
    const [o2_niv_mv, setO2_niv_mv] = useState('');
    const [o2_niv_mv_level, setO2_niv_mv_level] = useState('');
    const [freshComplaints, setFreshComplaints] = useState('');
    const [dutyDoctors,setDutyDoctors] = useState('');
    const [age,setAge] = useState('');
    const [bed,setBed] = useState('');
    const [editable,setEditable] = useState(false);

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


    useEffect(()=> {
        setPatientDetails({
            s_no: '1',
            name: "Anuj",
            ward: "CT POW",
            UHID: "2575385735",
            hospital_no: "686937",
            doa:"16/4/2021",
            age: '21',
            sex: 'male',
            pr: '99',
            bp: '120/80',
            rr: '18',
            bed: 'ICU',
            spo2: '90',
            o2_niv_mv: 'NRBM',
            fresh_complaint: 'DM',
            duty_doctors: 'Doctor'
        })
    },[]);

    const buttonHandler = () => {
        if(editable) {
            if (!checkTextInput()) return;
            console.log('data updated');
        }
        setEditable(!editable)
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 20,
            paddingBottom: 20
        },
        title: {
            fontSize: 23,
            fontWeight: 'bold',
        },
        textInput: {
            borderWidth: 1,
            borderColor: '#a2a2a2',
            fontSize: 20,
            borderRadius: 5,
            lineHeight: 30,
            padding: 10
        },
        smallFieldsContainer: {
            flexDirection: 'row',
        }, 
        smallTextInput: {
            borderWidth: 1,
            borderColor: '#a2a2a2',
            borderRadius: 5,
            fontSize: 20,
            lineHeight: 30,
            padding: 10
        },
        submitButton: {
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#0481eb',
            borderRadius: 3,
            textAlign: 'center',
            padding: 10,
            fontSize: 20,
            marginTop: 20,
            width:'45%'
        }
    });

    return(

        <>
            <View style={styles.container}>
            <ScrollView>
                    <StatusBar backgroundColor="#0481eb" />
                    <Text style={styles.title}>Patient Details :</Text>
                    <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 12}}> Name: </Text>
                    <TextInput 
                        value={patientDetails.name}
                        style={styles.textInput}
                        editable = {false}
                    />
                    </View>
                    <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 12}}> Duty doctors: </Text>
                    <TextInput 
                        value={editable? dutyDoctors : patientDetails.duty_doctors}
                        style={styles.textInput}
                        editable = {editable}
                        onChangeText={(text) => setDutyDoctors(text)}
                    />
                    </View>
                    <View style={styles.smallFieldsContainer}>
                        <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> Ward: </Text>
                        <TextInput 
                            value={editable? ward_name : patientDetails.ward}
                            style={styles.smallTextInput}
                            editable = {editable}
                            onChangeText={(text) => setWard_name(text)}
                        />
                        </View>
                        <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> UHID: </Text>
                        <TextInput 
                            style={styles.smallTextInput} 
                            value={patientDetails.UHID}
                            editable = {false}
                        />
                        </View>
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <View style={{marginTop: 10,flex: 1}}>
                    <Text style={{fontSize: 12}}> Bed type: </Text>
                        <TextInput 
                            value={editable ? bed : patientDetails.bed}
                            style={styles.smallTextInput}
                            editable = {editable}
                            onChangeText={(text) => setBed(text)}
                        />
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                    <Text style={{fontSize: 12}}> DOA: </Text>
                        <TextInput 
                            value={editable? doa : patientDetails.doa}
                            style={styles.smallTextInput}
                            editable = {editable}
                            onChangeText={(text) => setDoa(text)}
                        />
                    </View>
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> PR: </Text>
                        <TextInput 
                            value={editable? pr : patientDetails.pr}
                            style={styles.smallTextInput}
                            editable = {editable}
                            onChangeText={(text) => setPr(text)}
                        />
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> BP: </Text>
                        <TextInput
                            value={editable? bp : patientDetails.bp}
                            style={styles.smallTextInput}
                            editable = {editable}
                            onChangeText={(text) => setBp(text)}
                        />
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> RR: </Text>
                        <TextInput 
                            value={editable? rr :patientDetails.rr}
                            style={styles.smallTextInput} 
                            editable = {editable}
                            onChangeText={(text) => setRr(text)}
                        />
                    </View>
                    </View>

                    <View style={styles.smallFieldsContainer}>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> Age: </Text>
                        <TextInput 
                            value={editable ? age : patientDetails.age}
                            style={styles.smallTextInput} 
                            editable = {editable}
                            onChangeText={(text) => setAge(text)} 
                        />
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> Hospital no.: </Text>
                        <TextInput 
                            value={patientDetails.hospital_no}
                            style={styles.smallTextInput} 
                            editable = {false}
                        />
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> Sex : </Text>
                        <TextInput 
                            value={patientDetails.sex}
                            style={styles.smallTextInput}
                            editable = {false}
                        />
                    </View>
                    </View>

                    <View style={styles.smallFieldsContainer}>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> SPO2: </Text>
                        <TextInput 
                            value={editable? spo2 : patientDetails.spo2}
                            style={styles.smallTextInput} 
                            editable = {editable}
                            onChangeText={(text) => setSpo2(text)}
                        />
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> O2 NIV MIV: </Text>
                        <TextInput 
                            value={editable? o2_niv_mv : patientDetails.o2_niv_mv}
                            style={styles.smallTextInput}
                            editable = {editable}
                            onChangeText={(text) => setO2_niv_mv(text)}    
                        />
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> O2/NRBM in L : </Text>
                        <TextInput 
                            value={editable? o2_niv_mv_level : patientDetails.o2_niv_mv_level}
                            style={styles.smallTextInput}
                            editable = {editable}
                            onChangeText={(text) => setO2_niv_mv_level(text)}
                        />
                    </View>
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12, color: 'black'}}> Complaints: </Text>
                        <TextInput 
                            value={editable? freshComplaints :patientDetails.fresh_complaint}
                            style={styles.smallTextInput}
                            editable = {editable}
                            onChangeText={(text) => setFreshComplaints(text)}
                        />
                    </View>
                    <View style={{flexDirection:'row',justifyContent: 'space-around'}}>
                    <Text style={styles.submitButton} onPress={buttonHandler}>
                    {editable ? 'Update' : "Edit"} </Text>
                    <Text onPress={e=> {if(editable) setEditable(false)}} style={{...styles.submitButton,
                    backgroundColor: editable?"#DC143C":"#ff9999"}} onClick={buttonHandler}>
                    Cancel </Text>
                    </View>
            </ScrollView>
            </View>
        </>
    );
}

export default PatientDetails