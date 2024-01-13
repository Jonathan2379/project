import React, { useContext } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import FormContext from '../formcontext/form.contex';

export const Pg3 = () => {
  const { password, rPassword, setPassword, setRPassword } = useContext(FormContext);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry={true}
      />

      <Text style={styles.label}>Repeat password</Text>
      <TextInput
        value={rPassword}
        onChangeText={(text) => setRPassword(text)}
        style={styles.input}
        placeholder="Repeat your password"
        secureTextEntry={true}
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
