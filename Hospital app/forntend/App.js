import React from 'react';
import { StyleSheet } from 'react-native';
import PatientEntryForm from './screens/PatientEntryForm';
import PatientFilter from './screens/PatientFilter';
import { MenuProvider} from 'react-native-popup-menu';

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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
