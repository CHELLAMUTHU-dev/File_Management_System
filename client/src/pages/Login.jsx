import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axiosInstance";
import { setToken } from "../utils/auth";

export const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();

  const eventHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/auth/login", form);
      setToken(data.token);
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="login-page auth-page">
      <div className="form-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={eventHandler}
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={eventHandler}
            required
          />
          <div className="password-checkbox">
            <input
              type="checkbox"
              id="showPassword"
              onClick={() => setIsShowPassword((prev) => !prev)}
            />
            <label htmlFor="showPassword">Show Password</label>
          </div>
          <button type="submit">Login</button>
          {error && <p className="error">{error}...</p>}
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
