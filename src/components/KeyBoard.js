import React, { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { Box } from '@mui/material';
import { grey, red } from '@mui/material/colors';

const OnScreenKeyboard = ({ onClick, left, right, top, transform }) => {
    const keyboardKeys = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '<', 'CLEAR'
    ];

    return (
        <Paper elevation={10} sx={{
            width: 265,
            backgroundColor: 'white',
            alignContent: 'center',
            alignItems: 'center',
            display: 'flex',
            zIndex: 9000,
            position: 'fixed',
            left: left,
            transform: transform,
            right: right,
            bgcolor: grey[300],
            flexDirection: 'row',
            top: top

        }}>
            <Grid container spacing={1} sx={{
                m: 1,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {keyboardKeys.map(key => (
                    <Button variant="contained"
                        size='large'
                        onClick={() => onClick(key)}
                        sx={{
                            width: 80,
                            height: 80,
                            m: '1px',
                            bgcolor: key === 'CLEAR' || key === "<" ? red[900] : grey[900],
                            '&:hover': {
                                bgcolor: key === 'CLEAR' || key === "<" ? red[900] : grey[900]
                            },
                        }}>
                        {key}
                    </Button>
                ))}
            </Grid>
        </Paper>
    );
};

const KeyboardTextField = ({ sx, disabledBool, onChange, valueProp, inputadornment, handleChange, handlePost, idProp, left, right, top, transform, label }) => {
    const [showKeyboard, setShowKeyboard] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const keyboardRef = useRef(null);
    const id_ = idProp;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (keyboardRef.current && !keyboardRef.current.contains(event.target)) {
                setShowKeyboard(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClick = () => {
        setShowKeyboard(!showKeyboard);
    };

    const handleKeyboardClick = (key) => {
        handleChange(key, id_);
        //handlePost();
    };

    return (
        <>
            <TextField
                sx={sx}
                disabled={disabledBool}
                onChange={onChange}
                value={valueProp}
                variant="outlined"
                fullWidth
                onClick={handleClick}
                label={label}
                InputProps={{
                    startAdornment: <InputAdornment position="start">{inputadornment}</InputAdornment>,
                }} size="small"
            />
            {showKeyboard && <Box ref={keyboardRef}>
                <OnScreenKeyboard onClick={handleKeyboardClick}
                    left={left}
                    right={right}
                    transform={transform}
                    top={top}
                    label={label}
                />
            </Box>}
        </>
    );
};

export default KeyboardTextField;
