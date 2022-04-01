import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "../Contexts/UserData";
import ClickState from "../Contexts/ClickState";
import CheckState from "../Contexts/CheckState";
import UserHabits from "../Contexts/UserHabits";
import LoginPage from "../Main/LoginPage";
import HabitsPage from "../Main/HabitsPage";
import UserHistory from "..//Main/UserHistoryPage";
import TodayPage from "../Main/TodayPage";
import CreateAccountPage from "../Main/CreateAccountPage";

function App() {
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [userData, setUserData] = useState();
  const [userHabits, setUserHabits] = useState([]);
  const [check, setCheck] = useState({size: 0, clicks: 0});

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <UserHabits.Provider value={{ userHabits, setUserHabits }}>
          <ClickState.Provider value={{ disableSubmit, setDisableSubmit }}>
            <CheckState.Provider value={{ check, setCheck }}>
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/hoje" element={<TodayPage />} />
                <Route path="/habitos" element={<HabitsPage />} />
                <Route path="/historico" element={<UserHistory />} />
                <Route path="/cadastro" element={<CreateAccountPage />} />
              </Routes>
            </CheckState.Provider>
          </ClickState.Provider>
        </UserHabits.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
