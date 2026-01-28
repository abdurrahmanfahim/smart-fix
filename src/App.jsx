import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import CallLogs from "./pages/CallLogs";
import Settings from "./pages/Settings";
import Appointments from "./pages/Appointments";
import Login from "./pages/Login";
import ProfileEdit from "./pages/Settings/profileEdit";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/call-logs" element={<CallLogs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/edit" element={<ProfileEdit />} />
          <Route path="/appointments" element={<Appointments />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
