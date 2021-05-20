import React from 'react';
import { StyleSheet } from 'react-native';
import PatientEntryForm from './screens/PatientEntryForm';
import PatientFilter from './screens/PatientFilter';
import SignIn from './Screens/SignIn';
import UserEntryForm from './screens/UserEntryForm';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
        <NavigationContainer>
            <Drawer.Navigator 
              initialRouteName="Filter"
              drawerContentOptions={{
              activeTintColor: 'blue',
              itemStyle: { marginVertical: 5 },
            }}>
              <Drawer.Screen name="Filter" component={PatientFilter} />
              <Drawer.Screen name="UserForm" component={UserEntryForm} />
              <Drawer.Screen name="PatientEntryForm" component={PatientEntryForm} />
            </Drawer.Navigator>
        </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
