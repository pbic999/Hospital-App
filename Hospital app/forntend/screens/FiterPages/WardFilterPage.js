import React, { Component, useState } from 'react';
import { Picker } from 'react-native-picker-dropdown';  

const WardFilterPage = () => {

    const [ward, setWard] = useState('');

    const handleWardFilter = (wardName) => {
      setWard(wardName);
      console.log("filter add to : " + wardName);
    }
 
    return (
      <>
          <Picker
            selectedValue={ward}
            style={{ height: 50, width: 150, backgroundColor: '#bbbbbb', }}
            onValueChange={(itemValue, itemIndex) => handleWardFilter(itemValue)}>
              <Picker.Item label="All Wards" value="Ward" />
              <Picker.Item label="WardName" value="wardID" />
              <Picker.Item label="WardName" value="wardID" />
              <Picker.Item label="WardName" value="wardID" />
              <Picker.Item label="WardName" value="wardID" />
              <Picker.Item label="WardName" value="wardID" />
              <Picker.Item label="WardName" value="wardID" />
          </Picker>
      </>
    );

}

export default WardFilterPage;