// WebSocket setup in your React component
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStatusFromWebsocket } from '../../store/actions/statusLedActions'
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Paper } from '@mui/material';
import { Typography } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import useWebSocket from 'react-use-websocket';

const WebSocketComponent = () => {
    const [messages, setMessages] = useState([]);

    const dispatch = useDispatch();

    const { sendMessage, lastMessage, readyState } = useWebSocket('ws://localhost:8000/ws', {
        onOpen: () => console.log('WebSocket connection established.'),
        onClose: () => console.log('WebSocket connection closed.'),
        onMessage: (message) => {
            setMessages((prev) => [...prev, "Data"]);
            console.log(message)
            const data = JSON.parse(message.data);
            dispatch(updateStatusFromWebsocket(data));
        },
        shouldReconnect: (closeEvent) => {
            console.log('WebSocket connection closed. Attempting to reconnect...', closeEvent);
            return true; // This will trigger the reconnection
        },
    });

    return (
        <>
        </>

    );
};

/*const WebSocketComponent = () => {
    const [isConnected, setIsConnected] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const connectWebSocket = () => {
            const socket = new WebSocket('ws://localhost:8000/api/ws');

            socket.onopen = () => {
                console.log('WebSocket connected');
                setIsConnected(true);
            };

            socket.onmessage = (event) => {
                console.log("--------GOT WEBSEOCKET NOTIFICATION--------")
                const data = JSON.parse(event.data);
                dispatch(updateStatusFromWebsocket(data));
            };

            socket.onclose = () => {
                console.log('WebSocket disconnected');
                setIsConnected(false);
                // Try to reconnect after a delay
                setTimeout(connectWebSocket, 3000); // Retry after 3 seconds
            };

            return () => {
                socket.close();
            };
        };

        connectWebSocket();
    }, []);

    if (!isConnected) {
        return (

            <Backdrop open sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Paper elevation={16} sx={{ alignItems: 'center', alignContent: 'center', display: 'flex', width: 300, height: 150, opacity: 1, backgroundColor: 'red' }}>
                    <Box flexDirection={'column'} sx={{ alignItems: 'center', alignContent: 'center', display: 'flex', width: 300, height: 150, }}>
                        <Typography color={'white'} fontWeight="bold" fontSize={20} sx={{ m: 3 }}>
                            Connecting to backend...
                        </Typography>
                        <CircularProgress sx={{ color: 'white' }} />
                    </Box>
                </Paper>
            </Backdrop>

        )
    }

    return null;
};
*/
export default WebSocketComponent;
