import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './components/LoginForm/LoginComponent';
import ControlPage from './pages/ControlPage/ControlPage'; // Import the ControlPage component
import UsersPage from './pages/UsersPage/UsersPage'
import LogPage from './pages/LogPage/LogPage'
import DebugPage from './pages/DebugPage/DebugPage'
import ParemeterSettingsPage from './pages/ParameterSettingsPage/ParameterSettingsPage'
import WebSocketComponent from './components/Websocket/WebSocketComponent';

function App() {
  return (
    <>
      <WebSocketComponent ></WebSocketComponent>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/control" element={<ControlPage />} />
          <Route path="/log" element={<LogPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/debug" element={<DebugPage />} />
          <Route path="/change_parameters" element={<ParemeterSettingsPage />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
