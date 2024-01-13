import React from "react";
import { Pg1 } from "../pages/FormSteps/pg1.form";
import { Pg2 } from "../pages/FormSteps/pg2.form";
import { Pg3 } from "../pages/FormSteps/pg3.form";
import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

const FormRoutes: React.FC = () => (
    <AuthStack.Navigator initialRouteName="pg1">
        <AuthStack.Screen name="pg1" component={Pg1}/>
        <AuthStack.Screen name="pg2" component={Pg2}/>
        <AuthStack.Screen name="pg3" component={Pg3}/>
    </AuthStack.Navigator>
);

export default FormRoutes;


