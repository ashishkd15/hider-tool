import { useState } from "react";

export default function Login({ onLogin }) {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "12345") {
      localStorage.setItem("isLoggedIn", true);
      onLogin(true);
    } else {
      alert("Wrong password!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1">
        Login
      </button>
    </form>
  );
}
