import React from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Pagination, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './archivePage.css';

const ArchivedTicket = () => {
  const archivedTickets = [
    { name: 'Olivia Rhye', subject: '', department: '', building: '', position: '', priority: '', date: '', image: '', status: '' },
    { name: 'Phoenix Baker', subject: '', department: '', building: '', position: '', priority: '', date: '', image: '', status: '' },
    { name: 'Lana Steiner', subject: '', department: '', building: '', position: '', priority: '', date: '', image: '', status: '' },
    { name: 'Demi Wilkinson', subject: '', department: '', building: '', position: '', priority: '', date: '', image: '', status: '' },
    { name: 'Candice Wu', subject: '', department: '', building: '', position: '', priority: '', date: '', image: '', status: '' },
  ];

  return (
    <Box sx={{ padding: 3, width: '100%' }}>
      <Typography variant="h5" gutterBottom>
        Archive
      </Typography>
      <TableContainer component={Paper} className="archive-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Building/Floor & Room no.</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Date of Request</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {archivedTickets.map((archivedTickets, index) => (
              <TableRow key={index}>
                <TableCell>{archivedTickets.name}</TableCell>
                <TableCell>{archivedTickets.subject}</TableCell>
                <TableCell>{archivedTickets.department}</TableCell>
                <TableCell>{archivedTickets.building}</TableCell>
                <TableCell>{archivedTickets.position}</TableCell>
                <TableCell>{archivedTickets.priority}</TableCell>
                <TableCell>{archivedTickets.date}</TableCell>
                <TableCell>{archivedTickets.image}</TableCell>
                <TableCell>{archivedTickets.status}</TableCell>
                <TableCell>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
        <Pagination count={5} page={2} />
      </Box>
    </Box>
  );
};

export default ArchivedTicket;
