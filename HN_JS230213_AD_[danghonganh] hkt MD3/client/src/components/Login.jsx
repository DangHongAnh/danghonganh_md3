import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const baseURL = "http://localhost:3002/api/v1";
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${baseURL}/user`, user)
      .then((res) => {
        console.log(res.data);
        if (res.data.status == "success") {
          navigate("/todo");
          localStorage.setItem("user", JSON.stringify(res.data.user));
        } else {
          alert("Sai tên đăng nhập hoặc mật khẩu");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Đăng Nhập</h2>
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Tên Đăng Nhập
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Tên đăng nhâp"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Mật khẩu"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
