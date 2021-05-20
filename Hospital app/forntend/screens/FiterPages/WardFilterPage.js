import React, { Component, useEffect, useState } from 'react';
import { Picker } from 'react-native-picker-dropdown';  

const WardFilterPage = () => {

    const [ward, setWard] = useState('');
    const [wardList, setWardList] = useState([])

    useEffect(() => {
      setWardList(['CT POW','CT POW','CT POW'])
    },[])

    const handleWardFilter = (wardName) => {
      setWard(wardName);
      wardName? console.log("filter add to : " + wardName) : console.log('You did not selected any value');
    }
 
    return (
      <>
          <Picker
            selectedValue={ward}
            style={{ height: 50, width: 150, backgroundColor: "#bbbbbb", borderWidth: 1, borderRadius: 5 }}
            onValueChange={(itemValue, itemIndex) => handleWardFilter(itemValue)}>
              <Picker.Item label="Ward" value={null} />
              {wardList.map((x, index) => {
                return <Picker.Item key={index} label={x} value={x} />
              })}
          </Picker>
      </>
    );

}

export default WardFilterPage;