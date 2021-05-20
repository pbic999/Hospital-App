import React, { useState } from 'react';
import { StyleSheet,TextInput, Text, View, StatusBar, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button,  } from 'react-native-paper';

const PatientEntryForm = () => {

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
            marginTop: 20
        }
    });

    const [patientName, setPatientName] = useState('');
    const [doctorName, setDoctorName] = useState('');

    var handleSubmit = async () => {

        console.log("in handle submit");
        console.log(patientName, doctorName);

        await fetch("http://192.168.29.100:5000/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'email': patientName,
                'password': doctorName
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

    return(

        <>
            <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior="padding">
                    <StatusBar backgroundColor="#0481eb" />
                    
                    <Text style={styles.title}>Enter new patient information :</Text>
                    <TextInput 
                        placeholder='Patient Name'
                        value={patientName}
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setPatientName(text)}
                    />
                    <TextInput 
                        placeholder='Duty Doctor Name'
                        value={doctorName}
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setDoctorName(text)}
                    />
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                        placeholder='Name of Ward'
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.smallTextInput} />
                        <TextInput 
                        placeholder='UHID'
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.smallTextInput} />
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                        placeholder='Hospital No'
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.smallTextInput} />
                        <TextInput 
                        placeholder='DOA'
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.smallTextInput} />
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                        placeholder='Age'
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.smallTextInput} />
                        <TextInput 
                        placeholder='Sex'
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.smallTextInput} />
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                        placeholder='PR'
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.smallTextInput} />
                        <TextInput 
                        placeholder='BP'
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.smallTextInput} />
                        <TextInput 
                        placeholder='RR'
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.smallTextInput} />
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                        placeholder='SPO2'
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.smallTextInput} />
                        <TextInput 
                        placeholder='o2 NIV MV'
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.smallTextInput} />
                        <TextInput 
                        placeholder='Complaints'
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.smallTextInput} />
                    </View>
                    <Text style={styles.submitButton}> Submit </Text>
                </KeyboardAvoidingView>
            </ScrollView>
        </>
    );
};

export default PatientEntryForm;