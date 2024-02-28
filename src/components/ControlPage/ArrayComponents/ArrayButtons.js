import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

const ArrayButtons = () => {
    const isProcessStarted = useSelector(state => state.statusled.processStatus['IsProcessStarted']);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button size='large' variant="contained" disabled={isProcessStarted} sx={{ color: "black", fontWeight: 'bold', backgroundColor: "orange", '&:hover': { backgroundColor: 'orange' } }} >NEW</Button>
            <Button size='large' variant="contained" disabled={isProcessStarted} sx={{ color: "black", fontWeight: 'bold', backgroundColor: "orange", '&:hover': { backgroundColor: 'orange' } }} >IMPORT LOCAL</Button>
            <Button size='large' variant="contained" disabled={isProcessStarted} sx={{ color: "black", fontWeight: 'bold', backgroundColor: "orange", '&:hover': { backgroundColor: 'orange' } }} >IMPORT ONLINE</Button>
        </Box>
    );
};

export default ArrayButtons;
