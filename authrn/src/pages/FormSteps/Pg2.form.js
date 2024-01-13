import React, { useContext } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import FormContext from '../formcontext/form.contex';

export const Pg2 = () => {
  const { phone, rPhone, setPhone, setRPhone } = useContext(FormContext);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Phone number</Text>
      <TextInput
        value={phone}
        onChangeText={(text) => setPhone(text)}
        style={styles.input}
        placeholder="Enter your phone number"
      />

      <Text style={styles.label}>Repeat phone</Text>
      <TextInput
        value={rPhone}
        onChangeText={(text) => setRPhone(text)}
        style={styles.input}
        placeholder="Repeat your phone number"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    fontSize: 16,
    marginBottom: 20,
  },
});
