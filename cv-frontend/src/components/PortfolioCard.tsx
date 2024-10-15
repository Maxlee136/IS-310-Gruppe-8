import { Link } from 'react-router-dom';
import React from "react";
import { Project } from "../Interface/Project";

// Define the interface with the project property
interface PortfolioCardProps {
    project: Project;
}

// Correctly declare the PortfolioCard component
const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
    return (
        <Link
            to={`/project/${project.id}`}
            className="w-full bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden flex flex-col transition-transform transform hover:scale-105 hover:shadow-lg"
        >
            <div className="w-full flex items-center justify-center p-4">
                {/* Constrain the size of the image */}
                <img
                    className="object-center object-contain w-full max-w-xs h-32"
                    src={project.image}
                    alt={`Project of ${project.name}`}
                />
            </div>
            <div className="w-full text-left p-4 space-y-2 flex flex-col justify-between">
                <div>
                    <p className="text-lg text-gray-700 font-bold">{project.name}</p>
                    <p className="text-sm text-gray-400 font-normal">{project.role}</p>
                    <br/>
                    <p className="text-sm leading-relaxed text-gray-500 font-normal">{project.description}</p>
                </div>
                <p className="text-sm leading-relaxed text-customGreen font-normal">
                    {project.clickOnCard}
                </p>
            </div>
        </Link>
    );
};

export default PortfolioCard;
