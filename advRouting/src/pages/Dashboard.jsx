import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/styles.css";

function Dashboard() {
  const { logout, role } = useAuth();

  return (
    <div className="container">
      <h2>Dashboard ({role})</h2>

      <nav>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
        {role === "admin" && <Link to="admin">Admin Panel</Link>}
        <button onClick={logout}>Logout</button>
      </nav>

      <Outlet />
    </div>
  );
}

export default Dashboard;
