import MemberCard from "../components/MemberCard";
import {Member} from "../Interface/Member";

const HomePage: React.FC = () => {
    const members: Member[] = [
        {
            id: 1,
            name: 'Max Lee',
            role: 'Student',
            image: '/Max.jpeg',
            description: 'Hei! Jeg er en blid student med en passion for programmering. Driver eget firma og jobber på Elkjøp. Klikk på kortet mitt for å lære mer om meg.'
        },
        {
            id: 2,
            name: 'Jeppe Strømberg',
            role: 'Student',
            image: '/jeppe.jpeg',
            description: 'Heisann! Jeg er en IT Student på UiA. Trykk på kortet mitt for å lære mer om meg'
        },
        {
            id: 3,
            name: 'Andreas Mørkesdal',
            role: 'Student',
            image: '/Andreas.jpeg',
            description: 'Hei! Jeg er en IT student med fagbrev som IKT-servicemedarbeider. Klikk på kortet mitt for å lære mer om meg.'
        },
        {
            id: 5,
            name: 'Max Lee',
            role: 'Student',
            image: '/Max.jpeg',
            description: 'Hei! Jeg er en blid student med en passion for programmering. Driver eget firma og jobber på Elkjøp. Klikk på kortet mitt for å lære mer om meg.'
        },


    ];
    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="text-center pb-12">
                <h2 className="text-base font-bold text-green-400">IS - 310</h2>
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">Gruppe 8</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {members.map(member => <MemberCard key={member.id} member={member} />)}
            </div>
        </section>
    );
};

export default HomePage;
