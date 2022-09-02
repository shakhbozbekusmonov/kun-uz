import { Outlet, Navigate } from "react-router-dom";
import {TOKEN_NAME} from "../tools/contants";

const PrivateRoutes = () => {
    return (
        localStorage.getItem(TOKEN_NAME) ? <Outlet/> : <Navigate to='/uz'/>
    )
}

export default PrivateRoutes;
