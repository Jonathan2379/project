import React, {useState} from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import {useAuth} from "../../contexts/auth";
import FormController from "../../components";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const Dasboard: React.FC = () => {
    const {signOut, user} = useAuth();
    const [showForm, setShowForm] = useState(false);

    function handlerSigOut(){
       signOut();
    }

    function handlerShowForm(){
        setShowForm(true);
    }

    return (
        <View style={styles.container}>
            <Text>{user?.name}</Text>
            <Button title="Sign out" onPress={handlerSigOut} />
            <Button title="Go to form" onPress={handlerShowForm} />
            {showForm && <FormController/>}
        </View>
    );
};

export default Dasboard;