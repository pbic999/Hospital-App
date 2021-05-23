import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { StyleSheet,TextInput, Text, View, StatusBar, ScrollView, KeyboardAvoidingView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay'

const PatientDetails = () => {
<<<<<<< HEAD
    const [patientDetails,setPatientDetails] = useState()
=======

    const [patientDetails,setPatientDetails] = useState({})
>>>>>>> 9985279c8414b7e94ca73161e89f1a6ef524f21f
    const [ward_name, setWard_name] = useState('');
    const [doa, setDoa] = useState('');
    const [pr, setPr] = useState('');
    const [bp, setBp] = useState('');
    const [rr, setRr] = useState('');
    const [spo2,setSpo2] = useState('');
    const [o2_niv_mv, setO2_niv_mv] = useState('');
    const [o2_niv_mv_level, setO2_niv_mv_level] = useState('');
<<<<<<< HEAD
    const [complaints, setFreshComplaints] = useState('');
    const [duty_doctor,setDutyDoctor] = useState('');
    const [age,setAge] = useState('')
    const [bed,setBed] = useState('')
    const hospital_id = '1'
    const [loading,setLoading] = useState(true)
    const [editable,setEditable] = useState(false)
    const [fetchData,setFetchData] = useState(false)
=======
    const [freshComplaints, setFreshComplaints] = useState('');
    const [dutyDoctors,setDutyDoctors] = useState('');
    const [age,setAge] = useState('');
    const [bed,setBed] = useState('');
    const [editable,setEditable] = useState(false);

    const verfiyBp = (bp) => {
        var bp_regex = /^\d{1,3}\/\d{1,3}$/;
        if (bp.match(bp_regex)) {
            return true;
        } else {
            alert('BP must be of form (systolic/diastolic)!');
            return false;
        }
    }

    const checkTextInput = () => {

        
        //Check for the Duty Doctor TextInput
        if (!dutyDoctors.trim()) {
            alert('Please Enter Duty Doctor Name');
            return false;
          }
        //Check for the Ward Name TextInput
        if (!ward_name.trim()) {
          alert('Please Enter Ward Name');
          return false;
        }
        if (!bed.trim()) {
            alert('Please Enter Bed Type!');
            return false;
        }
        if (!doa.trim()) {
            alert('Please Enter DOA');
            return false;
        }
        if (!age.trim()) {
            alert('Please Enter Age');
            return false;
        }
        if (isNaN(age)) {
            alert('Age must be a number!');
            return false;
        }
        if (!pr.trim()) {
            alert('Please Enter PR');
            return false;
        }
        if (isNaN(pr)) {
            alert('PR must be a number!');
            return false;
        }
        if (!bp.trim()) {
            alert('Please Enter BP!');
            return false;
        }
        if (!verfiyBp(bp)) {
            return false
        }
        if (!rr.trim()) {
            alert('Please Enter RR');
            return false;
        }
        if (isNaN(rr)) {
            alert('RR must be a number!');
            return false;
        }
        if (!spo2.trim()) {
            alert('Please Enter SPO2');
            return false;
        }
        if (!o2_niv_mv.trim()) {
            alert('Please Enter O2 NIV MV');
            return false;
        }
        if (!o2_niv_mv_level.trim()) {
            alert('Please Enter O2NRBM in L');
            return false;
        }
        if (!freshComplaints.trim()) {
            alert('Please Enter COMORBID complaints');
            return false;
        }
        
        //Checked Successfully
        //Do whatever you want
        return true;
    };


>>>>>>> 9985279c8414b7e94ca73161e89f1a6ef524f21f
    useEffect(()=> {
        axios.get(`http://192.168.0.106:5000/patient/UHID/52663773/1`).then(
            (res)=> {setPatientDetails(res.data)
                console.log(res.data);
                setLoading(false)
            }
        )
        /*setPatientDetails({
            s_no: '1', 
            name: "Anuj",
            ward: "CT POW",
            UHID: "2346674",
            hospital_no: "686937",
            doa:"16/4/2021",
            age: '21',
            sex: 'male',
            pr: '99',
            bp: '120/80',
            rr: '18',
<<<<<<< HEAD
            bed: 'o2',
=======
            bed: 'ICU',
>>>>>>> 9985279c8414b7e94ca73161e89f1a6ef524f21f
            spo2: '90',
            o2_niv_mv: 'NRBM',
            fresh_complaint: 'DM',
            duty_doctors: 'Doctor'
<<<<<<< HEAD
        })*/
    },[fetchData])

    const setBlankStates = () => {
        setWard_name('')
        setDoa('')
        setPr('')
        setBp('')
        setRr('')
        setSpo2('')
        setO2_niv_mv('')
        setO2_niv_mv_level('')
        setFreshComplaints('')
        setDutyDoctor('')
        setAge('')
        setBed('')
    }

    const buttonHandler = () => {
        if(editable) {
            setLoading(true)
=======
        })
    },[]);

    const buttonHandler = () => {
        if(editable) {
            if (!checkTextInput()) return;
>>>>>>> 9985279c8414b7e94ca73161e89f1a6ef524f21f
            console.log('data updated');
            axios.post('http://192.168.0.106:5000/patient/add/record',{
                ward_name,pr,bp,spo2,o2_niv_mv,o2_niv_mv_level,complaints,UHID: patientDetails.UHID,
                doa: doa,age,duty_doctor,bed,rr,hospital_id:'1'
            }).then((res) => {setPatientDetails(res.data) ;alert('Data successfully uploaded!')
                 setFetchData(true); setLoading(false)})
            .catch((err) => {console.log(err); alert('Sorry, your request failed!')})
            setBlankStates()
        }
        setEditable(!editable)
    }

    const cancelEditMode = () => {
        if(editable) {
            setBlankStates()
            setEditable(false)
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 20,
            paddingBottom: 20
        },
        title: {
            fontSize: 23,
            fontWeight: 'bold',
        },
        TextInput: {
            borderWidth: 1,
            borderColor: '#a2a2a2',
            fontSize: 20,
            borderRadius: 5,
            padding: 10
        },
        smallFieldsContainer: {
            flexDirection: 'row',
        }, 
        smallTextInput: {
            borderWidth: 1,
            borderColor: '#a2a2a2',
            borderRadius: 5,
            fontSize: 20,
            padding: 10
        },
        submitButton: {
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#0481eb',
            borderRadius: 3,
            textAlign: 'center',
            padding: 10,
            fontSize: 20,
            marginTop: 20,
            width:'45%'
        }
    });

    return(

        <>
            <View style={styles.container}>
             { loading ? <Spinner
          visible={loading}
          textContent={'Loading...'}
        /> : 
            <ScrollView>
                    <StatusBar backgroundColor="#0481eb" />
                    <Text style={styles.title}>Patient Details :</Text>
                    <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 12}}> Name: </Text>
                    <TextInput 
                        value={patientDetails.patient_name}
                        style={styles.TextInput}
                        editable = {false}
                    />
                    </View>
                    <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 12}}> Duty doctors: </Text>
                    <TextInput 
                        value={editable? duty_doctor : patientDetails.duty_doctor}
                        style={styles.TextInput}
                        editable = {editable}
