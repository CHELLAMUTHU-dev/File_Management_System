import { use, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axiosInstance";

export const Register = () => {
  const [form, setForm] = useState({
    name: "",
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
      await api.post("/auth/register", form);
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.message || "Registeration Failed");
    }
  };

  return (
    <div className="register-page auth-page">
      <div className="form-card">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={eventHandler}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={eventHandler}
          />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={eventHandler}
          />
          <div className="password-checkbox">
            <input type="checkbox" id="showPassword" onClick={() => setIsShowPassword(prev => !prev)}/>
            <label htmlFor="showPassword">Show Password</label>
          </div>
          <button type="submit">Register</button>
          {error && <p className="error">{error}</p>}
          <p>
            Already have ab Accoun?<Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
