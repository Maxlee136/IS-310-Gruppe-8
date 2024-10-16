import { Project } from "../Interface/Project";
import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import Navbar from "../components/Navbar";

const PortfolioPage = () => {
    const projects: Project[] = [
        {
            id: 1,
            name: 'Nøsted',
            role: 'Fullstack',
            image: '/nostedlogo.jpg',
            description: 'I 3.semester utviklet gruppen en webapplikasjon for bedriften Nøsted AS, prosjektet ga oss innsikt i SCRUM, fullstack utvikling og samarbeid rundt et prosjekt',
            clickOnCard: 'Klikk her for å lære mer om Nøsted prosjektet!',
        },
        {
            id: 2,
            name: 'Enthemed',
            role: 'Fullstack',
            image: '/enthemed.png',
            description: 'Enthemed er en fullstack SAAS løsning med fokus på å gjøre det enkelt å starte egen nettbutikk.',
            clickOnCard: 'Klikk her for å lære mer om Enthemed!',
        },
        {
            id: 3,
            name: 'Padlegleden',
            role: 'Frontend',
            image: '/padlegleden.png',
            description: 'Padlegleden tilbyr padletjenester i Kristiansand og Lillesand området. Vi jobbet sammen med Gründer Hakeem Teland på et spennende prosjekt ',
            clickOnCard: 'Klikk her for å lære mer om prosjektet med Padlegleden!',
        },
        {
            id: 4,
            name: 'Smartsight',
            role: 'Prototype',
            image: '/uia.png',
            description: 'SmartSight er et prosjekt som har som mål å lage smartbriller til personer med makuladegenerasjon (MD) og retinitis pigmentosa (RP), slik at de skal få et hjelpemiddel som kan gjøre hverdagen deres enklere.',
            clickOnCard: 'Klikk på meg for mer informasjon!',
        },
        {
            id: 5,
            name: 'Egde',
            role: 'KI-prosjekt',
            image: '/egde.png',
            description: 'Praksisprosjekt hos Egde der vi har jobbet med Microsoft Azure, deployment og justering av KI-modeller samt RAG-modell deployment.',
            clickOnCard: 'Klikk på meg for mer informajon om Egde prosjektet!',
        },
        {
            id: 6,
            name: 'IOT-prosjekt',
            role: 'arduino-prosjekt',
            image: '/arduino.png',
            description: 'Utvikling av applikasjon for måling av muskelaktivitet, og repetisjonstelling.  ',
            clickOnCard: 'Klikk på meg for mer informajon om IOT prosjektet!',
        }
    ];

    return (
        <><Navbar/>
            <div className="max-w-6xl mx-auto mt-20">
                <h1 className="pl-4 font-bold text-3xl md:text-2xl lg:text-4xl font-heading text-gray-900 relative inline-block">
                    Prosjekter gruppen har deltatt i
                    <span className="absolute -bottom-4 left-0.5 w-full h-0.5 bg-customGreen"></span>
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
