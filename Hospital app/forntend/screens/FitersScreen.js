import React, { Component, useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, Modal, TextInput, SafeAreaView } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Picker } from 'react-native-picker-dropdown';
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';


const FiltersScreen = (props) => {

    const [patientList,setPatientList] = props.patientListState;

    useEffect(() => {
        setPatientList(['patient1','patient2','patient3'])
    },[]);

    const filterByDutyDoctor = (selectedDoctor) => {
        console.log(selectedDoctor);
        axios.get('http://192.168.0.106:5000/patient/duty_doctor/',{
            selectedDoctor
        }).then((res)=> console.log(res.data));
    }

    const filterByWard = (selectedWard) => {
        console.log(selectedWard);
        axios.get('http://192.168.0.106:5000/patient/ward/',{
            selectedWard
        }).then((res)=> console.log(res.data));
    }

    const filterByBp = (bpSys, bpDia) => {
        const bp = bpSys + '-' + bpDia;
        axios.get('http://192.168.0.106:5000/patient/bp/',{
            bp
        }).then((res)=> console.log(res.data));
    }

    const filterBySpO2 = (spo2) => {
        axios.get('http://192.168.0.106:5000/patient/spo2/',{
            spo2
        }).then((res)=> console.log(res.data));
    }

    const filterByPr = (pr) => {
        axios.get('http://192.168.0.106:5000/patient/pr/',{
            pr
        }).then((res)=> console.log(res.data));
    }
    
    const filterByRr = (rr) => {
        axios.get('http://192.168.0.106:5000/patient/rr/',{
            rr
        }).then((res)=> console.log(res.data));
    }

    const filterByDate = (date) => {
        axios.get('http://192.168.0.106:5000/patient/doa/',{
            date
        }).then((res)=> console.log(res.data));
    }

    const [showModal, setShowModal] = props.modalState;
    const filterFunctions = props.filterFunctions;

    //Item array for the doctor dropdown
    const [doctors, setDoctors] = props.filterStates[0];
    const [selectedDoctor, setSelectedDoctor] = props.filterStates[1];
    const doctorItems = [
        //name key is must.It is to show the text in front
        { id: 1, name: 'Venkat' },
        { id: 2, name: 'Ram' },
        { id: 3, name: 'Raghav' },     
    ];
    for (var i = 0; i < doctors.length; ++i) {
        doctorItems.push({id: i, name: doctors[i]});
    }

    //Item array for the ward dropdown
    const [wards, setWardNames] = props.filterStates[2];
    const [selectedWard, setSelectedWard] = props.filterStates[3];
    const wardItems = [
        //name key is must.It is to show the text in front
        { id: 1, name: 'I-GS1' },
        { id: 2, name: 'I-GS2' },
        { id: 3, name: 'I-GS3' },
    ];
    for (var i = 0; i < wards.length; ++i) {
        wardItems.push({id: i, name: wards[i]});
    }

    //Item array for the O2 NIV MV ITEMS dropdown
    const [o2NivMvs, setO2NivMvs] = props.filterStates[10];
    const [selectedO2NivMv, setSelectedO2NivMv] = props.filterStates[11]; 
    const o2NivMvItems = [
        //name key is must.It is to show the text in front
        { id: 1, name: 'RA' },
        { id: 2, name: '5L O2' },
        { id: 3, name: '6L O2' },
    ];
    for (var i = 0; i < o2NivMvs.length; ++i) {
        o2NivMvItems.push({id: i, name: o2NivMvs[i]});
    }

     //Item array for the CO-MORBID dropdown
     const [coMorBids, setCoMorBids] = props.filterStates[12];
     const [selectedCoMorBid, setSelectedCoMorBid] = props.filterStates[13];
     const coMorBidItems = [
        //name key is must.It is to show the text in front
        { id: 1, name: 'HTN' },
        { id: 2, name: 'DM' },
        { id: 3, name: 'CAD' },
    ];
    for (var i = 0; i < coMorBids.length; ++i) {
        coMorBidItems.push({id: i, name: coMorBids[i]});
    }


    // onSelect funtions for searchable dropdowns

    const selectDutyDoctor = (item, filterByDutyDoctor) => {
        setSelectedDoctor(item.name);
        filterByDutyDoctor(selectedDoctor);
        setShowModal(!showModal);
    }

    const selectWard = (item, filterByWard) => {
        setSelectedWard(item.name);
        filterByWard(selectedWard);
        setShowModal(!showModal);
    }


    //  Data for bpSys dropdown
    const [bpSys, setBpSys] = props.filterStates[4];
    const bpSysList = ['<70%', '70-79 %', '80-89 %', '90-99 %'];
    const handleBpSysFilter = (bpSys) => {
        setBpSys(bpSys);
        console.log("bpSys filter set to : " + bpSys);
    }

    //  Data for bpDia dropdown
    const [bpDia, setBpDia] = props.filterStates[5];
    const bpDiaList = ['<70%', '70-79 %', '80-89 %', '90-99 %'];
    const handleBpDiaFilter = (bpDia) => {
        setBpDia(bpDia);
        console.log("bpDia filter set to : " + bpDia);
        setShowModal(!showModal);
    }

    //  Data for spo2 dropdown
    const [spo2, setSpo2] = props.filterStates[6];
    const spo2List = ['<70%', '70-79 %', '80-89 %', '90-99 %'];
    const handleSpo2Filter = (spo2, filterFunctions) => {
        setSpo2(spo2);
        filterBySpO2(spo2);
        console.log("spo2 filter set to : " + spo2);
        setShowModal(!showModal);
    }

    //  Data for pr dropdown
    const [pr, setPr] = props.filterStates[7];
    const prList = ['<70%', '70-79 %', '80-89 %', '90-99 %'];
    const handlePrFilter = (pr, filterFunctions) => {
        setPr(pr);
        filterByPr(pr);
        console.log("pr filter set to : " + pr);
        setShowModal(!showModal);
    }

    //  Data for rr dropdown
    const [rr, setRr] = props.filterStates[8];
    const rrList = ['<70%', '70-79 %', '80-89%', '90-99 %'];
    const handleRrFilter = (rr, filterFunctions) => {
        setRr(rr);
        filterByRr(rr);
        console.log("rr filter set to : " + rr);
        setShowModal(!showModal);
    }

    // DOA
    //https://github.com/react-native-datetimepicker/datetimepicker
    const [date, setDate] =  props.filterStates[9];
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        console.log(currentDate);
        setShow(false);
        setDate(currentDate);
        filterByDate(date);
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
            fontSize: 20,
            lineHeight: 30,
            padding: 10,
        },
        titleText: {
            padding: 8,
            fontSize: 16,
            textAlign: 'center',
            fontWeight: 'bold',
        },
        // date-picker styles
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
        input: {
            marginBottom: 25,
            borderWidth: 1,
            borderColor: '#a2a2a2',
            fontSize: 20,
            lineHeight: 30,
            padding: 10,
            flex: 1
        },
        container: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
    
        }
        
    });



    return(
        <Modal
            animationType={'slide'}
            transparent={false}
            visible={showModal}
            onRequestClose={() => {
                console.log('Modal has been closed.');
        }}>
            <ScrollView keyboardShouldPersistTaps = 'always'>
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
                    onItemSelect={(item) => selectDutyDoctor(item, filterByDutyDoctor)}
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
                    onItemSelect={(item) => selectWard(item, filterByWard)}
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
                        <TextInput style={styles.input}
                           placeholder ='BP (systolic)'
                        />
                        <Text> / </Text>
                        <TextInput style={styles.input}
                           placeholder= 'BP (diastolic)'
                        />
                </View>
                <View style={{'flexDirection': 'row', 'justifyContent':'space-around'}}>
                    <View style={{width: 150, height: 50}}>
                        <Text style={styles.subHeadingText}>
                            DOA
                        </Text>
                        <View>
                            <MaterialIcons onPress={showDatepicker}
                             name="date-range" size={50} color="#0481eb" />
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
                            onValueChange={(itemValue, itemIndex) => handleSpo2Filter(itemValue, filterFunctions)}>
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
                            onValueChange={(itemValue, itemIndex) => handlePrFilter(itemValue, filterFunctions)}>
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
                            onValueChange={(itemValue, itemIndex) => handleRrFilter(itemValue, filterFunctions)}>
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
                        onItemSelect={(item) => {alert(JSON.stringify(item))}}
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
                        onItemSelect={(item) => {alert(JSON.stringify(item))}}
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