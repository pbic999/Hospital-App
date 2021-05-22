import { useState } from "react"
import { StyleSheet, Image, TextInput, Text, View, Keyboard } from "react-native";
import React from 'react'
import axios from "axios";

const SignIn = () => {
    const [mobile_no,setMobile_no] = useState();
    const [password,setPassword] = useState();
    const [loading,setLoading] = useState(false);
    const [user,setUser] = useState();

    const submitHandler = (e) => {
        axios.post('http://192.168.0.106:5000/user/signin',{mobile_no,password})
        .then((res)=> console.log(res.data))
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput onChangeText={val => setMobile_no(val)} 
                style={styles.input} placeholder='Mobile no.' />
                <TextInput onChangeText={val => setPassword(val)}
                secureTextEntry = {true}
                style={styles.input} placeholder='Password' />
                <Text onPress={submitHandler} style={styles.login}> Login </Text>
                <Text style={styles.forget_password}> Forget password? </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        width: '100%',
        padding: 20,
        alignContent: 'center'
    },
    input: {
        marginBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#a2a2a2',
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

export default SignIn