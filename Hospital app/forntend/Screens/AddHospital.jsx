import { useState } from "react"
import { StyleSheet, Image, TextInput, Text, View, Keyboard, ScrollView } from "react-native";
import React from 'react'
import axios from "axios";

const AddHospital = () => {
    const [hospital_name,setHospital_name] = useState();
    const [branch,setBranch] = useState()
    const [name,setName] = useState()
    const [mobile_no,setMobile_no] = useState();
    const [gender,setGender] = useState();
    const [designation,setDesignation] = useState()
    const [qualification,setQualification] = useState()
    const [password,setPassword] = useState()
    const [loading,setLoading] = useState(false);

    const submitHandler = (e) => {
        axios.post('http://192.168.0.106:5000/user/add/admin',{
                hospital_name, 
                branch,
                name,
                mobile_no,
                gender,
                designation,
                qualification,
                password
            }).then((res)=> console.log(res.data)).catch((err)=> console.log(err))
        console.log('request sended to server');
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
            <ScrollView>
            <Text style={styles.title}>Hospital details:</Text>
                <TextInput onChangeText={val => setHospital_name(val)}
                style={styles.input} placeholder='Hospital name' />
                <TextInput onChangeText={val => setBranch(val)}
                style={styles.input} placeholder='Hospital branch' />
            <Text style={styles.title}>Admin details:</Text>
            <TextInput onChangeText={val => setName(val)}
                style={styles.input} placeholder='Name' />
                <TextInput onChangeText={val => setMobile_no(val)}
                style={styles.input} placeholder='Mobile no.' />
                <TextInput onChangeText={val => setGender(val)}
                style={styles.input} placeholder='Gender' />
                <TextInput onChangeText={val => setDesignation(val)}
                style={styles.input} placeholder='Designation' />
                <TextInput onChangeText={val => setQualification(val)}
                style={styles.input} placeholder='Qualification' />
                <TextInput onChangeText={val => setPassword(val)}
                secureTextEntry = {true}
                style={styles.input} placeholder='Password' />
                <Text onPress={submitHandler} style={styles.login}> Add Hospital </Text>
                </ScrollView>
            </View>
        </View>
    )
}
 
const styles = StyleSheet.create({
    form: {
        width: '100%',
        padding: 20,
    },
    title: {
        fontSize: 23,
        marginTop: 10,
        fontWeight: 'bold',
    },
    input: {
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#a2a2a2',
        fontSize: 20,
        lineHeight: 30,
        padding: 10
    },
    forget_password: {
        fontSize: 15,
        marginTop: 20,
        alignSelf: "flex-end",
        fontWeight: 'bold',
        color: '#0481eb'
    },
    login: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#0481eb',
        borderRadius: 3,
        textAlign: 'center',
        padding: 10,
        fontSize: 20
    },
    image: {
        alignSelf: 'center',
        width:100,
        height: 150
    },
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    }
  });

export default AddHospital