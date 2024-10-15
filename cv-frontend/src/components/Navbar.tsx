import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiGithub } from "react-icons/fi";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleContactClick = () => {
        if (location.pathname !== "/") {
            navigate("/#Kontakt");
        } else {
            const contactSection = document.getElementById("Kontakt");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const navigateToHome = () => {
        navigate("/");
    };

    const navigateToPortfolio = () => {
        navigate("/portfolio");
    };

    return (
        <nav className="bg-white shadow-md py-8">
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                {/* Left section: Group name */}
                <div onClick={navigateToHome} className="text-2xl cursor-pointer font-bold text-gray-800">
                    Gruppe 8
                </div>
                {/* Right section: Links and Icons */}
                <div className="flex space-x-6 items-center">
                    <a href="/" className="text-gray-600 hover:text-gray-900">
                        Hjem
                    </a>
                    <button onClick={navigateToPortfolio} className="text-gray-600 hover:text-gray-900">
                        Portefølje
                    </button>
                    <button onClick={handleContactClick} className="text-gray-600 hover:text-gray-900">
                        Kontakt oss
                    </button>
                    {/* Icons */}
                    <a
                        href="https://github.com/Maxlee136/IS-310-Gruppe-8"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiGithub className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
