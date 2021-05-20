import { useState } from "react"
import { StyleSheet, Image, TextInput, Text, View, Keyboard } from "react-native";
import React from 'react'

const AddHospital = () => {
    const [adminNo,setAdminNo] = useState();
    const [adminPassword,setAdminPassword] = useState();
    const [hospitalId,setHospitalId] = useState()
    const [loading,setLoading] = useState(false);
    const [user,setUser] = useState();

    const submitHandler = (e) => {
        console.log(email);
        console.log(password);
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
            <TextInput onChangeText={val => setHospitalId(val)} 
                style={styles.input} placeholder='Hospital ID' />
                <TextInput onChangeText={val => setEmail(val)} 
                style={styles.input} placeholder='Admin Mobile no.' />
                <TextInput onChangeText={val => setPassword(val)}
                secureTextEntry = {true}
                style={styles.input} placeholder='Admin password' />
                <Text onPress={submitHandler} style={styles.login}> Add Hospital </Text>
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

export default AddHospital