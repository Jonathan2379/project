import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import {useAuth} from "../../contexts/auth";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const Dasboard: React.FC = () => {
    const {signOut, user} = useAuth();
      

    function handlerSigOut(){
       signOut();
    }

    return (
        <View style={styles.container}>
            <Text>{user?.name}</Text>
            <Button title="Sign out" onPress={handlerSigOut} />
        </View>
    );
};

export default Dasboard;