import React, { useState } from "react";
import './feedback.css';
import SideNav from "../../Components/sidenav/SideNav";
import TopPanel from "../../Components/topPanel/TopPanel";

// Dummy data for feedbacks
const feedbacks = [
    { id: 1, text: "Great service!" },
    { id: 2, text: "Loved the experience!" },
    { id: 3, text: "Could be better." },
    { id: 4, text: "Very helpful support." },
    { id: 5, text: "Satisfied with the response." },
    { id: 6, text: "Quick resolution of issues." },
    // Add more feedbacks as needed
];

const Feedback = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const feedbacksPerPage = 3;

    // Calculate pagination
    const indexOfLastFeedback = currentPage * feedbacksPerPage;
    const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;
    const currentFeedbacks = feedbacks.slice(indexOfFirstFeedback, indexOfLastFeedback);

    const totalPages = Math.ceil(feedbacks.length / feedbacksPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="feedback-div">
            <SideNav />
            <TopPanel />

            <div className="feedback-container">
                <div className="feedback-title">
                    <h2>Feedback</h2>
                </div>
                {currentFeedbacks.map(feedback => (
                    <div key={feedback.id} className="feedback-card">
                        {feedback.text}
                    </div>
                ))}
                <div className="pagination">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Feedback;
