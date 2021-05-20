import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const PatientEntryForm = () => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
        
        },
        title: {
            fontSize: 25,
            marginLeft: 18,
            marginTop: 20,
        },
        textInput: {
            marginLeft: 20,
            marginRight: 20,
            marginTop: 15,
        },
        smallFieldsContainer: {
            flexDirection: 'row',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 15,
        }, 
        smallTextInput: {
            flex: 1,
        },
        submitButton: {
            marginLeft: 20,
            marginRight: 20,
            marginTop: 25,
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
                    <StatusBar backgroundColor="blue" />
                    
                    <Text style={styles.title}>Enter new patient information :</Text>
                    <TextInput 
                        label='Patient Name'
                        mode='outlined'
                        value={patientName}
                        theme={{colors:{primary: "blue"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setPatientName(text)}
                    />
                    <TextInput 
                        label='Duty Doctor Name'
                        mode='outlined'
                        value={doctorName}
                        theme={{colors:{primary: "blue"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setDoctorName(text)}
                    />
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                        label='Name of Ward'
                        mode='outlined'
                        theme={{colors:{primary: "blue"}}}
                        style={styles.smallTextInput} />
                        <TextInput 
                        label='UHID'
                        mode='outlined'
                        theme={{colors:{primary: "blue"}}}
                        style={styles.smallTextInput} />
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                        label='Hospital No'
                        mode='outlined'
                        theme={{colors:{primary: "blue"}}}
                        style={styles.smallTextInput} />
                        <TextInput 
                        label='DOA'
                        mode='outlined'
                        theme={{colors:{primary: "blue"}}}
                        style={styles.smallTextInput} />
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                        label='Age'
                        mode='outlined'
                        theme={{colors:{primary: "blue"}}}
                        style={styles.smallTextInput} />
                        <TextInput 
                        label='Sex'
                        mode='outlined'
                        theme={{colors:{primary: "blue"}}}
                        style={styles.smallTextInput} />
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                        label='Age'
                        mode='outlined'
                        theme={{colors:{primary: "blue"}}}
                        style={styles.smallTextInput} />
                        <TextInput 
                        label='Sex'
                        mode='outlined'
                        theme={{colors:{primary: "blue"}}}
                        style={styles.smallTextInput} />
                        <TextInput 
                        label='Sex'
                        mode='outlined'
                        theme={{colors:{primary: "blue"}}}
                        style={styles.smallTextInput} />
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <TextInput 
                        label='Age'
                        mode='outlined'
                        theme={{colors:{primary: "blue"}}}
                        style={styles.smallTextInput} />
                        <TextInput 
                        label='Sex'
                        mode='outlined'
                        theme={{colors:{primary: "blue"}}}
                        style={styles.smallTextInput} />
                        <TextInput 
                        label='Sex'
                        mode='outlined'
                        theme={{colors:{primary: "blue"}}}
                        style={styles.smallTextInput} />
                    </View>
                    <Button 
                    style={styles.submitButton}
                    theme={{'colors': {'primary': 'blue'}}}
                    mode="contained"
                    onPress={() => handleSubmit()}>
                        submit
                    </Button>
                </KeyboardAvoidingView>
            </ScrollView>
        </>
    );
};

export default PatientEntryForm;