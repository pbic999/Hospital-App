import React, { useState } from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import { List } from 'react-native-paper';

const PatientListScreen = (props) => {

    const [loading] = props.loadingState;

    const viewPatient = (x) => {
        console.log(x);
    }

    return(
        <>
        {
            loading ? 
            <View style={{marginTop: 40}}>
                <ActivityIndicator size="large" color="#0481eb" />
            </View>
             :
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
        }
        </>
    );


}

export default PatientListScreen;