import React from 'react';
import ArrowBackButton from "../../Assets/Icons/arrow_back-24px.svg"
import { Link } from 'react-router-dom';
import './GoBackButton.scss'

const GoBackButton = ({path, className}) => {
    return (
        <div className="goback">
            {/* <Link to={path}> */}
                <img className="goback__img" src={ArrowBackButton} alt="Arrow Back Button"/>
            {/* </Link> */}
        </div>
    );
};

export default GoBackButton;