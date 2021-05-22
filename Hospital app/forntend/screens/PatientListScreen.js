import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

const PatientListScreen = (props) => {



    const viewPatient = (x) => {
        console.log(x);
    }

    return(
        <ScrollView>
            {props.patientList.map((x,index) => {
                return <List.Item
                title={x}
                key={index}
                description="20001"
                onPress={() => viewPatient(x)}
            />
            })}
        </ScrollView>
    );


}

export default PatientListScreen;