import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import HomePage from "./pages/Homepage";
import ProfilePage from "./pages/ProfilePage";
import React from "react";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectPage from "./pages/ProjectPage";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/profile/:id" element={<ProfilePage />} />
                <Route path="/project/:id" element={<ProjectPage />} />
            </Routes>
        </Router>
    );
}

export default App;
