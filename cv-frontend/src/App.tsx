import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import HomePage from "./pages/Homepage";
import ProfilePage from "./pages/ProfilePage";
import React from "react";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile/:id" element={<ProfilePage />} />
            </Routes>
        </Router>
    );
}

export default App;
