import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, KeyboardAvoidingView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import FiltersScrollbar from './FitersScrollbar';
import PatientListScreen from './PatientListScreen'

const PatientFilter = () => {

    const [serach, setSearch] = useState('');

    const styles = StyleSheet.create({
        filterContainer: {
            flex: 1,
            backgroundColor: '#fff',
            padding: 0
        },
        searchBar: {
            backgroundColor: '#0481eb',
        }
    })

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
            <View style={{padding: 10}}>
                <FiltersScrollbar />
            </View>
            <PatientListScreen />
        </View>
    );


}

export default PatientFilter;