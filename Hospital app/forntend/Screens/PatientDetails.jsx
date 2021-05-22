import React, { useState,useEffect } from 'react';
import { StyleSheet,TextInput, Text, View, StatusBar, ScrollView, KeyboardAvoidingView } from 'react-native';

const PatientDetails = () => {
    const [patientDetails,setPatientDetails] = useState({})
    const [ward_name, setWard_name] = useState();
    const [doa, setDoa] = useState();
    const [pr, setPr] = useState();
    const [bp, setBp] = useState();
    const [rr, setRr] = useState();
    const [spo2,setSpo2] = useState();
    const [o2_niv_mv, setO2_niv_mv] = useState();
    const [o2_niv_mv_level, setO2_niv_mv_level] = useState();
    const [freshComplaints, setFreshComplaints] = useState();
    const [dutyDoctors,setDutyDoctors] = useState();
    const [age,setAge] = useState()
    const [bed,setBed] = useState()
    const [editable,setEditable] = useState(false)
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
            spo2: '90',
            o2_niv_mv: 'NRBM',
            fresh_complaint: 'DM',
            duty_doctors: 'Doctor'
        })
    },[])

    const buttonHandler = () => {
        if(editable) {
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
                    />
                    </View>
                    <View style={styles.smallFieldsContainer}>
                        <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> Ward: </Text>
                        <TextInput 
                            value={editable? ward_name : patientDetails.ward}
                            style={styles.smallTextInput} editable = {editable}/>
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
                            value={patientDetails.hospital_no}
                            style={styles.smallTextInput}
                             editable = {editable}/>
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                    <Text style={{fontSize: 12}}> DOA: </Text>
                        <TextInput 
                            value={editable? doa : patientDetails.doa}
                            style={styles.smallTextInput}
                             editable = {editable}/>
                    </View>
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> PR: </Text>
                        <TextInput 
                            value={editable? pr : patientDetails.pr}
                            style={styles.smallTextInput} editable = {editable}
                        />
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> BP: </Text>
                        <TextInput
                            value={editable? bp : patientDetails.bp}
                            style={styles.smallTextInput}
                            editable = {editable}/>
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> RR: </Text>
                        <TextInput 
                            value={editable? rr :patientDetails.rr}
                            style={styles.smallTextInput} 
                            editable = {editable}/>
                    </View>
                    </View>

                    <View style={styles.smallFieldsContainer}>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> Age: </Text>
                        <TextInput 
                            value={editable ? age : patientDetails.age}
                            style={styles.smallTextInput} 
                            editable = {editable}    
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
                            style={styles.smallTextInput} editable = {false}
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
                        />
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> O2 NIV MIV: </Text>
                        <TextInput 
                            value={editable? o2_niv_mv : patientDetails.o2_niv_mv}
                            style={styles.smallTextInput} editable = {editable}    
                        />
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> O2/NRBM in L : </Text>
                        <TextInput 
                            value={editable? o2_niv_mv_level : patientDetails.o2_niv_mv_level}
                            style={styles.smallTextInput} editable = {editable}
                        />
                    </View>
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12, color: 'black'}}> Complaints: </Text>
                        <TextInput 
                            value={editable? freshComplaints :patientDetails.fresh_complaint}
                            style={styles.smallTextInput} editable = {editable}
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