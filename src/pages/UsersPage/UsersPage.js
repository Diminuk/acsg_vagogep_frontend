import Grid from '@mui/material/Grid';
import NavBar from '../../components/Header/Navbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add'
import AddUserDialog from './AddUserPopup';
import { useState } from 'react';
import React, { useEffect } from 'react';
import { grey, red } from '@mui/material/colors';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];



const UsersPage = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/get_users');
            const data = await response.json();
            setUsers(data.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    useEffect(() => {
        fetchUsers();
        // Cleanup function
        return () => {
            // Any cleanup code if needed
        };
    }, []);

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        fetchUsers();
    };

    const handleSubmit = (userData) => {
        // Handle submitted user data
        console.log('Submitted:', userData);
    };

    const handleDeleteUser = async (username) => {
        try {
            const response = await fetch(`http://localhost:8000/api/delete_user?username=${username}`, {
                method: 'GET',

            });
            const data = await response.json();
            console.log(data.data);
            fetchUsers();
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }


    return (
        <Grid container spacing={3}

        >
            <Grid item xs={12}>
                <NavBar />
            </Grid>
            <Grid item xs={12}
                sx={{
                    m: 1,
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'flex-end',
                    mr: 5,

                }}>
                <Box >
                    <Fab
                        aria-label="add"
                        onClick={handleOpen}
                        sx={{
                            bgcolor: red[900],
                            '&:hover': { backgroundColor: red[900] },
                            color: grey[100]
                        }}
                    >
                        <AddIcon />
                    </Fab>
                    <AddUserDialog open={open} onClose={handleClose} onSubmit={handleSubmit} />
                </Box>
            </Grid>

            <Grid item xs={12}
                sx={{
                    m: 1,
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}>
                <TableContainer component={Paper} sx={{
                    maxHeight: 600, '&::-webkit-scrollbar': {
                        width: '15px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#888',
                        borderRadius: '5px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#555',
                    },
                    '&::-webkit-scrollbar-track:hover': {
                        backgroundColor: '#f4f4f4',
                    },
                }}>
                    <Table sx={{
                        minWidth: 650,
                        height: 600,
                        bgcolor: grey[200],

                    }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Username</TableCell>
                                <TableCell align="right">Type</TableCell>
                                <TableCell align="right">Created</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((row) => (
                                <TableRow
                                    key={row.username}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.username}
                                    </TableCell>
                                    <TableCell align="right">{row.type}</TableCell>
                                    <TableCell align="right">{row.date}</TableCell>
                                    <TableCell align="right">
                                        <Box>

                                            <Button variant='contained'
                                                onClick={() => handleDeleteUser(row.username)}
                                                sx={{
                                                    bgcolor: red[900],
                                                    '&:hover': { backgroundColor: red[900] }
                                                }}
                                            >
                                                Delete
                                            </Button> </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

        </Grid>
    );
};

export default UsersPage;
