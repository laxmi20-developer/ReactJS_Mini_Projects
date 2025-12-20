import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    const fakeJWT = "jwt_token_example_123"; // mock token
    login(fakeJWT, role);
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <button onClick={() => handleLogin("user")}>Login as User</button>
      <button onClick={() => handleLogin("admin")}>Login as Admin</button>
    </div>
  );
}

export default Login;
