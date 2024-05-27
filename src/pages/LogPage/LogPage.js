import React from 'react';
import Grid from '@mui/material/Grid';
import NavBar from '../../components/Header/Navbar';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import SelectDateDialog from './SelectDatePopup';
import { red } from '@mui/material/colors';

const columns = [
    {
        field: 'date', headerName: 'Date', width: 180,
        valueGetter: (params) =>
            `${params.row.date || ''}`,
    },
    {
        field: 'type', headerName: 'Type', width: 120, sortable: false,
        valueGetter: (params) =>
            `${params.row.type || ''}`,
    },
    {
        field: 'mode', headerName: 'Mode', width: 120, sortable: false,
        valueGetter: (params) =>
            `${params.row.mode || ''}`,
    },
    {
        field: 'autojump', headerName: 'Autojump', width: 120, sortable: false,
        valueGetter: (params) =>
            `${params.row.autojump || ''}`,
    },
    {
        field: 'length', headerName: 'Length', width: 130,
        valueGetter: (params) =>
            `${params.row.length || ''}`,
    },
    {
        field: 'success', headerName: 'Success', width: 130, sortable: false,
        valueGetter: (params) =>
            `${params.row.success || ''}`,
    },
    {
        field: 'model', headerName: 'Model', width: 130, sortable: false,
        valueGetter: (params) =>
            `${params.row.model || ''}`,
    },
    {
        field: 'comment', headerName: 'Comment', width: 130, sortable: false,
        valueGetter: (params) =>
            `${params.row.comment || ''}`,
    },
];


const LogPage = () => {

    const [currentDate, setCurrentDate] = useState({ value: '', label: 'None' });
    const [rows, setRows] = useState([]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleLoadData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/get_day_log?date=${currentDate.label}`, {
                method: 'GET',
                params: JSON.stringify({ date: currentDate.label }),

            });
            const data = await response.json();
            console.log(data.data);
            setRows(data.data);
            handleClose();
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    const rowsWithIds = rows.map((row, index) => ({ id: index + 1, ...row }));

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <NavBar />
                <SelectDateDialog open={open} onClose={handleClose} onSubmit={handleLoadData} currentdate={currentDate} changecurrentdate={setCurrentDate} />
            </Grid>
            <Grid item xs={6}>
                <Box flexDirection={'row'} display={'flex'} alignContent={'center'} alignItems={"center"}>
                    <Button
                        onClick={handleOpen}
                        variant='contained'
                        color='primary' sx={{
                            ml: 3,
                            mr: 4,
                            backgroundColor: red[900],
                            '&:hover': {
                                backgroundColor: red[900],
                            },
                            height: 50,
                            width: 250
                        }}>
                        <Typography fontWeight={"bold"} fontSize={20}>
                            Choose Date
                        </Typography>
                    </Button>
                    <Typography fontWeight={"bold"} fontSize={20} sx={{ width: 500 }}>
                        Currently selected date: {currentDate.label}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} >
                <DataGrid
                    rows={rowsWithIds}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 50 },
                        },
                    }}
                    pageSizeOptions={[50]}
                    sx={{
                        m: 2,
                        height: 600,
                        '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
                            width: '15px',
                        },
                        '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
                            backgroundColor: '#888',
                            borderRadius: '5px',
                        },
                        '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover': {
                            backgroundColor: '#555',
                        },
                        '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track:hover': {
                            backgroundColor: '#f4f4f4',
                        },
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default LogPage;
