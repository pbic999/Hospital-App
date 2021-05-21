import React from 'react';
import PatientEntryForm from './screens/PatientEntryForm.js';
import PatientFilter from './screens/PatientFilter.js';
import SignIn from './Screens/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import PatientDetails from './Screens/PatientDetails.jsx';
import AddDocotr from './Screens/AddDocotr.js';
import AddNurse from './Screens/AddNurse.jsx';
import AddHospital from './Screens/AddHospital.jsx';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
      <>
        <NavigationContainer>
            <Drawer.Navigator 
              initialRouteName="Filter"
              drawerContentOptions={{
              activeTintColor: '#0481eb',
              itemStyle: { marginVertical: 5 },
            }}>
              <Drawer.Screen name="Filter" component={PatientFilter} />
              <Drawer.Screen name="Add doctor" component={AddDocotr} />
              <Drawer.Screen name="Add Nurse" component={AddNurse} />
              <Drawer.Screen name="PatientEntryForm" component={PatientEntryForm} />
              <Drawer.Screen name="PatientDetails" component={PatientDetails} />
              <Drawer.Screen name="SignIn" component={SignIn} />
              <Drawer.Screen name="Add hospital" component={AddHospital} />
            </Drawer.Navigator>
          </NavigationContainer>
        </>
  );
}

