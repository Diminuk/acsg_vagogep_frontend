import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { updateProcessMode } from '../../store/actions/statusLedActions';
import { grey, red } from '@mui/material/colors';

const ModeSwitch = styled(Switch)(({ theme }) => ({
    width: 150,
    height: 40,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(108px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><g><path fill="white" d="M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10z"/><rect x="7" y="9" width="10" height="6" fill="white"/></g></svg>')`,
            },
            '&.Mui-disabled': {
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: grey[700],
                },
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: grey[900],
            },

        },
        '&.Mui-disabled': {
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: grey[300],
            },
        },
        '& + .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: grey[100],
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: grey[900],
        width: 36,
        height: 36,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path fill="white" d="M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10zm-5 4h2v8h-2v-6H9V9l2-1z"/></g></svg>')`, // Replace with your SVG path
        }
    },
    '& .MuiSwitch-track': {
        opacity: 1,

        borderRadius: 20 / 2,
    },
}));

const ChangeMode = () => {
    const dispatch = useDispatch();
    const mode = useSelector(state => state.statusled.processStatus['Mode']);
    const isProcessStarted = useSelector(state => state.statusled.processStatus['IsProcessStarted'])


    const handleChangeMode = (event) => {
        const newValue = event.target.checked;

        fetch('http://localhost:8000/api/update/process', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Mode: newValue })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                dispatch(updateProcessMode({ mode: newValue }))
                return response.json();
            })
            .then(data => {
                // Handle successful response
                console.log('Value posted successfully:', newValue);
            })
            .catch(error => {
                // Handle error
                console.error('Error posting value:', error);
            });
    };

    return (
        <Stack direction="row" justifyContent="center" spacing={1} alignItems="center">
            <Box
                sx={{
                    borderRadius: '16px',
                    padding: '8px',
                    backgroundColor: mode ? grey[500] : grey[100], // Change background color based on mode
                }}
            >
                <Typography sx={{ color: mode ? 'black' : 'black', fontWeight: 'bold' }}>Single size</Typography>
            </Box>
            <ModeSwitch
                disabled={isProcessStarted}
                checked={!!mode}
                onChange={handleChangeMode}
            />
            <Box
                sx={{
                    borderRadius: '16px',
                    padding: '8px',
                    backgroundColor: mode ? grey[900] : grey[700], // Change background color based on mode
                }}
            >
                <Typography sx={{ color: mode ? 'white' : 'white', fontWeight: 'bold' }}>Array size</Typography>
            </Box>
        </Stack>
    );
};

export default ChangeMode