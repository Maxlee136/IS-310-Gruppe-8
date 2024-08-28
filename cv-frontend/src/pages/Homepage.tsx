import MemberCard from "../components/MemberCard";
import {Member} from "../Interface/Member";

const HomePage: React.FC = () => {
    const members: Member[] = [
        {
            id: 1,
            name: 'Max Lee',
            role: 'Backend',
            image: '/Max.jpeg',
            description: 'Hei! Jeg er en blid student med en passion for programmering. Driver eget firma og jobber på Elkjøp. Klikk på kortet mitt for å lære mer om meg.'
        },
        {
            id: 2,
            name: 'Jeppe Strømberg',
            role: 'Backend',
            image: '/jeppe.jpeg',
            description: 'Heisann! Jeg er en IT Student på UiA. Trykk på kortet mitt for å lære mer om meg'
        },
        {
            id: 3,
            name: 'Andreas Mørkesdal',
            role: 'Fullstack',
            image: '/Andreas.jpeg',
            description: 'Hei! Jeg er en IT student med fagbrev som IKT-servicemedarbeider. Klikk på kortet mitt for å lære mer om meg.'
        },
        {
            id: 4,
            name: 'Olai Bergh Oldeide',
            role: 'Frontend',
            image: '/Olai.jpeg',
            description: 'Jeg er en IT-student ved UiA med sans for systemutvikling, som føler seg sterkest innen frontend. Trykk på kortet mitt for mer informasjon om meg.'
        },
        {
            id: 5,
            name: 'Andreas Wahl Iversen',
            role: 'Frontend',
            image: '/andreaswiv.jpeg',
            description: 'Jeg er en IT-student ved UiA. Jeg er sterk på samarbeid, problemløsning og å skape brukervennlige løsninger i team. Trykk på kortet mitt for mer informasjon om meg.'
        },

    ];
    return (
        <>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 mt-10">
                <div className="text-center pb-12">
                    <h2 className="text-base font-bold text-green-400">IS - 310</h2>
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">Lær mer om
                        gruppen</h1>
                    <h2 className="mt-6 text-lg font-bold text-slate-600">Vi er en gruppe elever ved UiAs
                        Bachelorprogram for IT og Informasjonssystemer. Vi har valgt sammensetningen av gruppens
                        medlemmer med omhu, basert på de enkeltes ferdigheter. Ved dette er gruppen bygget opp av 2 som
                        føler seg sterkest innen Frontend,
                        2 som yter best innen Backend, og en gruppeleder som er stødig på Fullstack.
                       <br/> <br/>
                        Gruppen har særlige ønsker om å jobbe med noe innen prosjektutvikling i sin helhet, og har
                        erfaring med dette fra et tidligere prosjekt på bestilling av Nøsted AS.
                    </h2>


                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {members.map(member => <MemberCard key={member.id} member={member}/>)}
                </div>
            </section>
        </>
    );
};

export default HomePage;
