import React, { createContext, useState, useEffect} from "react";
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from "../services/auth";

interface AuthContextData {
    signed: boolean;
    user: object | null;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<object | null>(null);

    useEffect (() => {
        async function LoadStorageData() {
            const storagedUser = await  AsyncStorage.getItem('@RNAuth:user');
            const storagedToken = await  AsyncStorage.getItem('@RNAuth:token');
            
            if(storagedToken && storagedToken){
                setUser(JSON.parse(storagedUser));
            }
        }

        LoadStorageData();
    },[]);

    async function signIn(){
        try {
            const response = await auth.signIn();
            setUser(response.user);

            await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
            await AsyncStorage.setItem('@RNAuth:token', response.token);
        }catch(error){
            console.error("Erro ao fazer login");
        }
    }

    function signOut(){
        AsyncStorage.clear().then(() => {
            setUser(null);        
        });
    }

    return(
    <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthContext;