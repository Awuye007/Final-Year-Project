import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserContext } from "../../shared/context/UserContext";
import { passwordValidation } from "../../shared/core/validations";
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { login } = useUserContext();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "email") {
      if (!value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        setErrors({ ...errors, email: "Invalid email address" });
      } else if (!value) {
        setErrors({ ...errors, email: "Email is required" });
      } else {
        setErrors({ ...errors, email: "" });
      }
    }

    if (name === "password") {
      if (passwordValidation(value)) {
        setErrors({ ...errors, password: passwordValidation(value) });
      } else {
        setErrors({ ...errors, password: "" });
      }
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (errors.email || errors.password) {
        return;
      }
      setLoading(true);

      const resp = await login(form.email, form.password);

      setLoading(false);
      if (resp) {
        navigate("/");
      } else {
        toast.error("Email or password is incorrect");
      }
    } catch (error) {
      setLoading(false);
      toast.error(`${error.code}: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-svh bg-primary">
      <div className="flex w-full mx-4 md:w-2/3 lg:w-1/2 min-h-96 card rounded-xl overflow-hidden bg-grey">
        <div className="flex-1 hidden md:block">
          <img
            src="https://images.pexels.com/photos/1667849/pexels-photo-1667849.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="hold-hands"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <form
            className="flex flex-col gap-5 items-center px-10 w-full"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl font-bold text-white">Welcome to LIV</h2>
            <input
              type="email"
              className="p-2 border-b border-gray-300 w-full bg-transparent outline-none"
              placeholder="Email"
              autoComplete="off"
              onChange={handleChange}
              name="email"
              value={form.email}
            />
            {errors.email && (
              <small className="text-red-500">{errors.email}</small>
            )}
            <input
              type="password"
              className="p-2 border-b border-gray-300 w-full bg-transparent outline-none"
              placeholder="Password"
              name="password"
              autoComplete="off"
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && (
              <small className="text-red-500">{errors.password}</small>
            )}
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-md px-10 hover:opacity-80 transition-all outline-none"
            >
              {loading ? (
                <svg
                  className="text-gray-300 animate-spin"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                    d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-900"
                  ></path>
                </svg>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
