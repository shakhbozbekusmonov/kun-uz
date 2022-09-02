import React from 'react';
import {Formik} from "formik";
import {connect} from "react-redux";
import {login, signIn} from "../redux/actions/loginAction";
import { useNavigate } from "react-router-dom";
import {FadeLoader} from "react-spinners";

const Login = (props) => {
    const history = useNavigate();
    return (
        <div className='container'>
            {props.isLoading ? (
                <div style={{width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <FadeLoader color='#17206a' size={200}/>
                </div>
            ) : (
                <div className="row justify-content-center align-items-center w-100 vh-100">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <Formik
                                    initialValues={{ username: '', password: '' }}
                                    onSubmit={(values) => {
                                        props.login(values, history);
                                    }}
                                >
                                    {({
                                          values,
                                          handleChange,
                                          handleSubmit,
                                          isSubmitting,
                                      }) => (
                                        <form onSubmit={handleSubmit}>
                                            <input
                                                type="text"
                                                name="username"
                                                onChange={handleChange}
                                                value={values.username}
                                                className="form-control"
                                                placeholder="Username"
                                                required
                                            />
                                            <input
                                                type="password"
                                                name="password"
                                                onChange={handleChange}
                                                value={values.password}
                                                className="form-control mt-3"
                                                placeholder="Password"
                                                required
                                            />
                                            <button type="submit" className="btn btn-success btn-block mt-3" disabled={isSubmitting}>
                                                Sign-in
                                            </button>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.login.isLoading
    }
}

export default connect(mapStateToProps, {login, signIn})(Login);
