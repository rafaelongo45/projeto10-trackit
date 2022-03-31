import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "../Contexts/UserData";
import ClickState from "../Contexts/ClickState";
import UserHabits from "../Contexts/UserHabits";
import LoginPage from "../LoginPage";
import HabitsPage from "../HabitsPage";
import TodayPage from "../Main/Today";
import CreateAccountPage from "../CreateAccountPage";

function App() {
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [userData, setUserData] = useState();
  const [userHabits, setUserHabits] = useState([]);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <UserHabits.Provider value={{ userHabits, setUserHabits }}>
          <ClickState.Provider value={{ disableSubmit, setDisableSubmit }}>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/hoje" element={<TodayPage />} />
              <Route path="/habitos" element={<HabitsPage />} />
              <Route path="/cadastro" element={<CreateAccountPage />} />
            </Routes>
          </ClickState.Provider>
        </UserHabits.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
