import { useState } from "react"
import { StyleSheet, Image, TextInput, Text, View, Keyboard } from "react-native";
import React from 'react'

const SignIn = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [loading,setLoading] = useState(false);
    const [user,setUser] = useState();

    const submitHandler = (e) => {
        console.log(email);
        console.log(password);
    }

    return (
            <View style={styles.form}>
                <TextInput onChangeText={val => setEmail(val)} 
                style={styles.input} placeholder='Email' />
                <TextInput onChangeText={val => setPassword(val)}
                style={styles.input} placeholder='Password' />
                <Text onPress={submitHandler} style={styles.login}> Login </Text>
                <Text style={styles.forget_password}> Forget password? </Text>
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
        height: 30,
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
    }
  });

export default SignIn