<<<<<<< HEAD
                        onChangeText = {val => setDutyDoctor(val)}
                        
=======
                        onChangeText={(text) => setDutyDoctors(text)}
>>>>>>> 9985279c8414b7e94ca73161e89f1a6ef524f21f
                    />
                    </View>
                    <View style={styles.smallFieldsContainer}>
                        <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> Ward: </Text>
                        <TextInput 
<<<<<<< HEAD
                            value={editable? ward_name : patientDetails.ward_name}
                            onChangeText = {val => setWard_name(val)}
                            style={styles.smallTextInput} editable = {editable}/>
=======
                            value={editable? ward_name : patientDetails.ward}
                            style={styles.smallTextInput}
                            editable = {editable}
                            onChangeText={(text) => setWard_name(text)}
                        />
>>>>>>> 9985279c8414b7e94ca73161e89f1a6ef524f21f
                        </View>
                        <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> UHID: </Text>
                        <TextInput 
                            style={styles.smallTextInput} 
                            value={patientDetails.UHID}
                            editable = {false}
                        />
                        </View>
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <View style={{marginTop: 10,flex: 1}}>
                    <Text style={{fontSize: 12}}> Bed type: </Text>
                        <TextInput 
                            value={editable ? bed : patientDetails.bed}
<<<<<<< HEAD
                            onChangeText = {val => setBed(val)}
=======
>>>>>>> 9985279c8414b7e94ca73161e89f1a6ef524f21f
                            style={styles.smallTextInput}
                            editable = {editable}
                            onChangeText={(text) => setBed(text)}
                        />
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                    <Text style={{fontSize: 12}}> DOA(dd/mm/yyyy): </Text>
                        <TextInput 
                            value={editable ? doa : patientDetails.doa}
                            onChangeText = {val => setDoa(val)}
                            style={styles.smallTextInput}
                            editable = {editable}
                            onChangeText={(text) => setDoa(text)}
                        />
                    </View>
                    </View>
                    <View style={styles.smallFieldsContainer}>
                    <View style={{marginTop: 10,flex: 1}}>
