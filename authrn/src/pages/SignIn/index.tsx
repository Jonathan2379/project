import React, {useContext} from "react";
import { Button, View, StyleSheet } from "react-native";

import AuthContex from "../../contexts/auth";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    },
});

const SignIn: React.FC = () => {
    const {signed, user, signIn} = useContext(AuthContex);
    console.log(signed);
    console.log(user);

    function handlerSignIn(){
        signIn();
    }

    return (
        <View style={styles.container}>
            <Button title="Sign in" onPress={handlerSignIn} />
        </View>
    );
};

export default SignIn;