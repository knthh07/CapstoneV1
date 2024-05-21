import React from "react";
import './user-history.css';
import UserSideNav from "../../Components/user_sidenav/UserSideNav";
import UserTopPanel from "../../Components/user_topPanel/UserTopPanel";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Pagination } from '@mui/material';

const tickets = [
    { id: 1, subject: "Aircon not functioning properly", status: "Resolved", date: "2023-05-15" },
    { id: 2, subject: "Broken chair", status: "Pending", date: "2023-05-16" },
    { id: 3, subject: "Slippery tiles", status: "In Progress", date: "2023-05-17" },
    // Add more ticket data as needed
];

const UserHistory = () => {
    return (
        <div className="user-history-div">
            <UserSideNav />
            <UserTopPanel />

            <div className="user-history-container">
                <Typography variant="h4" className="user-history-title">Ticket History</Typography>
                <TableContainer component={Paper} className="table-container">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Subject</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tickets.map((ticket) => (
                                <TableRow key={ticket.id}>
                                    <TableCell>{ticket.id}</TableCell>
                                    <TableCell>{ticket.subject}</TableCell>
                                    <TableCell>{ticket.status}</TableCell>
                                    <TableCell>{ticket.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Pagination count={10} color="primary" className="pagination" />
            </div>
        </div>
    );
};

export default UserHistory;