<<<<<<< HEAD
=======
                        <Text style={{fontSize: 12}}> PR: </Text>
                        <TextInput 
                            value={editable? pr : patientDetails.pr}
                            style={styles.smallTextInput}
                            editable = {editable}
                            onChangeText={(text) => setPr(text)}
                        />
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> BP: </Text>
                        <TextInput
                            value={editable? bp : patientDetails.bp}
                            style={styles.smallTextInput}
                            editable = {editable}
                            onChangeText={(text) => setBp(text)}
                        />
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> RR: </Text>
                        <TextInput 
                            value={editable? rr :patientDetails.rr}
                            style={styles.smallTextInput} 
                            editable = {editable}
                            onChangeText={(text) => setRr(text)}
                        />
                    </View>
                    </View>

                    <View style={styles.smallFieldsContainer}>
                    <View style={{marginTop: 10,flex: 1}}>
>>>>>>> 9985279c8414b7e94ca73161e89f1a6ef524f21f
                        <Text style={{fontSize: 12}}> Age: </Text>
                        <TextInput 
                        onChangeText = {val => setAge(val)}
                            value={editable ? age : patientDetails.age}
                            style={styles.smallTextInput} 
                            editable = {editable}
                            onChangeText={(text) => setAge(text)} 
                        />
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> Hospital no.: </Text>
                        <TextInput 
                            value={patientDetails.hospital_no}
                            style={styles.smallTextInput} 
                            editable = {false}
                        />
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> Sex : </Text>
                        <TextInput 
                            value={patientDetails.sex}
                            style={styles.smallTextInput}
                            editable = {false}
                        />
                    </View>
                    </View>


                    <View style={styles.smallFieldsContainer}>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> PR: </Text>
                        <TextInput 
                            value={editable? pr : patientDetails.pr}
                            onChangeText = {val => setPr(val)}
                            style={styles.smallTextInput} editable = {editable}
                        />
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> BP: </Text>
                        <TextInput
                            value={editable? bp : patientDetails.bp}
                            onChangeText = {val => setBp(val)}
                            style={styles.smallTextInput}
                            editable = {editable}/>
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> RR: </Text>
                        <TextInput 
                        onChangeText = {val => setRr(val)}
                            value={editable? rr :patientDetails.rr}
                            style={styles.smallTextInput} 
                            editable = {editable}/>
                    </View>
                    </View>

                    <View style={styles.smallFieldsContainer}>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> SPO2: </Text>
                        <TextInput 
                            value={editable? spo2 : patientDetails.spo2}
                            style={styles.smallTextInput} 
                            onChangeText = {val => setSpo2(val)}
                            editable = {editable}
                            onChangeText={(text) => setSpo2(text)}
                        />
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> O2 NIV MIV: </Text>
                        <TextInput 
                        onChangeText = {val => setO2_niv_mv(val)}
                            value={editable? o2_niv_mv : patientDetails.o2_niv_mv}
                            style={styles.smallTextInput}
                            editable = {editable}
                            onChangeText={(text) => setO2_niv_mv(text)}    
                        />
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12}}> O2/NRBM in L : </Text>
                        <TextInput 
                        onChangeText = {val => setO2_niv_mv_level(val)}
                            value={editable? o2_niv_mv_level : patientDetails.o2_niv_mv_level}
                            style={styles.smallTextInput}
                            editable = {editable}
                            onChangeText={(text) => setO2_niv_mv_level(text)}
                        />
                    </View>
                    </View>
                    <View style={{marginTop: 10,flex: 1}}>
                        <Text style={{fontSize: 12, color: 'black'}}> Complaints: </Text>
                        <TextInput 
<<<<<<< HEAD
                        onChangeText = {val => setFreshComplaints(val)}
                            value={editable? complaints :patientDetails.complaints}
                            style={styles.smallTextInput} editable = {editable}
=======
                            value={editable? freshComplaints :patientDetails.fresh_complaint}
                            style={styles.smallTextInput}
                            editable = {editable}
                            onChangeText={(text) => setFreshComplaints(text)}
>>>>>>> 9985279c8414b7e94ca73161e89f1a6ef524f21f
                        />
                    </View>
                    <View style={{flexDirection:'row',justifyContent: 'space-around'}}>
                    <Text style={styles.submitButton} onPress={buttonHandler}>
                    {editable ? 'Update' : "Edit"} </Text>
                    <Text onPress={e=> {if(editable) setEditable(false)}} style={{...styles.submitButton,
                    backgroundColor: editable?"#DC143C":"#ff9999"}} onClick={cancelEditMode}>
                    Cancel </Text>
                    </View>
            </ScrollView> 
}
            </View>
        </>
    );
}

export default PatientDetails