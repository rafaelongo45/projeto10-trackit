import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../LoginPage";
import CreateAccountPage from "../CreateAccountPage"
import HabitsPage from "../HabitsPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element = {<CreateAccountPage />} />
                <Route path= "/habitos" element = {<HabitsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;