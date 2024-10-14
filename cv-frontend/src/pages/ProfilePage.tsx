import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Member } from "../Interface/Member";
import Navbar from "../components/Navbar"; // Ensure this path is correct

const ProfilePage: React.FC = () => {
    const {id} = useParams<string>();
    const [member, setMember] = useState<Member | null>(null);

    useEffect(() => {
        const fetchMemberData = async () => {
            const members: Member[] = [
                {
                    id: 1,
                    name: 'Max Lee',
                    role: 'Backend',
                    image: '/max.jpg',
                    LinkToLinkedIn: 'https://www.linkedin.com/in/max-lee-257182221/',
                    LinkToGitHub: 'https://github.com/Maxlee136',
                    description:
                        'Jeg er en blid student med en passion for fullstack utvikling, mine ferdigheter er hovedsakelig innen Java og React TSX. ' +
                        'Jeg er gründer av to selskaper, hovedsakelig et SAAS selskap kallt Enthemed som er laget for nettbutikker i shopify sitt økosystem. ' +
                        'Med et grunder mindset ønsker jeg å bidra til innovasjon i bedriften deres gjennom bachelor prosjektet',
                    bulletPoints: [
                        "Frontend: React, Typescript, Tailwind CSS",
                        "Backend: Java Springboot, C#",
                        "Database: MariaDB og MySQL",
                        "Andre ferdigheter/interesser: Prosjektarbeid, Git, Entreprenørskap  ",
                    ],
                },

                {
                    id: 2,
                    name: 'Jeppe Strømberg',
                    role: 'Student',
                    image: '/jeppe.jpg',
                    description: 'Hei! Jeg er IT-student ved Universitetet i Agder (UiA), hvor jeg har utviklet et bredt spekter av kunnskap innenfor IT. Jeg har spesielt god kompetanse innen unittesting og backend-utvikling, men er også svært motivert for å lære og utforske andre områder.',
                    LinkToLinkedIn: ' https://www.linkedin.com/in/jeppe-strømberg-93110b26b/',
                    LinkToGitHub: 'https://github.com/Jeppess123',
                    bulletPoints: [
                        "Frontend: React, Typescript, Tailwind CSS",
                        "Backend: Java Springboot, C#",
                        "Database: MariaDB og MySQL, PostgreSQL",
                        "Andre ferdigheter/interesser: Prosjektarbeid, Git, unit testing, digitalt interaksjonsdesign,Figma, UML-diagram, problemløsning, kunstig intelligens, Microsoft Azure, cyber sikkerhet ",
                    ],
                },
                {
                    id: 3,
                    name: 'Andreas Mørkesdal',
                    role: 'Student',
                    image: '/andreas.jpg',
                    LinkToLinkedIn: 'https://www.linkedin.com/in/andreas-mørkesdal-7a216a302/',
                    LinkToGitHub: 'https://github.com/Andreassm99',
                    description: `Mitt fagbrev har gitt meg en solid forståelse av samspillet mellom teknologi og mennesker, og har lært meg å møte utfordringer med en løsningsorientert og serviceinnstilt tilnærming. Dette har styrket mine evner til å kommunisere og samarbeide effektivt, både med brukere og kolleger. 
                       \n I løpet av studiet har jeg videreutviklet mine ferdigheter innen både frontend- og backend-utvikling, samtidig som jeg har opparbeidet meg verdifull erfaring som prosjektleder i flere prosjekter. Jeg er spesielt interessert i cybersikkerhet, full-stack utvikling, kunstig intelligens og ledelse.`,
                    bulletPoints: [
                        "Frontend: React, Tailwind CSS, TypeScript",
                        "Backend: C#, Python",
                        "Database: MariaDB, MySQL, PostgreSQL",
                        "Andre ferdigheter/interesser: Kunstig Intelligens, cybersikkerhet, ledelse, fullstack-utvikling, Microsoft Azure, Docker",
                    ],

                },
                {

                    id: 4,
                    name: 'Olai Bergh Oldeide',
                    role: 'Student',
                    image: '/olai.jpg',
                    description: `Jeg er en 27 år gammel mann som nå gjennomfører mitt siste år av min Bachelor innen IT og Informasjonssystemer ved UiA.
                    \n Jeg føler meg sterkest innen frontend, og jobber om dagen for å utarbeide mine ferdigheter innen backend. Ved siden av studiene jobber jeg i utelivsbransjen i Kristiansand, og fritiden min tilbringer jeg helst ute i det fri. \n`,
                    LinkToLinkedIn: 'https://www.linkedin.com/in/olai-bergh-oldeide-720046269/',
                    LinkToGitHub: 'https://github.com/Olaibo',
                    bulletPoints: [
                        "Frontend: HTML, CSS, JavaScript, React, TypeScript",
                        "Backend: C#, Java, PHP",
                        "Database: MariaDB, mySQL",
                        "Andre ferdigheter/ interesser: Docker, AI, Cybersikkerhet, digitalt interaksjonsdesign, systemanalyse og -utvikling",
                    ]
                },
                {
                    id: 5,
                    name: 'Andreas Wahl Iversen',
                    role: 'Student',
                    image: '/andreaswiv.jpg',
                    description: 'Jeg har jobbet mye med både frontend og backend i løpet av årene mine ved IT og Informasjonssystemer på UiA. Jeg trives best med frontend og det er noe jeg vil prioritere mest når jeg koder i team. Jeg synes det er veldig givende å jobbe med andre mennesker og trives godt med gruppearbeid og lagprosjekt.',
                    LinkToLinkedIn: 'https://www.linkedin.com/in/andreas-wahl-iversen/',
                    LinkToGitHub: 'https://github.com/Andreaswiv',
                    bulletPoints: [
                        "Frontend: React, Typescript, Tailwind CSS,",
                        "Backend: C#, Php, Java",
                        "Database: MariaDB, MySQL, Docker",
                        "Andre ferdigheter/interesser: Git, problemløsning, innovasjon",
                    ],
                },
            ];
            const selectedMember = members.find(m => m.id.toString() === id);
            setMember(selectedMember ?? null);
        };

        fetchMemberData();
    }, [id]);

    if (!member) return <p>Loading member data...</p>;

    return (
        <div>
            <Navbar />
            <div className="container mx-auto md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-32">
                <div className="mt-8 grid justify-center items-center order-1 col-span-1">
                    <img className=" lg:h-96 md:h-96 h-60 rounded-full" src={member.image} alt="" />
                </div>
                <div className="mt-8 md:mt-0 lg:justify-end col-span-2 px-4 md:px-4">
                    <h1 className="text-4xl text-gray-800 text-center font-bold mb-2 relative inline-block">
                        {member.name}
                        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-customGreen"></span>
                    </h1>
                    <br/><br/>
                    <p className="text-18px text-gray-800 :text-left w-[85%] leading-relaxed whitespace-pre-line">
                        {member.description}
                    </p>
                    <br />
                    {member.bulletPoints && (
                        <div className="mt-4 px-4 md:px-8">
                            <strong className="text-gray-800">IT-Kompetanseområder</strong>
                            <ul className="list-disc list-inside text-gray-800 mt-2 ">
                                {member.bulletPoints.map((point, index) => {
                                    const [boldPart, restPart] = point.split(':');
                                    return (
                                        <li key={index} className="py-1">
                                            <strong>{boldPart}:</strong>{' '}
                                            {restPart && <span>{restPart.trim()}</span>} {}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                    <br />
                    <div className="mt-4 flex justify-center md:justify-start">
                        <a href={member.LinkToLinkedIn} target="_blank" rel="noopener noreferrer" className="mr-4">
                            <img
                                src="/linkedin_logo.png"
                                alt="LinkedIn Profile"
                                style={{ width: '4.5rem', height: '4.5rem' }}
                                className="inline" />
                        </a>
                        <a href={member.LinkToGitHub} target="_blank" rel="noopener noreferrer">
                            <img
                                src="/github-logo.png"
                                alt="GitHub Profile"
                                style={{ width: '7.5rem', height: '4.5rem' }}
                                className="inline" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfilePage;