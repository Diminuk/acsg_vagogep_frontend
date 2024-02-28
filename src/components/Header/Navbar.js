import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


function NavBar() {
    //const isAdmin = useSelector(state => state.isAdmin);
    const isAdmin = true;
    const history = useNavigate();

    const handleNavigate = (route) => {
        history(route);
    };


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ACSG Kft.
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={() => handleNavigate('/control')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            PROCESS
                        </Button>
                        {isAdmin && (
                            <Button
                                onClick={() => handleNavigate('/change_parameters')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                CHANGE PARAMETERS
                            </Button>
                        )}
                        <Button
                            onClick={() => handleNavigate('/log')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            HISTORY
                        </Button>
                        {isAdmin && (
                            <>
                                <Button
                                    onClick={() => handleNavigate('/users')}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    USERS
                                </Button>
                                <Button
                                    onClick={() => handleNavigate('/debug')}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    DEBUG
                                </Button>
                            </>
                        )}
                    </Box>
                    <Box>
                        <Button
                            onClick={() => handleNavigate('/login')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            LOGOUT
                        </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
