import React, { Component, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, Modal, KeyboardAvoidingView } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Picker } from 'react-native-picker-dropdown';
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';


const FiltersScreen = (props) => {

    const [showModal, setShowModal] = props.modalState;

    //Item array for the doctor dropdown
    const doctorItems = [
        //name key is must.It is to show the text in front
        { id: 1, name: 'Arun' },
        { id: 2, name: 'Amit' },
        { id: 3, name: 'Venkat' },
    ];

    //Item array for the ward dropdown
    const wardItems = [
        //name key is must.It is to show the text in front
        { id: 1, name: 'I-GS1' },
        { id: 2, name: 'I-GS2' },
        { id: 3, name: 'I-GS3' },
    ];

    //Item array for the O2 NIV MV ITEMS dropdown
    const o2NivMvItems = [
        //name key is must.It is to show the text in front
        { id: 1, name: 'RA' },
        { id: 2, name: '5L O2' },
        { id: 3, name: '6L O2' },
    ];

     //Item array for the CO-MORBID dropdown
     const coMorBidItems = [
        //name key is must.It is to show the text in front
        { id: 1, name: 'HTN' },
        { id: 2, name: 'DM' },
        { id: 3, name: 'CAD' },
    ];


    //  Data for bpSys dropdown
    const [bpSys, setBpSys] = useState('');
    const bpSysList = ['<70%', '70-79 %', '80-89 %', '90-99 %'];
    const handleBpSysFilter = (bpSys) => {
        setBpSys(bpSys);
        console.log("bpSys filter set to : " + bpSys);
    }

    //  Data for bpDia dropdown
    const [bpDia, setBpDia] = useState('');
    const bpDiaList = ['<70%', '70-79 %', '80-89 %', '90-99 %'];
    const handleBpDiaFilter = (bpDia) => {
        setBpDia(bpDia);
        console.log("bpDia filter set to : " + bpDia);
    }

    //  Data for spo2 dropdown
    const [spo2, setSpo2] = useState('');
    const spo2List = ['<70%', '70-79 %', '80-89 %', '90-99 %'];
    const handleSpo2Filter = (spo2) => {
        setSpo2(spo2);
        console.log("spo2 filter set to : " + spo2);
    }

    //  Data for pr dropdown
    const [pr, setPr] = useState('');
    const prList = ['<70%', '70-79 %', '80-89 %', '90-99 %'];
    const handlePrFilter = (pr) => {
        setPr(pr);
        console.log("pr filter set to : " + pr);
    }

    //  Data for rr dropdown
    const [rr, setRr] = useState('');
    const rrList = ['<70%', '70-79 %', '80-89 %', '90-99 %'];
    const handleRrFilter = (rr) => {
        setRr(rr);
        console.log("rr filter set to : " + rr);
    }

    // DOA
    //https://github.com/react-native-datetimepicker/datetimepicker
    const [date, setDate] = useState(new Date(1621597631000));
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        console.log(currentDate);
        setShow(false);
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
    }




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

    return(
        <Modal
            animationType={'slide'}
            transparent={false}
            visible={showModal}
            onRequestClose={() => {
                console.log('Modal has been closed.');
        }}>
            <ScrollView>
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
                    items={doctorItems}
                    //mapping of item array
                    defaultIndex={2}
                    //default selected item index
                    placeholder="Duty Doctor Name"
                    //place holder for the search input
                    resetValue={false}
                    //reset textInput Value with true and false state
                    underlineColorAndroid="transparent"
                    //To remove the underline from the android input
                    listProps={{ nestedScrollEnabled: true }}
                    //disabling the scrolling part in COMORBID
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
                    items={wardItems}
                    //mapping of item array
                    defaultIndex={2}
                    //default selected item index
                    placeholder="Ward Name"
                    //place holder for the search input
                    resetValue={false}
                    //reset textInput Value with true and false state
                    underlineColorAndroid="transparent"
                    //To remove the underline from the android input
                    listProps={{ nestedScrollEnabled: true}}
                     //disabling the scrolling part in COMORBID
                />
                <View style={{'flexDirection': 'row', 'justifyContent':'space-around'}}>
                    <View>
                        <Text style={styles.subHeadingText}>
                            BP (systolic)
                        </Text>
                        <Picker
                            selectedValue={bpSys}
                            style={{ height: 50, width: 150, backgroundColor: "#0481eb", borderWidth: 1, borderRadius: 5 }}
                            onValueChange={(itemValue, itemIndex) => handleBpSysFilter(itemValue)}>
                            <Picker.Item label="Doctor" value={null} />
                            {bpSysList.map((x, index) => {
                            return <Picker.Item key={index} label={x} value={x} />})}
                        </Picker>
                    </View>
                    <View>
                        <Text style={styles.subHeadingText}>
                            BP (diastolic)
                        </Text>
                        <Picker
                            selectedValue={bpDia}
                            style={{ height: 50, width: 150, backgroundColor: "#0481eb", borderWidth: 1, borderRadius: 5 }}
                            onValueChange={(itemValue, itemIndex) => handleBpDiaFilter(itemValue)}>
                            <Picker.Item label="Doctor" value={null} />
                            {bpDiaList.map((x, index) => {
                            return <Picker.Item key={index} label={x} value={x} />})}
                        </Picker>
                    </View>
                
                </View>
                <View style={{'flexDirection': 'row', 'justifyContent':'space-around'}}>
                    <View style={{width: 150, height: 50}}>
                        <Text style={styles.subHeadingText}>
                            DOA
                        </Text>
                        <View>
                            <Button 
                                onPress={showDatepicker}
                                title="start date" 
                                color="#0481eb"    
                            />
                        </View>
                        {show &&
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={'date'}
                            display="default"
                            onChange={onChange}
                        />}
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
                            selectedValue={pr}
                            style={{ height: 50, width: 150, backgroundColor: "#0481eb", borderWidth: 1, borderRadius: 5 }}
                            onValueChange={(itemValue, itemIndex) => handlePrFilter(itemValue)}>
                            <Picker.Item label="Doctor" value={null} />
                            {prList.map((x, index) => {
                            return <Picker.Item key={index} label={x} value={x} />})}
                        </Picker>
                    </View>
                    <View>
                        <Text style={styles.subHeadingText}>
                            RR
                        </Text>
                        <Picker
                            selectedValue={rr}
                            style={{ height: 50, width: 150, backgroundColor: "#0481eb", borderWidth: 1, borderRadius: 5 }}
                            onValueChange={(itemValue, itemIndex) => handleRrFilter(itemValue)}>
                            <Picker.Item label="Doctor" value={null} />
                            {rrList.map((x, index) => {
                            return <Picker.Item key={index} label={x} value={x} />})}
                        </Picker>
                    </View>                
                </View>

                <View>
                    {/*  O2 NIV MV */}
                    <Text style={styles.headingText}>
                        O2 NIV MV
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
                        items={o2NivMvItems}
                        //mapping of item array
                        defaultIndex={2}
                        //default selected item index
                        placeholder="O2 NIV MV"
                        //place holder for the search input
                        resetValue={false}
                        //reset textInput Value with true and false state
                        underlineColorAndroid="transparent"
                        //To remove the underline from the android input
                        listProps={{ nestedScrollEnabled: true }}
                        //disabling the scrolling part in COMORBID
                    />
                </View>

                <View>
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
                        items={coMorBidItems}
                        //mapping of item array
                        defaultIndex={2}
                        //default selected item index
                        placeholder="CO-MORBID"
                        //place holder for the search input
                        resetValue={true}
                        //reset textInput Value with true and false state
                        underlineColorAndroid="transparent"
                        //To remove the underline from the android input
                        listProps={{ nestedScrollEnabled: true }}
                        //disabling the scrolling part in COMORBID
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
            </ScrollView>
        </Modal>
    
    );
}

export default FiltersScreen;