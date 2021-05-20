import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const UserEntryForm = () => {

    const [userName, setUserName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');

    const styles = StyleSheet.create({
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
        submitButton: {
            marginLeft: 20,
            marginRight: 20,
            marginTop: 25,
        }
    });

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

    return (
        <>
           <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior="padding">
                    <StatusBar backgroundColor="blue" />
                    
                    <Text style={styles.title}>Enter new User information :</Text>
                    <TextInput 
                        label='User Name'
                        mode='outlined'
                        value={userName}
                        theme={{colors:{primary: "blue"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setUserName(text)}
                    />
                    <TextInput 
                        label='Mobile Number'
                        mode='outlined'
                        value={mobileNumber}
                        theme={{colors:{primary: "blue"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setMobileNumber(text)}
                    />
                    <TextInput 
                        label='Password'
                        mode='outlined'
                        value={password}
                        theme={{colors:{primary: "blue"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setPassword(text)}
                    />
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
}

export default UserEntryForm;