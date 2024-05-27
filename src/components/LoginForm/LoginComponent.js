import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login_user, login_admin } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import KeyboardTextFieldWithFullKeyboard from '../FullKeyboard';
import { grey, red } from '@mui/material/colors';
import { Paper } from '@mui/material';
import AcsgLogo from '../../static/AcsgLogoComponent';
const defaultTheme = createTheme();

export default function LoginComponent() {

    const history = useNavigate();

    const handleNavigate = (route) => {
        history(route);
    };

    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const keyBoardUsername = (key) => {
        if (key === "<") {
            setUsername(username.slice(0, -1));
        }
        else if (key === "CLEAR") {
            setUsername("");
        }
        else {
            setUsername(username + key);
        }
    }
    const keyBoardPassword = (key) => {
        if (key === "<") {
            setPassword(password.slice(0, -1));
        }
        else if (key === "CLEAR") {
            setPassword("");
        }
        else {
            setPassword(password + key);
        }
    }



    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            username: username,
            password: password,
        });
        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: username, password: password })
            });
            if (!response.ok) {
                setMsg("Incorrect username or password")
                throw new Error('Failed to login');
            }
            const response_json = await response.json();
            const message = response_json.message;
            if (message === "admin") {
                dispatch(login_admin());
                setMsg("Success - Admin");
                handleNavigate('/user_control');
            }
            else if (message === "operator") {
                dispatch(login_user());
                setMsg("Succes - Operator");
                handleNavigate('/user_control');
            }
            else {
                setMsg(message);
            }
        } catch (error) {
            setError('An error occurred while creating the user');
        }
    };

    return (
        <Paper
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                left: '50%',
                top: '5%',
                transform: 'translateX(-50%)',
                p: 2,
                bgcolor: grey[200]
            }}
        >
            <Typography component="h1" variant="h5" fontWeight='bold' fontSize={30} sx={{}}>
                Sign in
            </Typography>
            <AcsgLogo></AcsgLogo>
            <Box component="form" onSubmit={handleSubmit} noValidate
                sx={{
                    mt: 1,
                    width: "25em",
                    bgcolor: grey[200],

                }}>
                <KeyboardTextFieldWithFullKeyboard
                    label="Username"
                    valueProp={username}
                    handleChange={keyBoardUsername}
                    sx={{
                        mb: 1,
                        mt: 1
                    }}
                    right={"0%"}
                    left={"50%"}
                    top={"110%"}
                    transform={'translateX(-50%)'}
                />
                <KeyboardTextFieldWithFullKeyboard
                    label="Password"
                    valueProp={password}
                    handleChange={keyBoardPassword}
                    right={"0%"}
                    left={"50%"}
                    top={"110%"}
                    transform={'translateX(-50%)'}
                    password={true}

                />
                <Typography
                    variant='h6'
                    component="h6"
                    align='center'
                    sx={{
                        color: red[500],
                        mt: 2
                    }}
                >
                    {msg}
                </Typography>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor: red[900], '&:hover': { backgroundColor: red[900] } }}
                >
                    Sign In
                </Button>
            </Box>
        </Paper >

    );
}
