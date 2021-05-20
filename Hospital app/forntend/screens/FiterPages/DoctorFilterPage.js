import React, { Component, useEffect, useState } from 'react';
import { Picker } from 'react-native-picker-dropdown';  

const DoctorFilterPage = () => {

    const [doctor, setDoctor] = useState('');
    const [doctorsList,setDoctorsList] = useState([])
    const [selectedIndex,setSelectedIndex] = useState(0)

    useEffect(()=>{
      setDoctorsList(['Amit','Amit','Amit'])
    },[])

    const handleDoctorFilter = (doctorName) => {
      setDoctor([doctorName]);
      wardName? console.log("filter add to : " + wardName) : console.log('You did not selected any value');
    }
 
    return (
      <>
          <Picker
            selectedValue={doctor}
            style={{ height: 50, width: 150, backgroundColor: "#bbbbbb", borderWidth: 1, borderRadius: 5 }}
            onValueChange={(itemValue, itemIndex) => handleDoctorFilter(itemValue)}>
              <Picker.Item label="Doctor" value={null} />
              {doctorsList.map((x, index) => {
                return <Picker.Item key={index} label={x} value={x} />})}
          </Picker>
      </>
    );

}

export default DoctorFilterPage;