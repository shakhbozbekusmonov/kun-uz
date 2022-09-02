import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_PATH, LANGUAGE} from "../tools/contants";
import {connect} from "react-redux";
import {updateState} from "../redux/actions/newsAction";



const Home = (props) => {

    return (
        <div className='container'>
            <h1>Home Page</h1>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        lang: state.news.lang
    }
}

export default connect(mapStateToProps, {updateState})(Home);
