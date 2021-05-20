import React, { Component, useState } from 'react';
import { Picker } from 'react-native-picker-dropdown';  

const DoctorFilterPage = () => {

    const [doctor, setDoctor] = useState('');

    const handleDoctorFilter = (doctorName) => {
      setDoctor(doctorName);
      console.log("filter add to : " + doctorName);
    }
 
    return (
      <>
          <Picker
            selectedValue={doctor}
            style={{ height: 50, width: 150, backgroundColor: '#bbbbbb', }}
            onValueChange={(itemValue, itemIndex) => handleDoctorFilter(itemValue)}>
              <Picker.Item label="All Doctors" value="Doctor" />
              <Picker.Item label="DoctorName" value="DoctorID" />
              <Picker.Item label="DoctorName" value="DoctorID" />
              <Picker.Item label="DoctorName" value="DoctorID" />
              <Picker.Item label="DoctorName" value="DoctorID" />
              <Picker.Item label="DoctorName" value="DoctorID" />
              <Picker.Item label="DoctorName" value="DoctorID" />
          </Picker>
      </>
    );

}

export default DoctorFilterPage;