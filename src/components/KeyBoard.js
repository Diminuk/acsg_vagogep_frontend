import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';

const OnScreenKeyboard = ({ onClick }) => {
    const keyboardKeys = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '<', 'CLEAR'
    ];

    return (
        <Paper elevation={10} sx={{
            width: 270,
            backgroundColor: 'white',
            alignContent: 'center',
            alignItems: 'center',
            display: 'flex',
            zIndex: 9999,
            position: 'fixed',
            top: '60%',
            right: 400,
            transform: 'translateY(-50%)'
        }}>
            <Grid container spacing={1} sx={{ m: 1 }}>
                {keyboardKeys.map(key => (
                    <Button variant="contained" size='large' onClick={() => onClick(key)} sx={{ width: 80, height: 80, m: '1px' }}>
                        {key}
                    </Button>
                ))}
            </Grid>
        </Paper>
    );
};

const KeyboardTextField = () => {
    const [showKeyboard, setShowKeyboard] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        setShowKeyboard(!showKeyboard);
    };

    const handleKeyboardClick = (key) => {
        setInputValue(inputValue + key);
    };

    return (
        <>
            <TextField
                label="Input"
                variant="outlined"
                value={inputValue}
                fullWidth
                onClick={handleClick}
            />
            {showKeyboard && <OnScreenKeyboard onClick={handleKeyboardClick} />}
        </>
    );
};

export default KeyboardTextField;
