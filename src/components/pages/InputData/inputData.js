import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';
import Axios from 'axios';

const InputData= () => {
  const [email, setEmail] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');


  const handleSubmit = () => {
    const data = {
      email: email,
      first_name: firstname,
      last_name: lastname,
    };
    Axios.post('http://10.0.2.2:3000/users', data);
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Input Data</Text>
      <Gap height={40} />
      <TextInput
        value={email}
        label="Email"
        placeholder="Masukkan email anda"
        onChangeText={e => setEmail(e)}
      />
      <Gap height={24} />
      <TextInput
        value={firstname}
        label="First Name"
        placeholder="Masukkan nama depan anda"
        onChangeText={e => setfirstname(e)}
      />
      <Gap height={24} />
      <TextInput
        value={lastname}
        label="Last Name"
        placeholder="Masukkan nama belakang anda"
        onChangeText={e => setlastname(e)}
      />
      <Gap height={48} />
      <Button label="Add" onSubmit={handleSubmit} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  },
  gap: {
    height: 20,
  },
});

export default InputData;
