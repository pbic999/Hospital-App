import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import FiltersScrollbar from './FitersScrollbar';
import PatientListScreen from './PatientListScreen';
import FiltersScreen from './FitersScreen';


const PatientFilter = () => {

    const [serach, setSearch] = useState('');

    const styles = StyleSheet.create({
        filterContainer: {
            flex: 1,
            backgroundColor: '#fff',
            padding: 0
        },
        searchBar: {
            paddingTop: 20,
            backgroundColor: '#0481eb',
        }
    });

    const [showModal, setShowModal] = useState(false);

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
            <FiltersScreen modalState={[showModal, setShowModal]} />
            <View style={{padding: 10}}>
                <FiltersScrollbar modalState={[showModal, setShowModal]} />
            </View>
            <PatientListScreen />
        </View>
    );


}

export default PatientFilter;