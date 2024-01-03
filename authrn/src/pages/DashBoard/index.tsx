import React, {useContext} from "react";
import { Button, View, StyleSheet } from "react-native";

import AuthContex from "../../contexts/auth";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    },
});

const Dasboard: React.FC = () => {
    const {signOut} = useContext(AuthContex);
      

    function handlerSigOut(){
       signOut();
    }

    return (
        <View style={styles.container}>
            <Button title="Sign out" onPress={handlerSigOut} />
        </View>
    );
};

export default Dasboard;