import { Routes, Route } from "react-router-dom";
import OpenWeb from "./Pages/openWeb/OpenWeb";
import Login from "./Pages/login/Login";
import Signup from "./Pages/signup/Signup";
import Dashboard from "./Pages/dashboard/Dashboard";
import Tickets from "./Pages/ticket/Tickets";
import Requests from "./Pages/requests/Requests";
import Feedback from "./Pages/feedback/Feedback";
import Profile from "./Pages/profile/Profile";
import Report from "./Pages/report/Reports";
import UserDashboard from "./user_pages/user_dashboard/UserDashboard";
import UserTicket from "./user_pages/user_ticket/UserTicket";

const App = () => {
  return (
      <div>
        <Routes>

          {/* Public Web Page + Login and Signup */}
          <Route index path='/' element={<OpenWeb />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Admin Side Interface */}
          <Route path="/AdminDashboard" element={<Dashboard/>} />
          <Route path="/tickets" element={<Tickets/>} />
          <Route path="/request" element={<Requests/>} />
          <Route path="/feedback" element={<Feedback/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/report" element={<Report/>} />

          {/* User Side Interface */}
          <Route path="/UserDashboard" element={<UserDashboard/>} />
          <Route path="/UserTicket" element={<UserTicket/>} />

        </Routes>
      </div>
  );
}

export default App;
