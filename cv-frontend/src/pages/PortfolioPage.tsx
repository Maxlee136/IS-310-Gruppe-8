import { Project } from "../Interface/Project";
import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import Navbar from "../components/Navbar";

const PortfolioPage = () => {
    const projects: Project[] = [
        {
            id: 1,
            name: 'Nøsted',
            role: 'Backend',
            image: '/nosted.jpg',
            description: 'Nøsted focuses on providing innovative solutions for warehouse automation. Our work involved developing an AI-powered system to optimize inventory management and reduce human error.',
            clickOnCard: 'Klikk på meg for mer informasjon!',
        },
        {
            id: 2,
            name: 'Enthemed',
            role: 'Fullstack',
            image: '/enthemed.png',
            description: 'Enthemed is a healthcare startup revolutionizing patient care through a telemedicine platform. We contributed to building a full-stack system for real-time consultations between doctors and patients.',
            clickOnCard: 'Klikk på meg for mer informasjon!',
        },
        {
            id: 3,
            name: 'Padlegleden',
            role: 'Frontend',
            image: '/padlegleden.jpg',
            description: 'Padlegleden is a platform that helps people book kayaking adventures. We designed an intuitive user interface to enhance the customer experience while exploring and booking various outdoor activities.',
            clickOnCard: 'Klikk på meg for mer informasjon!',
        },
        {
            id: 4,
            name: 'Smartsight',
            role: 'Cybersecurity',
            image: '/uia.png',
            description: 'Smartsight is a cybersecurity tool that detects and prevents security threats. Our team was involved in developing the backend architecture to ensure data protection and enhance threat detection.',
            clickOnCard: 'Klikk på meg for mer informasjon!',
        }
    ];

    return (
        <><Navbar/>
            <div className="max-w-6xl mx-auto mt-20">
                <h1 className="font-bold text-3xl md:text-2xl lg:text-4xl font-heading text-gray-900 relative inline-block">
                    Prosjekter gruppen har deltatt i
                    <span className="absolute -bottom-4 left-0.5 w-44 h-0.5 bg-customGreen"></span>
                </h1>
                {/* Grid of Project Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
                    {projects.map((project) => (
                        <PortfolioCard key={project.id} project={project}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PortfolioPage;
