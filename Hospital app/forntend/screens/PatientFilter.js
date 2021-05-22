import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import FiltersScrollbar from './FitersScrollbar';
import PatientListScreen from './PatientListScreen';
import FiltersScreen from './FitersScreen';


const PatientFilter = () => {

    const styles = StyleSheet.create({
        filterContainer: {
            backgroundColor: '#fff',
            padding: 10,
        },
        searchBar: {
            paddingTop: 20,
            backgroundColor: '#0481eb',
        }
    });

    const [showModal, setShowModal] = useState(false);

    // patientListData
    const [patientList,setPatientList] = useState([]);
    const [loading, setLoading] = useState(true);


    // filtering with UHID or Name
    const [serach, setSearch] = useState('');
    // filter states
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [wards, setWards] = useState([]);
    const [selectedWard, setSelectedWard] = useState('');
    const [bpSys, setBpSys] = useState('');
    const [bpDia, setBpDia] = useState('');
    const [spo2, setSpo2] = useState('');
    const [pr, setPr] = useState('');
    const [rr, setRr] = useState('');
    const [date, setDate] = useState(new Date(1621597631000));
    const [o2NivMvs, setO2NivMvs] = useState([]);
    const [selectedO2NivMv, setSelectedO2NivMv] = useState('');
    const [coMorBids, setCoMorBids] = useState([]);
    const [selectedCoMorBid, setSelectedCoMorBid] = useState('');

    var filterStates = [
        [doctors, setDoctors],
        [selectedDoctor, setSelectedDoctor],
        [wards, setWards],
        [selectedWard, setSelectedWard],
        [bpSys, setBpSys],
        [bpDia, setBpDia],
        [spo2, setSpo2],
        [pr, setPr],
        [rr, setRr],
        [date, setDate],
        [o2NivMvs, setO2NivMvs],
        [selectedO2NivMv, setSelectedO2NivMv],
        [coMorBids, setCoMorBids],
        [selectedCoMorBid, setSelectedCoMorBid]
    ];

    const searchWithUhidOrName = (search) => {
        axios.post('http://192.168.0.106:5000/patient/UHIDOrName/',{
            serach
        }).then((res)=> console.log(res.data));
     
    }


    return(
        <View style={styles.filterContainer}>
            <SearchBar
                placeholder="UHID or Name"
                onChangeText={setSearch}
                value={serach}
                containerStyle={styles.searchBar}
                inputContainerStyle={{backgroundColor: '#fff'}}
                inputStyle={{color: '#0481eb'}}
            />
            <FiltersScreen modalState={[showModal, setShowModal]} filterStates = {filterStates} patientListState={[patientList, setPatientList]} />
            <View style={{padding: 10}}>
                <FiltersScrollbar modalState={[showModal, setShowModal]}  filterStates = {filterStates} loadingState={[loading]} />
            </View>
            <PatientListScreen patientList={patientList} loadingState={[loading]} />
        </View>
    );


}

export default PatientFilter;