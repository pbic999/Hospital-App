import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

const PatientListScreen = () => {

    const viewPatient = () => {
        console.log("patien1");
    }

    return(
        <ScrollView>
            <List.Item
                title="Surya Siriki"
                description="20001"
                onPress={() => viewPatient()}
            />
            <List.Item
                title="Surya Siriki"
                description="20001"
                onPress={() => viewPatient()}
            />
            <List.Item
                title="Surya Siriki"
                description="20001"
            />
            <List.Item
                title="Surya Siriki"
                description="20001"
            />
            <List.Item
                title="Surya Siriki"
                description="20001"
            />
            <List.Item
                title="Surya Siriki"
                description="20001"
            />
            <List.Item
                title="Surya Siriki"
                description="20001"
            />
            <List.Item
                title="Surya Siriki"
                description="20001"
            />
            <List.Item
                title="Surya Siriki"
                description="20001"
            />
            <List.Item
                title="Surya Siriki"
                description="20001"
            />
            <List.Item
                title="Surya Siriki"
                description="20001"
            />
        </ScrollView>
    );


}

export default PatientListScreen;