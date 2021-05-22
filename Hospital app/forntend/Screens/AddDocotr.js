import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet,TextInput, Text, View, StatusBar, ScrollView, KeyboardAvoidingView } from 'react-native';

const AddDocotr = () => {

    const [name,setName] = useState()
    const [mobile_no,setMobile_no] = useState();
    const [gender,setGender] = useState();
    const [designation,setDesignation] = useState()
    const [qualification,setQualification] = useState()
    const [password,setPassword] = useState()

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

    const submitHandler = () => {
        axios.post('http://192.168.0.106:5000/user/add',{
            name,
            mobile_no,
            gender,
            designation,
            qualification,
            password,
            role: 'doctor'
        }).then((res) => console.log(res.data))
        .catch((err) => console.log('user already exist'))
    }

    return (
        <View style={styles.container}>
                    <StatusBar backgroundColor="#0481eb" />
                    <ScrollView>
                    <KeyboardAvoidingView>
                    <Text style={styles.title}>Enter new doctor information :</Text>
                    <TextInput 
                        placeholder='Name'
                        mode='outlined'
                        value={name}
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setName(text)}
                    />
                    <TextInput 
                        placeholder='Mobile no.'
                        mode='outlined'
                        value={mobile_no}
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setMobile_no(text)}
                    />
                    <TextInput 
                        placeholder='Gender'
                        mode='outlined'
                        value={gender}
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setGender(text)}
                    />
                    <TextInput 
                        placeholder='Designation'
                        mode='outlined'
                        value={designation}
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setDesignation(text)}
                    />
                    <TextInput 
                        placeholder='Qualification'
                        mode='outlined'
                        value={qualification}
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setQualification(text)}
                    />
                    <TextInput 
                        placeholder='Password'
                        mode='outlined'
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

export default AddDocotr;