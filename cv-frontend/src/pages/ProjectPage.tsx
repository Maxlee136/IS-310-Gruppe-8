import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Project } from "../Interface/Project"; // Assuming Project interface is available
import Navbar from "../components/Navbar"; // Ensure this path is correct

const ProjectPage: React.FC = () => {
    const { id } = useParams<string>();
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        const fetchProjectData = async () => {
            const projects: Project[] = [
                {
                    id: 1,
                    name: 'Nøsted',
                    role: 'Fullstack',
                    image: '/nostedlogo2.jpg',
                    description:
                        'Gjennom UIA fikk vi utviklet en webapplikasjon for håndtering av service saker. Prosjektet ga medlemmene i gruppen en innledning i fullstack utvikling. Gjennom prosjektet lærte vi hvordan en jobber effektivt som et team, leder et prosjekt og gjør dette innen en satt frist',
                    bulletPoints: [
                        "MVC Rammeverk",
                        "Scrum, C#, HTML, CSS ",
                        "Login og brukerautorisering",
                    ],
                    linkToGitHub: 'https://github.com/nosted',
                },
                {
                    id: 2,
                    name: 'Enthemed',
                    role: 'Fullstack',
                    image: '/enthemed.png',
                    description:
                        'Enthemed er en webapplikasjon som gjør det enkelt å starte sin egen nettbutikk. Prosjektet er bygget på shopify sin plattform og tilbyr ferdiglagde nettbutikk maler og såkalte powerups som gir nettbutikken utvidet funksjonalitet',
                    bulletPoints: [
                        "Fullstack utvikling",
                        "Jobbe i team",
                        "Skytjenester",
                    ],
                },
                {
                    id: 3,
                    name: 'Padlegleden',
                    role: 'Frontend',
                    image: '/padlegleden.png',
                    description:
                        'Vi hjalp padlegleden å utvikle en opplærings plattform på de sin nettside i faget IS-112. Her fikk vi introduksjon i konsepter som blant annet design thinking og hvordan det er å jobbe i team og oppfylle kundens ønske. ',
                    bulletPoints: [
                        "UI/UX Design for kursplattform",
                        "Frontend utviklet ved bruk a squarespace",
                        "Intervjuer med kunder for å samle data",
                    ],
                    linkToGitHub: 'https://github.com/padlegleden',
                },
                {
                    id: 4,
                    name: 'Smartsight',
                    role: 'Cybersecurity',
                    image: '/smartsight.jpg',
                    description:
                        'Smartsight is a cybersecurity tool that detects and prevents security threats. Our team was involved in developing the backend architecture to ensure data protection and enhance threat detection.',
                    bulletPoints: [
                        "Cybersecurity Threat Detection",
                        "Backend Development in Python and Django",
                        "AI-driven Threat Analysis",
                    ],
                    linkToGitHub: 'https://github.com/smartsight',
                },
            ];

            const selectedProject = projects.find(p => p.id.toString() === id);
            setProject(selectedProject ?? null);
        };

        fetchProjectData();
    }, [id]);

    if (!project) return <p>Loading project data...</p>;

    return (
        <div>
            <Navbar />
            <div className="container mx-auto md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-32">
                <div className="mt-8 grid justify-center items-center order-1 col-span-1">
                    <img className="lg:h-96 md:h-96 h-60 rounded-lg" src={project.image} alt="" />
                </div>
                <div className="mt-8 md:mt-0 lg:justify-end col-span-2 px-4 md:px-4">
                    <h1 className="text-4xl text-gray-800 text-center font-bold mb-2 relative inline-block">
                        {project.name}
                        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-customGreen"></span>
                    </h1>
                    <br/><br/>
                    <p className="text-18px text-gray-800 text-left w-[85%] leading-relaxed whitespace-pre-line">
                        {project.description}
                    </p>
                    <br />
                    {project.bulletPoints && (
                        <div className="mt-4 px-4 md:px-8">
                            <strong className="text-gray-800">Prosjekt høydepunkter</strong>
                            <ul className="list-disc list-inside text-gray-800 mt-2">
                                {project.bulletPoints.map((point, index) => (
                                    <li key={index} className="py-1">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <br />
                    <div className="mt-4 flex justify-center md:justify-start">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
