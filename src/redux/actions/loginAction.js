import axios from "axios";
import {API_PATH, TOKEN_NAME} from "../../tools/contants";
import {toast} from "react-toastify";


export function login(values, history){
    return function (dispatch){
        const data = new FormData();
        data.append("username", values.username);
        data.append("password", values.password);
        axios.post(API_PATH + "login", data)
            .then((res) => {
                console.log(res);
                localStorage.setItem(TOKEN_NAME, res.data.token_type + " " + res.data.access_token);
                dispatch({type: ""});
                history.push("/admin/menus");
                toast.success("Muvaffaqiyatli!!!")
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            })
    }
}
