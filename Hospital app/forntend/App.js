import React from 'react';
import { StyleSheet } from 'react-native';
import PatientEntryForm from './screens/PatientEntryForm';
import PatientFilter from './screens/PatientFilter';
import { MenuProvider} from 'react-native-popup-menu';
import SignIn from './Screens/SignIn';

export default function App() {
  return (
    <>
      <MenuProvider>
        <PatientFilter />
      </MenuProvider>
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
