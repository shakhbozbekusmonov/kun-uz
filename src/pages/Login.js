import React from 'react';
import {Formik} from "formik";
import {connect} from "react-redux";
import {login, signIn} from "../redux/actions/loginAction";

const Login = (props) => {
    return (
        <div className='container'>
            <div className="row justify-content-center align-items-center w-100 vh-100">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <Formik
                                initialValues={{ username: '', password: '' }}
                                onSubmit={(values) => {
                                    props.login(values);
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
                                        />
                                        <input
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            value={values.password}
                                            className="form-control mt-3"
                                            placeholder="Password"
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
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.login.isLoading
    }
}

export default connect(mapStateToProps, {login, signIn})(Login);
