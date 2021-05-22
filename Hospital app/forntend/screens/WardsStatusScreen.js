import React, { useState } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { SectionGrid } from 'react-native-super-grid';


const WardsStatusScreen = () => {

    //Item array for the ward dropdown
    const [wardName, setWardName] = useState('');
    const wardItems = [
        //name key is must.It is to show the text in front
        { id: 1, name: 'I-GS1' },
        { id: 2, name: 'I-GS2' },
        { id: 3, name: 'I-GS3' },
    ];

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

    const selectWard = (item) => {
        setWardName(item.name);
        console.log(item.name + " : selcted ward");
    }

    
    
    return(
        <KeyboardAvoidingView behavior="padding">
            <View style={{padding: 20}}>
                <Text style={styles.headingText}>
                    Ward Name
                </Text>
                <SearchableDropdown
                    onTextChange={(text) => console.log(text)}
                    //On text change listner on the searchable input
                    onItemSelect={(item) => selectWard(item)}
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
                    listProps={{ nestedScrollEnabled: true }}
                    //disabling the scrolling part in WARDS
                />
            </View>

            <View>
                <Text style={styles.title}>
                    {wardName}
                </Text>
                <View style={{flexDirection: 'column'}}>
                    <View style={{ alignSelf: 'stretch', flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center'  }}>
                            <Text></Text>
                        </View>
                        <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center'  }}>
                            <Text>O2 BEDS</Text>
                        </View>
                        <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center' }}>
                            <Text>Non O2 BEDS</Text>
                        </View>                   
                    </View>
                    <View style={{ alignSelf: 'stretch', flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center'  }}>
                            <Text>EMPTY</Text>
                        </View>
                        <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center'  }}>
                            <Text>5</Text>
                        </View>
                        <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center' }}>
                            <Text>54</Text>
                        </View>                        
                    </View>
                    <View style={{ alignSelf: 'stretch', flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center'  }}>
                            <Text>FILLED</Text>
                        </View>
                        <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center'  }}>
                            <Text>41</Text>
                        </View>
                        <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center' }}>
                            <Text>63</Text>
                        </View>                         
                    </View>
                </View>
               
            </View>
        </KeyboardAvoidingView>
    );
}

export default WardsStatusScreen;