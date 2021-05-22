import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View,
     StatusBar, ScrollView, KeyboardAvoidingView } from 'react-native';

const AddNurse = () => {

    const [name,setName] = useState()
    const [mobile_no,setMobile_no] = useState();
    const [gender,setGender] = useState();
    const [password,setPassword] = useState()

    const submitHandler = () => {
        axios.post('http://192.168.0.106:5000/user/add',{
            name,
            mobile_no,
            gender,
            password,
            role: 'nurse'
        }).then((res) => console.log(res.data))
        .catch((err) => console.log('user already exist'))
    }

    return (
        <View style={styles.container}>
                    <StatusBar backgroundColor="#0481eb" />
                    <ScrollView style={{height:'100%'}}>
                    <KeyboardAvoidingView style={{height:'100%'}}>
                    <Text style={styles.title}>Enter new nurse information:</Text>
                    <TextInput 
                        placeholder='Name'
                        value={name}
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setName(text)}
                    />
                    <TextInput 
                        placeholder='Mobile no.'
                        value={mobile_no}
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setMobile_no(text)}
                    />
                    <TextInput 
                        placeholder='Gender'
                        value={gender}
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setGender(text)}
                    />
                     <TextInput 
                        placeholder='Password'
                        secureTextEntry={true}
                        value={password}
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setPassword(text)}
                    />
                <Text style={styles.submitButton} onPress={submitHandler}> Submit </Text>
                </KeyboardAvoidingView>
                </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
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
    submitButton: {
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#0481eb',
        borderRadius: 3,
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        marginTop: 20
    },
    container: {
        width:"100%",
        height:"100%",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20
      }
});

export default AddNurse;