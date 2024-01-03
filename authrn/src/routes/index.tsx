import React, {useContext} from "react";
import AuthContex from "../contexts/auth";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes: React.FC = () => {
    const {signed } = useContext(AuthContex);
    
    return signed? <AppRoutes/>: <AuthRoutes/>;
}

export default Routes;