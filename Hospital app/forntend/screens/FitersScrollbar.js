import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import DoctorFilterPage from './FiterPages/DoctorFilterPage';
import WardFilterPage from './FiterPages/WardFilterPage'

const FiltersScrollbar = () => {
    
    const styles = StyleSheet.create({
        scrollbar: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        }
    });
    
    return(
        <>
            <View style={styles.scrollbar}>
                <View>
                   <DoctorFilterPage />
                </View>
                <View>
                    <WardFilterPage />
                </View>
            </View>
        </>
    );
}

export default FiltersScrollbar