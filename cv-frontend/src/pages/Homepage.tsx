import { Link } from 'react-router-dom';

interface Member {
    id: number;
    name: string;
    role: string;
}

const HomePage: React.FC = () => {
    const members: Member[] = [{ id: 1, name: 'Max', role: 'Student' }, /* more members */];

    return (
        <div className="grid grid-cols-3 gap-4">
            {members.map((member) => (
                <div key={member.id} className="card">
                    <h2>{member.name}</h2>
                    <p>{member.role}</p>
                    <Link to={`/profile/${member.id}`} className="text-blue-500">View Profile</Link>
                </div>
            ))}
        </div>
    );
};

export default HomePage;
