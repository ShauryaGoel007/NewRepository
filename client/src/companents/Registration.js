import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleInput = (e) => {
    let name;
    let value;
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    const res = await fetch("/register", {
      method: "POST",
      header: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
        cpassword: user.cpassword,
      }),
    });

    let data = await res.json();

    if (!data || data.status === 422) {
      window.alert("registration successful");
      console.log("registration notsuccessful");
    } else {
      window.alert("registration not successful");
      console.log("registration not notsuccessful");
    }
  };

  return (
    <div className="register">
      <div className="register-from">
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            Name
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="name"
            value={user.name}
            onChange={handleInput}
          />
        </div>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            Email
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="email"
            value={user.email}
            onChange={handleInput}
          />
        </div>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            Password
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="password"
            value={user.password}
            onChange={handleInput}
          />
        </div>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            cPassword
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="cpassword"
            value={user.cpassword}
            onChange={handleInput}
          />
        </div>
        <div className="btn">
          <button type="submit" onClick={handleSubmit}>
            submit
          </button>
        </div>
      </div>
      <div className="login-redirect">
        <Link to="/login">I am already registered</Link>
      </div>
    </div>
  );
};
