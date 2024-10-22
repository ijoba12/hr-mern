import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./auth/SignIn";
import ForgotPassword from "./auth/ForgotPassword";
import Email from "./auth/Email";
import AdminDashboard from "./Pages/admin-dashboard/AdminDashboard";
import AdminSummary from "./Pages/admin-dashboard/AdminSummary";
import Employees from "./Pages/admin-dashboard/Employees";
import TaskBoard from "./Pages/admin-dashboard/TaskBoard";
import LeaveBoard from "./Pages/admin-dashboard/LeaveBoard";
import PayRoll from "./Pages/admin-dashboard/PayRoll";
import Settings from "./Pages/admin-dashboard/Settings";
import PersonalInfo from "./Pages/admin-dashboard/PersonalInfo";
import Documents from "./Pages/admin-dashboard/Document";
import Professional from "./Pages/admin-dashboard/Professional";
import AccountAccess from "./Pages/admin-dashboard/AccountAccess";
import Teams from "./Pages/admin-dashboard/Team";
import NewTeam from "./Pages/admin-dashboard/NewTeam";
import NewTask from "./Pages/admin-dashboard/NewTask";
import EditTeams from "./Pages/admin-dashboard/EditTeams";
import PayrollModal from "./Pages/admin-dashboard/PayRollModal";
import { Toaster } from "react-hot-toast";
import EmployeeDashboard from "./Pages/employee-dashboard/EmployeeDashboard";
import PrivateRoute from "./Util/PrivateRoute";
import RoleBasedRoute from "./Util/RoleBasedRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<} /> */}
          <Route path="/auth/sign-in" element={<SignIn />} />
          <Route path="/auth/forgotpassword" element={<ForgotPassword />} />
          <Route path="/auth/email/:resetToken" element={<Email />} />

          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute>
                <RoleBasedRoute requiredRole={["admin","super-admin"]}>
                 <AdminDashboard />{" "} 
                </RoleBasedRoute>
              </PrivateRoute>
            }
          >
            <Route path="" element={<AdminSummary />} />

            <Route path="/admin-dashboard/employees" element={<Employees />}>
              <Route
                path="/admin-dashboard/employees/teams"
                element={<Teams />}
              >
                <Route
                  path="/admin-dashboard/employees/teams/edit-teams"
                  element={<EditTeams />}
                />
                <Route
                  path="/admin-dashboard/employees/teams/newteams"
                  element={<NewTeam />}
                />
              </Route>
            </Route>
            <Route
              path="/admin-dashboard/employees/personal-info"
              element={<PersonalInfo />}
            >
              <Route
                path="/admin-dashboard/employees/personal-info/documents"
                element={<Documents />}
              />
              <Route
                path="/admin-dashboard/employees/personal-info/professional"
                element={<Professional />}
              />
              <Route
                path="/admin-dashboard/employees/personal-info/account-access"
                element={<AccountAccess />}
              />
            </Route>

            <Route path="/admin-dashboard/taskboard" element={<TaskBoard />} />
            <Route
              path="/admin-dashboard/leaveboard"
              element={<LeaveBoard />}
            />
            <Route path="/admin-dashboard/newtask" element={<NewTask />} />
            <Route path="/admin-dashboard/payroll" element={<PayRoll />}>
              <Route
                path="/admin-dashboard/payroll/payroll-modal"
                element={<PayrollModal />}
              />
            </Route>
            <Route path="/admin-dashboard/settings" element={<Settings />} />
          </Route>
          <Route
            path="/employee-dashboard"
            element={<EmployeeDashboard />}
          ></Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
