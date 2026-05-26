import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

export default function App() {
  const [page, setPage] = useState("home");
  const [userData, setUserData] = useState(null);

  const navigate = (to) => setPage(to);

  const handleRegister = (data) => {
    setUserData(data);
    navigate("profile");
  };

  const handleLogin = (data) => {
    // Use existing userData or set defaults
    setUserData((prev) => prev || { fullName: "Marry Doe", email: data.email, phone: "", company: "" });
    navigate("profile");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {page === "home" && <Home navigate={navigate} />}
      {page === "login" && <Login navigate={navigate} onLogin={handleLogin} />}
      {page === "register" && <Register navigate={navigate} onRegister={handleRegister} />}
      {page === "profile" && <Profile navigate={navigate} userData={userData} />}
    </div>
  );
}