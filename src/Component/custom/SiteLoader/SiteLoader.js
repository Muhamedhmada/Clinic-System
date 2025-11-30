import React from "react";
import "./SiteLoader.css";
import img from '../../../Assets/Images/doctorLoader1.png'
import Loader from "../../common/Loader/Loader";
export default function Preloader() {
    return (
        <div className="preloader">
            <img src={img} alt="" />
            <Loader/>
        </div>
    );
}
