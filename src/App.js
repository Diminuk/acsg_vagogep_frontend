import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './components/LoginForm/LoginComponent';
import ControlPage from './pages/ControlPage/ControlPage'; // Import the ControlPage component
import UsersPage from './pages/UsersPage/UsersPage'
import LogPage from './pages/LogPage/LogPage'
import DebugPage from './pages/DebugPage/DebugPage'
import ParemeterSettingsPage from './pages/ParameterSettingsPage/ParameterSettingsPage'
import WebSocketComponent from './components/Websocket/WebSocketComponent';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserControlComponent from './pages/UserControlPage/UserControlComponent';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';

import useWebSocket, { ReadyState } from "react-use-websocket"
import { useEffect, useState } from 'react';
import { updateStatusFromWebsocket } from './store/actions/statusLedActions';
import { UseDispatch } from 'react-redux';

function App() {
  // Access login state from Redux store
  const { isAuthenticated, isAdmin } = useSelector(state => state.auth);

  const dispatch = useDispatch()

  return (
    <Box sx={{ display: 'flex', bgcolor: grey[400], height: 800 }}>
      {<WebSocketComponent />}
      <Router>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/user_control" element={<UserControlComponent />} />
          {isAdmin && (
            <>
              <Route path="/log" element={<LogPage />} />
              <Route path="/control" element={<ControlPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/debug" element={<DebugPage />} />
              <Route path="/change_parameters" element={<ParemeterSettingsPage />} />
            </>
          )}
        </Routes>

        {!isAuthenticated && (
          <Navigate to="/login" />
        )

        }
      </Router>
    </Box>
  );
}

export default App;
