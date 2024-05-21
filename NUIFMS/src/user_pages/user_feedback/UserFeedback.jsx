import React, { useState } from "react";
import './user-feedback.css';
import UserSideNav from "../../Components/user_sidenav/UserSideNav";
import UserTopPanel from "../../Components/user_topPanel/UserTopPanel";

const UserFeedback = () => {
    const [feedback, setFeedback] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send feedback to the backend)
        setSubmitted(true);
    };

    return (
        <div>
            <UserSideNav />
            <UserTopPanel />
            <div className="user-feedback-content">
                <div className="user-feedback-container">
                    <div className="user-feedback-title">
                        <h2>Submit Your Feedback</h2>
                    </div>
                    {!submitted ? (
                        <form className="feedback-form" onSubmit={handleSubmit}>
                            <textarea
                                className="feedback-textarea"
                                placeholder="Write your feedback here..."
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                required
                            />
                            <button className="submit-button" type="submit">Submit</button>
                        </form>
                    ) : (
                        <div className="thank-you-message">
                            Thank you for your feedback!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserFeedback;
