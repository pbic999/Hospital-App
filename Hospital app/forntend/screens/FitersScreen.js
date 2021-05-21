import React, { Component, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, Modal } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Picker } from 'react-native-picker-dropdown';
import DatePicker from 'react-native-datepicker';

const FiltersScreen = (props) => {

    const [showModal, setShowModal] = props.modalState;

    //Item array for the dropdown
    const items = [
        //name key is must.It is to show the text in front
        { id: 1, name: 'less' },
        { id: 2, name: 'codepen' },
        { id: 3, name: 'envelope' },
        { id: 4, name: 'etsy' },
        { id: 5, name: 'facebook' },
        { id: 6, name: 'foursquare' },
        { id: 7, name: 'github-alt' },
        { id: 8, name: 'github' },
        { id: 9, name: 'gitlab' },
        { id: 10, name: 'instagram' },
    ];

    const [spo2, setSpo2] = useState('');

    const spo2List = ['<70%', '70-79 %', '80-89 %', '90-99 %'];

    const styles = StyleSheet.create({
        modal: {
            flex: 1,
            backgroundColor: '#fff',
            padding: 20,
        },
        containerStyle: {
            padding: 5
        },
        textInputStyle: {
            //inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
        },
        itemStyle: {
            //single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
        },
        itemTextStyle: {
            //text style of a single dropdown item
            color: '#222',
        },
        itemsContainerStyle: {
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            maxHeight: '60%',
        },
        headingText: {
            padding: 2,
        },
        subHeadingText: {
            padding: 1,
        },
        titleText: {
            padding: 8,
            fontSize: 16,
            textAlign: 'center',
            fontWeight: 'bold',
        },
        // date-picker styles
        container: {
            flex: 1,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
        title: {
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            padding: 20,
        },
        datePickerStyle: {
            width: 150,
            marginTop: 10,
        },
        
    });

    const handleSpo2Filter = (spo2) => {
        setSpo2(spo2);
        console.log("spo2 filter set to : " + spo2);
    }

    // DOA
    const [date, setDate] = useState('09-10-2020');

    return(

        <Modal
            animationType={'slide'}
            transparent={false}
            visible={showModal}
            onRequestClose={() => {
                console.log('Modal has been closed.');
        }}>
            {/*All views of Modal*/}
            {/*Animation can be slide, slide, none*/}
            <View style={styles.modal}>
                <Text style={styles.titleText}>
                    Filters :
                </Text>
                <Text style={styles.headingText}>
                    Duty Doctor Name
                </Text>
                <SearchableDropdown
                    onTextChange={(text) => console.log(text)}
                    //On text change listner on the searchable input
                    onItemSelect={(item) => console.log(JSON.stringify(item))}
                    //onItemSelect called after the selection from the dropdown
                    containerStyle={styles.containerStyle}
                    //suggestion container style
                    textInputStyle={styles.textInputStyle}
                    itemStyle={styles.itemStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemsContainerStyle={styles.itemsContainerStyle}
                    items={items}
                    //mapping of item array
                    defaultIndex={2}
                    //default selected item index
                    placeholder="Duty Doctor Name"
                    //place holder for the search input
                    resetValue={false}
                    //reset textInput Value with true and false state
                    underlineColorAndroid="transparent"
                    //To remove the underline from the android input
                />
                <Text style={styles.headingText}>
                    Ward Name
                </Text>
                <SearchableDropdown
                    onTextChange={(text) => console.log(text)}
                    //On text change listner on the searchable input
                    onItemSelect={(item) => alert(JSON.stringify(item))}
                    //onItemSelect called after the selection from the dropdown
                    containerStyle={styles.containerStyle}
                    //suggestion container style
                    textInputStyle={styles.textInputStyle}
                    itemStyle={styles.itemStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemsContainerStyle={styles.itemsContainerStyle}
                    items={items}
                    //mapping of item array
                    defaultIndex={2}
                    //default selected item index
                    placeholder="Ward Name"
                    //place holder for the search input
                    resetValue={false}
                    //reset textInput Value with true and false state
                    underlineColorAndroid="transparent"
                    //To remove the underline from the android input
                />
                <View style={{'flexDirection': 'row', 'justifyContent':'space-around'}}>
                    <View>
                        <Text style={styles.subHeadingText}>
                            BP (systolic)
                        </Text>
                        <Picker
                            selectedValue={spo2}
                            style={{ height: 50, width: 150, backgroundColor: "#0481eb", borderWidth: 1, borderRadius: 5 }}
                            onValueChange={(itemValue, itemIndex) => handleSpo2Filter(itemValue)}>
                            <Picker.Item label="Doctor" value={null} />
                            {spo2List.map((x, index) => {
                            return <Picker.Item key={index} label={x} value={x} />})}
                        </Picker>
                    </View>
                    <View>
                        <Text style={styles.subHeadingText}>
                            BP (diastolic)
                        </Text>
                        <Picker
                            selectedValue={spo2}
                            style={{ height: 50, width: 150, backgroundColor: "#0481eb", borderWidth: 1, borderRadius: 5 }}
                            onValueChange={(itemValue, itemIndex) => handleSpo2Filter(itemValue)}>
                            <Picker.Item label="Doctor" value={null} />
                            {spo2List.map((x, index) => {
                            return <Picker.Item key={index} label={x} value={x} />})}
                        </Picker>
                    </View>
                
                </View>
                <View style={{'flexDirection': 'row', 'justifyContent':'space-around'}}>
                    <View>
                        <Text style={styles.subHeadingText}>
                            O2 NIV MV
                        </Text>
                        <Picker
                            selectedValue={spo2}
                            style={{ height: 50, width: 150, backgroundColor: "#0481eb", borderWidth: 1, borderRadius: 5 }}
                            onValueChange={(itemValue, itemIndex) => handleSpo2Filter(itemValue)}>
                            <Picker.Item label="Doctor" value={null} />
                            {spo2List.map((x, index) => {
                            return <Picker.Item key={index} label={x} value={x} />})}
                        </Picker>
                    </View>
                    <View>
                        <Text style={styles.subHeadingText}>
                            SPO2
                        </Text>
                        <Picker
                            selectedValue={spo2}
                            style={{ height: 50, width: 150, backgroundColor: "#0481eb", borderWidth: 1, borderRadius: 5 }}
                            onValueChange={(itemValue, itemIndex) => handleSpo2Filter(itemValue)}>
                            <Picker.Item label="Doctor" value={null} />
                            {spo2List.map((x, index) => {
                            return <Picker.Item key={index} label={x} value={x} />})}
                        </Picker>
                    </View>                
                </View>
                <View style={{'flexDirection': 'row', 'justifyContent':'space-around'}}>
                    <View>
                        <Text style={styles.subHeadingText}>
                            PR
                        </Text>
                        <Picker
                            selectedValue={spo2}
                            style={{ height: 50, width: 150, backgroundColor: "#0481eb", borderWidth: 1, borderRadius: 5 }}
                            onValueChange={(itemValue, itemIndex) => handleSpo2Filter(itemValue)}>
                            <Picker.Item label="Doctor" value={null} />
                            {spo2List.map((x, index) => {
                            return <Picker.Item key={index} label={x} value={x} />})}
                        </Picker>
                    </View>
                    <View>
                        <Text style={styles.subHeadingText}>
                            RR
                        </Text>
                        <Picker
                            selectedValue={spo2}
                            style={{ height: 50, width: 150, backgroundColor: "#0481eb", borderWidth: 1, borderRadius: 5 }}
                            onValueChange={(itemValue, itemIndex) => handleSpo2Filter(itemValue)}>
                            <Picker.Item label="Doctor" value={null} />
                            {spo2List.map((x, index) => {
                            return <Picker.Item key={index} label={x} value={x} />})}
                        </Picker>
                    </View>                
                </View>
                <View>
                    <Text style={styles.subHeadingText}>
                        DOA
                    </Text>
                    <DatePicker
                        style={styles.datePickerStyle}
                        date={date} // Initial date from state
                        mode="date" // The enum of date, datetime and time
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="01-01-2016"
                        maxDate="01-01-2040"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                            //display: 'none',
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0,
                            },
                            dateInput: {
                            marginLeft: 36,
                            },
                        }}
                        onDateChange={(date) => {
                            setDate(date);
                        }}
                    />

                    {/* CO-MORBID Fresh Compliments */}
                    <Text style={styles.headingText}>
                        CO-MORBID
                    </Text>

                    <SearchableDropdown
                        onTextChange={(text) => console.log(text)}
                        //On text change listner on the searchable input
                        onItemSelect={(item) => alert(JSON.stringify(item))}
                        //onItemSelect called after the selection from the dropdown
                        containerStyle={styles.containerStyle}
                        //suggestion container style
                        textInputStyle={styles.textInputStyle}
                        itemStyle={styles.itemStyle}
                        itemTextStyle={styles.itemTextStyle}
                        itemsContainerStyle={styles.itemsContainerStyle}
                        items={items}
                        //mapping of item array
                        defaultIndex={2}
                        //default selected item index
                        placeholder="CO-MORBID"
                        //place holder for the search input
                        resetValue={false}
                        //reset textInput Value with true and false state
                        underlineColorAndroid="transparent"
                        //To remove the underline from the android input
                    />
                </View>

                <View style={{'padding': 10}}>
                    <Button                    
                        title="Apply Filters"
                        onPress={() => {
                            setShowModal(!showModal);
                        }}
                    />
                </View>

            </View>
        </Modal>
    
    );
}

export default FiltersScreen;