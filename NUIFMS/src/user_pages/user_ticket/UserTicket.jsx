import React, { useState } from 'react';
import './userticket.css';
import UserSideNav from '../../Components/user_sidenav/UserSideNav';
import UserTopPanel from '../../Components/user_topPanel/UserTopPanel';
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
// import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const UserTickets = () => {
    const [date, setDate] = useState(null);

    return (
        <div>
            <UserSideNav />
            <UserTopPanel />
            <div className="userticket-container">
                <Box sx={{ padding: 3, width: '100%' }}>
                    <Box component="form" noValidate autoComplete="off" sx={{ display: 'grid', gap: 2 }}>
                        <Typography variant="h6">Information</Typography>
                        <TextField label="Name of Personnel" variant="outlined" fullWidth />
                        <TextField select label="Requesting Office/College" variant="outlined" fullWidth>
                            <MenuItem value="Student">College of Engineering</MenuItem>
                            <MenuItem value="Faculty">College of Computing and Information Technology</MenuItem>
                            <MenuItem value="Staff">College of Accounting and Business Management</MenuItem>
                        </TextField>
                        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date of Request"
                                value={date}
                                onChange={(newValue) => setDate(newValue)}
                                renderInput={(params) => <TextField {...params} fullWidth />}
                            />
                        </LocalizationProvider> */}
                        <TextField label="Location" placeholder='Building/Floor/Room Number' variant="outlined" fullWidth />
                        <TextField select label="Position" variant="outlined" fullWidth>
                            <MenuItem value="Faculty">Faculty</MenuItem>
                            <MenuItem value="Staff">Staff</MenuItem>
                        </TextField>
                        <TextField select label="Priority" variant="outlined" fullWidth>
                            <MenuItem value="Low">Low</MenuItem>
                            <MenuItem value="Medium">Medium</MenuItem>
                            <MenuItem value="High">High</MenuItem>
                        </TextField>
                        <TextField
                            label="Description of Job/Work Request"
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth
                        />
                        <Button
                            variant="contained"
                            component="label"
                            sx={{ alignSelf: 'start' }}
                        >
                            Choose File
                            <input type="file" hidden />
                        </Button>
                        <Typography variant="body2">Please upload square image, size less than 100KB</Typography>
                        <Button variant="contained" type="submit" sx={{ width: '10%', alignSelf: 'center' }}>
                            Submit
                        </Button>
                    </Box>
                </Box>
            </div>
        </div>
    );
};

export default UserTickets;
