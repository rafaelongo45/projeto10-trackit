import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "../Contexts/UserData";
import LoginPage from "../LoginPage";
import HabitsPage from "../HabitsPage";
import TodayPage from "../Main/Today";
import CreateAccountPage from "../CreateAccountPage";

function App() {
  const [userData, setUserData] = useState();

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/cadastro" element={<CreateAccountPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
