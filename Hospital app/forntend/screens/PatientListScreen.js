import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

const PatientListScreen = () => {

    const [patientList,setPatientList] = useState([])

    useEffect(() => {
        setPatientList(['patient1','patient2','patient3'])
    },[])

    const viewPatient = (x) => {
        console.log(x);
    }

    return(
        <ScrollView>
            {patientList.map((x,index) => {
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