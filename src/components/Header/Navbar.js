import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { logout } from '../../store/actions/authActions';
import { grey, red } from '@mui/material/colors';
import IconWithSvg from '../../static/AcsgLogoComponent';
import AcsgLogo from '../../static/AcsgLogoComponent';
function NavBar() {
    const isAdmin = useSelector(state => state.auth.isAdmin);

    const dispatch = useDispatch();

    const history = useNavigate();

    const handleNavigate = (route) => {
        history(route);
    };

    const handleLogout = () => {
        dispatch(logout);
        handleNavigate("/login");
    }


    return (
        <AppBar
            sx={{

                bgcolor: grey[800]
            }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AcsgLogo></AcsgLogo>
                    <Box sx={{ ml: 3, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={() => handleNavigate('/user_control')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            OPERATOR PROCESS
                        </Button>
                        {isAdmin && (
                            <>
                                <Button
                                    onClick={() => handleNavigate('/control')}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    ADVANCED PROCESS
                                </Button>
                                <Button
                                    onClick={() => handleNavigate('/change_parameters')}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    CHANGE PARAMETERS
                                </Button>
                                <Button
                                    onClick={() => handleNavigate('/log')}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    HISTORY
                                </Button>
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
                            onClick={handleLogout}
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
