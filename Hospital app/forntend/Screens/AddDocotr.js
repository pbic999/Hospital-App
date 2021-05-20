import React, { useState } from 'react';
import { StyleSheet,TextInput, Text, View, StatusBar, ScrollView, KeyboardAvoidingView } from 'react-native';

const AddDocotr = () => {

    const [userName, setUserName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');

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

    return (
        <View style={styles.container}>
                    <StatusBar backgroundColor="#0481eb" />
                    <ScrollView>
                    <KeyboardAvoidingView>
                    <Text style={styles.title}>Enter new doctor information :</Text>
                    <TextInput 
                        placeholder='ID'
                        mode='outlined'
                        value={userName}
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setUserName(text)}
                    />
                    <TextInput 
                        placeholder='Doctor name'
                        mode='outlined'
                        value={mobileNumber}
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setMobileNumber(text)}
                    />
                    <TextInput 
                        placeholder='Gender'
                        mode='outlined'
                        value={password}
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setPassword(text)}
                    />
                    <TextInput 
                        placeholder='Designation'
                        mode='outlined'
                        value={password}
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setPassword(text)}
                    />
                    <TextInput 
                        placeholder='Qualification'
                        mode='outlined'
                        value={password}
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setPassword(text)}
                    />
                    <TextInput 
                        placeholder='Mobile no.'
                        mode='outlined'
                        value={password}
                        theme={{colors:{primary: "#0481eb"}}}
                        style={styles.textInput}
                        onChangeText={(text)=>setPassword(text)}
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
                <Text style={styles.submitButton}> Submit </Text>
                    </KeyboardAvoidingView>
                    </ScrollView>
        </View>
    );
}

export default AddDocotr;