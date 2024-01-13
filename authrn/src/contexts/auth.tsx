import React, { createContext, useState, useEffect, ReactNode, useContext} from "react";
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from "../services/auth";
import api from "../services/api";

interface User{
    name: string;
    email: string;
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{children:ReactNode}> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading , setLoagin] = useState(true);

    useEffect (() => {
        async function LoadStorageData() {
            const storagedUser = await  AsyncStorage.getItem('@RNAuth:user');
            const storagedToken = await  AsyncStorage.getItem('@RNAuth:token');
            
            if(storagedToken && storagedUser){
                api.defaults.headers.Authorization ='Bearer ${storagedToken}';
                setUser(JSON.parse(storagedUser));
                setLoagin(false);
            }
        }

        LoadStorageData();
    },[]);

    async function signIn(){
        try {
            const response = await auth.signIn();

            setUser(response.user);
            api.defaults.headers['Authorization'] ='Bearer ${response.token}';

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
    <AuthContext.Provider value={{signed: !!user, user, loading, signIn, signOut}}>
        {children}
    </AuthContext.Provider>
    );
};

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}