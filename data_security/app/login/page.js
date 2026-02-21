"use client";

import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);

      if (response.status === 200) {
        setFormData(result.email);
        setData({ email: "", password: "" });
        console.log("Login successfully.", result);
      } else {
        console.error("Failed Inside Try Login.", result.error);
      }
    } catch (error) {
      console.error("Failed Login.", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor="email">Email</label>
        <input
          className="p-4"
          placeholder="Email"
          required
          value={data.email}
          name="email"
          id="email"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          className="p-4"
          placeholder="Password"
          required
          name="password"
          id="password"
          value={data.password}
          onChange={handleChange}
        />
        <button type="submit" className="p-4" disabled={loading}>
          {loading ? "loading.." : "Submit"}
        </button>
      </form>

      {formData && <p>{formData}</p>}
    </>
  );
};

export default Login;
