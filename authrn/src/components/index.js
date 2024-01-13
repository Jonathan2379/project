import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Pg1 } from '../pages/FormSteps/pg1.form';
import { Pg2 } from '../pages/FormSteps/pg2.form';
import { Pg3 } from '../pages/FormSteps/pg3.form';

export default function FormController() {
  const [page, setPage] = useState(1);

  const handleNext = () => {
    if (page < 3) {
      const nextPage = page + 1;
      setPage(nextPage);
    }
  };

  const handleBack = () => {
    if (page > 1) {
      const nextPage = page - 1;
      setPage(nextPage);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Multi step register form</Text>
      <Text>Page {page}/3</Text>
      <View style={styles.formContainer}>
        {page === 1 ? <Pg1 /> : page === 2 ? <Pg2 /> : <Pg3 />}
      </View>
      <View style={styles.buttonContainer}>
        {page > 1 && (
          <Button title="Back" onPress={handleBack} />
        )}
        {page < 3 && (
          <Button title="Next" onPress={handleNext} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  formContainer: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
});
