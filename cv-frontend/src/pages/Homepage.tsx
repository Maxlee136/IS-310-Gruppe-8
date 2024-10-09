import MemberCard from "../components/MemberCard";
import {Member} from "../Interface/Member";
import React, {useEffect} from "react";
import Navbar from "../components/Navbar";
import {useLocation} from "react-router-dom";

const HomePage: React.FC = () => {
    const members: Member[] = [
        {
            id: 1,
            name: 'Max Lee',
            role: 'Backend',
            image: '/max.jpg',
            description: 'Jeg er en blid student med en passion for programmering. Jeg interesser meg særlig for å jobbe med AI prosjekter og har for tiden et grunder prosjekt innenfor SAAS.',
            clickOnCard: 'Klikk på meg for mer informasjon!',
        },
        {
            id: 2,
            name: 'Jeppe Strømberg',
            role: 'Backend',
            image: '/jeppe.jpg',
            description:'Jeg er en student med lidenskap for backend-utvikling, og liker å jobbe med komplekse systemer og finne effektive løsninger.',
            clickOnCard: 'Klikk på meg for mer informasjon!',
        },
        {
            id: 3,
            name: 'Andreas Mørkesdal',
            role: 'Fullstack/Prosjektleder',
            image: '/andreas.jpg',
            description: 'Jeg er en IT-student med fagbrev som IKT-servicemedarbeider, og har en spesiell interesse for cybersikkerhet, full-stack utvikling, kunstig intelligens og ledelse',
            clickOnCard: 'Klikk på meg for mer informasjon!',
        },
        {
            id: 4,
            name: 'Olai Bergh Oldeide',
            role: 'Frontend',
            image: '/olai.jpg',
            description: 'Jeg er en student med sans for systemutvikling som føler seg sterkest innen frontend og UI-design - og alltid er klar for å lære om nye teknologier.',
            clickOnCard: 'Klikk på meg for mer informasjon!',
        },
        {
            id: 5,
            name: 'Andreas Wahl Iversen',
            role: 'Frontend',
            image: '/andreaswiv.jpg',
            description: 'Jeg er sterkest på samarbeid, problemløsning og å skape brukervennlige løsninger.',
            clickOnCard: 'Klikk på meg for mer informasjon!',
        },
       
    ];

    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#Kontakt") {
            const contactSection = document.getElementById("Kontakt");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    return (
        <>
            <Navbar />
            {/* Full-page portrait section */}
            <div className="relative w-full h-screen">
                <img
                    src="/gruppebilde.jpg"
                    alt="Student Portrait"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                />

                <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
                    <h1 className="text-white text-4xl md:text-6xl font-bold">GRUPPE 8</h1>
                    <p className="text-white mt-2 text-lg md:text-xl">Bachelor gruppe</p>
                </div>
            </div>

            {/* Section: About the group */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 mt-10">
                <div className="text-start pb-12">
                    <h1 className="font-bold text-3xl md:text-2xl lg:text-4xl font-heading text-gray-900 relative inline-block">
                        Mer om oss
                        <span className="absolute -bottom-4 left-0.5 w-44 h-0.5 bg-customGreen"></span>
                    </h1>
                    <h2 className="mt-6 text-18px text-slate-600 w-[75%]">
                        <br/>
                    Vi er en gruppe elever ved UiAs Bachelorprogram for IT og Informasjonssystemer. Vi har
                        valgt sammensetningen av gruppens medlemmer med omhu, basert på de enkeltes ferdigheter.
                        Ved dette er gruppen bygget opp av 2 som føler seg sterkest innen Frontend, 2 som yter
                        best innen Backend, og en gruppeleder som er stødig på Fullstack.
                        <br/> <br/>
                        Gruppen har særlige ønsker om å jobbe med noe innen prosjektutvikling i sin helhet, og
                        har erfaring med dette fra et tidligere prosjekt på bestilling av Nøsted AS.
                        <br/><br/>
                    </h2>
                </div>

                {/* Grid of Member Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {members.map((member) => (
                        <MemberCard key={member.id} member={member}/>
                    ))}
                </div>
            </section>
            {/* Section: Contact Information */}
            <section id="Kontakt" className="bg-gray-100 py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 text-center">
                    <div className="relative inline-block">
                        <h2 className="font-bold text-3xl md:text-2xl lg:text-4xl font-heading text-gray-900 mb-2 relative">
                            Kontaktinformasjon
                        </h2>
                        <span className="absolute top-full left-0.5 w-[99%] h-0.5 bg-customGreen"></span>
                    </div>

                    <p className="text-lg text-gray-700 mb-4">
                        <br />
                        Vi ser frem til å høre fra deg! Ta gjerne kontakt med oss for mer informasjon eller spørsmål.
                    </p>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-6">
                        {/* Email */}
                        <div>
                            <h3 className="font-semibold text-xl text-gray-800">Email</h3>
                            <p className="text-gray-600">andreas.morkesdal@gmail.com</p>
                        </div>

                        {/* Phone */}
                        <div>
                            <h3 className="font-semibold text-xl text-gray-800">Telefon</h3>
                            <p className="text-gray-600">+47 966 26 777</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
