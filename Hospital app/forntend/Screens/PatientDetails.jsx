import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, KeyboardAvoidingView } from 'react-native';
import {TextInput} from 'react-native-material-textfield'

const PatientDetails = () => {
    const [patientDetails,setPatientDetails] = useState({})
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
            paddingTop: 20
        },
        title: {
            fontSize: 23,
            fontWeight: 'bold',
        },
        textInput: {
            marginTop: 10,
            borderWidth: 1,
            borderColor: '#a2a2a2',
            fontSize: 20,
            borderRadius: 5,
            lineHeight: 30,
            padding: 10
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
            <ScrollView style={styles.container}>
                    <StatusBar backgroundColor="#0481eb" />
                    <Text style={styles.title}>Patient Details :</Text>
                    <TextInput 
                        value={patientDetails.name}
                        label='Name'
                        editable = {false}
                    />
                    <TextInput 
                        label='Duty Doctor Name'
                    />
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                        label='Name of Ward'/>
                        <TextInput 
                        label='UHID'
                    />
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                        label='Hospital No'/>
                        <TextInput 
                        label='DOA'/>
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                        label='Age'/>
                        <TextInput 
                        label='Sex'/>
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                        label='PR'/>
                        <TextInput 
                        label='BP'/>
                        <TextInput 
                        label='RR'/>
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                        label='SPO2'/>
                        <TextInput 
                        label='o2 NIV MV'/>
                        <TextInput 
                        label='Complaints'/>
                    </View>
                    <View style={{flexDirection:'row',justifyContent: 'space-around'}}>
                    <Text style={styles.submitButton} onPress={buttonHandler}>
                    {editable ? 'Update' : "Edit"} </Text>
                    <Text onPress={e=> {if(editable) setEditable(false)}} style={{...styles.submitButton,
                    backgroundColor: editable?"#DC143C":"#ff9999"}} onClick={buttonHandler}>
                    Cancel </Text>
                    </View>
            </ScrollView>
        </>
    );
}

export default PatientDetails