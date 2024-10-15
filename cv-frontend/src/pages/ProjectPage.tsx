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
                    attendees: 'Alle i gruppen (to separate prosjekter)',
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
                    videos: [
                        {
                            url: "https://fast.wistia.com/embed/medias/54tv0rkgxc",
                            title: "Nøsted Gruppe 3",
                        },
                        {
                            url: "https://fast.wistia.com/embed/medias/kve99qyw8l",
                            title: "Nøsted Video Gruppe 2",
                        },
                    ],
                },
                {
                    id: 2,
                    name: 'Enthemed',
                    role: 'Fullstack',
                    attendees: 'Max Lee',
                    image: '/enthemed.png',
                    description:
                        'Enthemed er en webapplikasjon som gjør det enkelt å starte sin egen nettbutikk. Prosjektet er bygget på shopify sin plattform og tilbyr ferdiglagde nettbutikk maler og såkalte powerups som gir nettbutikken utvidet funksjonalitet',
                    bulletPoints: [
                        "Fullstack utvikling",
                        "Jobbe i team",
                        "Skytjenester",
                    ],
                    videos: [
                        {
                            url: "https://fast.wistia.com/embed/medias/6i0e9sup9g",
                            title: "Enthemed Intro video",
                        },
                    ],
                },
                {
                    id: 3,
                    name: 'Padlegleden',
                    attendees: 'Max Lee og Andreas Mørkesdal',
                    role: 'Frontend',
                    image: '/padlegledenlogo.png',
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
                    attendees: 'Jeppe Strømberg og Andreas Iversen',
                    role: 'Prototype',
                    image: '/uia.png',
                    description:
                        `Teamet vårt hadde i oppgave å lage et forslag til hvordan smartbriller til personer med MD og RP skulle løses på en måte som både skal være skreddersydd for brukeren og som ikke kan oppleves som stigmatiserende.
      \nDa vi jobbet med SmartSight hadde vi ganske frie tøyler for å komme med forslag til hvordan et endelig produkt ville se ut. Det gjorde at vi måtte komme med mange idéer på egenhånd. Vi opplevde at for å kunne skape et best mulig ferdig produkt måtte vi legge inn mye innsats i å gjennomføre flere intervjuer og gjøre gode markedsundersøkelser. Via disse utfordringene fikk vi en god forståelse for prosessen til å skape et produkt med formål og som har en verdi hos kunder.`,
                    bulletPoints: [
                        "Markedsundersøkelser",
                        "Idéskaping",
                        "Figma prototype",
                    ],


            },
                {
                    id: 5,
                    name: 'Egde',
                    attendees:'Andreas Mørkesdal, Max Lee og Jeppe Strømberg',
                    role: 'KI-prosjekt',
                    image: '/egde.png',
                    description:
                        'Prosjektet involverer arbeid med Microsoft Azure, mer spesifikt Azure AI Studios, AI search og AzureSQL. Målet er utarbeidelse av en fungerende Chatbot, arbeidet har dermed inneholdt bruk av KI-modeller samt arbeid med RAG (Retrieval-augmented generation).',
                    bulletPoints: [
                        "Deployment og justering av KI-modeller",
                        "RAG (Retrieval-augmented generation)",
                        "Microsoft Azure",
                    ],
                },
                {
                    id: 6,
                    name: 'IOT-prosjekt',
                    attendees:'Alle i gruppen',
                    role: 'arduino-prosjekt',
                    image: '/arduino.png',
                    description:
                        'Vi utvikler en en egen treningsapp hvor brukeren kobler til en ekstern enhet til muskel. Applikasjonen måler dermed muskelaktivitet og gir brukeren informasjon om egen innsats på trening.',
                    bulletPoints: [
                        "Internet of things",
                        "Arduino",
                        "NextJS applikasjon",
                    ],
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
            <div className="container mx-auto md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-12">
                <div className="mt-8 grid justify-center items-center order-1 col-span-1">
                    <img className="lg:h-96 md:h-96 h-60 rounded-lg" src={project.image} alt="" />
                </div>
                <div className="mt-8 md:mt-0 lg:justify-end col-span-2 px-4 md:px-4">
                    <h1 className="text-4xl text-gray-800 text-center font-bold mb-2 relative inline-block">
                        {project.name}
                        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-customGreen"></span>
                    </h1>

                    <div className="text-left mt-4">
                        <span className="font-bold text-black">Deltakere:</span>
                        <span className="ml-2 text-gray-800">{project.attendees}</span>
                    </div>

                    <br /><br />
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
                </div>
            </div>

            {/* Optional Video Section */}
            {project.videos && project.videos.length > 0 && (
                <div className="w-full flex justify-center mt-10">
                    <div className="w-full max-w-4xl">
                        {project.videos.map((video, index) => (
                            <div key={index} className="relative w-full h-auto mb-8">
                                <h2 className="mb-4 font-bold text-center text-4xl">{video.title}</h2>
                                <div className="relative w-full h-0 pb-[56.25%]">
                                    <iframe
                                        src={video.url}
                                        title={video.title}
                                        className="wistia_swatch absolute top-0 left-0 w-full h-full"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};

export default ProjectPage;
