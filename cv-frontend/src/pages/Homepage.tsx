import {Member} from "../Interface/Member";
import MemberCard from "../components/MemberCard";

const HomePage: React.FC = () => {
    const members: Member[] = [
        {
            id: 1,
            name: 'Max',
            role: 'Student',
            image: 'https://media.licdn.com/dms/image/D4D03AQFPOKdKGlBA0w/profile-displayphoto-shrink_800_800/0/1708106515253?e=1719446400&v=beta&t=0a3tBJ9Ea7YB1EKeP2daJmiLrQX_qvjl9igbSBeh--E',
            description: 'Profile description here.'
        },
        {
            id: 2,
            name: 'Jeppe',
            role: 'Student',
            image: 'https://media.licdn.com/dms/image/D4D03AQGKAVaAlR8jmg/profile-displayphoto-shrink_800_800/0/1705926113512?e=1719446400&v=beta&t=ZGBnb3P0bscirZZaJLcHa59END-dVgTfz8qdL_sq6Io',
            description: 'Another profile description here.'
        },
        {
            id: 3,
            name: 'Andreas',
            role: 'Student',
            image: 'https://media.licdn.com/dms/image/D4E03AQHMFORjvQHEkw/profile-displayphoto-shrink_800_800/0/1712234915388?e=1719446400&v=beta&t=I2PmYMkq3V8k-0IeWMLU49x0snzVLo4Z0p2B3LdOVvQ',
            description: 'Another profile description here.'
        }
    ];
    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="text-center pb-12">
                <h2 className="text-base font-bold text-indigo-600">Søknad til praksis</h2>
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">Sjekk ut de forskjellige medlemmene i gruppen</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {members.map(member => <MemberCard key={member.id} member={member} />)}
            </div>
        </section>
    );
};

export default HomePage;
