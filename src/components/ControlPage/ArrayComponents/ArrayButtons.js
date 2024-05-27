import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import EditArrayDialog from '../../../pages/ControlPage/EditArrayPopup';
import { useState } from 'react';
import ImportLocalArrayPopup from '../../../pages/ControlPage/ImportLocalPopup';
import { grey, red } from '@mui/material/colors';

const ArrayButtons = () => {

    const [open, setOpen] = useState(false);
    const [currentNumber, setCurrentNumber] = useState(2);

    const { isAuthenticated, isAdmin } = useSelector(state => state.auth);

    const [data, setData] = useState({
        name: '',
        elements: [{ number: 1, length: 0, cutDelay: 0, speed: 1, acc: 1, dec: 1, infPercent: 0, infDelay: 0, count: 0, ph: 0 }
        ]
    });
    const resetData = () => {
        setData(prevState => ({
            name: "",
            elements: [{ number: 1, length: 0, cutDelay: 0, speed: 1, acc: 1, dec: 1, infPercent: 0, infDelay: 0, count: 0, ph: 0 }]
        }));
    }

    const handleOpen = () => {
        resetData();
        setCurrentNumber(2);
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleEditArray = () => {
        return null;
    }

    const [openLocal, setOpenLocal] = useState(false);
    const handleOpenLocal = () => {
        setOpenLocal(true);
    }
    const handleCloseLocal = () => {
        setOpenLocal(false);
    }

    const isProcessStarted = useSelector(state => state.statusled.processStatus['IsProcessStarted']);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>

            <EditArrayDialog
                open={open}
                onClose={handleClose}
                onSubmit={handleEditArray}
                data={data}
                setData={setData}
                currentNumber={currentNumber}
                setCurrentNumber={setCurrentNumber}
            >
            </EditArrayDialog>
            <ImportLocalArrayPopup
                open={openLocal}
                onClose={handleCloseLocal}
                onSubmit={handleEditArray}
            ></ImportLocalArrayPopup>
            {
                isAdmin &&
                <Button onClick={handleOpen}
                    size='large'
                    variant="contained"
                    disabled={isProcessStarted}
                    sx={{
                        color: "white",
                        fontWeight: 'bold',
                        backgroundColor: red[900],
                        '&:hover': { backgroundColor: red[800] }
                    }} >NEW</Button>
            }
            <Button onClick={handleOpenLocal}
                size='large'
                variant="contained"
                disabled={isProcessStarted}
                sx={{
                    color: "white",
                    fontWeight: 'bold',
                    backgroundColor: red[900],
                    '&:hover': { backgroundColor: red[800] }
                }} >IMPORT LOCAL</Button>
            <Button
                size='large'
                variant="contained"
                disabled={isProcessStarted}
                sx={{
                    color: "white",
                    fontWeight: 'bold',
                    backgroundColor: red[900],
                    '&:hover': { backgroundColor: red[800] }
                }} >IMPORT ONLINE</Button>
        </Box>
    );
};

export default ArrayButtons;
