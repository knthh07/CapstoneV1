import React from "react";
import './feedback.css';
import SideNav from "../../Components/sidenav/SideNav";
import TopPanel from "../../Components/topPanel/TopPanel";

const Feedback = () => {
    return (
        <div className="feedback-div">
            <SideNav />
            <TopPanel />
            <div className="feedtitle-container">
                <div className="feedback-title">
                    <h2>Feedback</h2>
                </div>
            </div>

            <div className="feedback-container">
                <div className="feedback-card">
                    <h1> Lorem ipsum</h1>
                </div>
                <div className="feedback-card1">
                    <h1> Lorem ipsum</h1>
                </div>
                <div className="feedback-card2">
                    <h1> Lorem ipsum</h1>
                </div>
            </div>
        </div>
    )
}

export default Feedback;