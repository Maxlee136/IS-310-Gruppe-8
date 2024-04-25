import { useParams } from 'react-router-dom';

interface Member {
    id: number;
    name: string;
    role: string;
    resumeLink: string;
}

const ProfilePage: React.FC = () => {
    const { id } = useParams<string>();

    // Fetch member details based on ID
    const member: Member = { id: parseInt(id!), name: 'Max Lee', role: 'Student', resumeLink: 'url-to-pdf' };

    return (
        <div>
            <h1>{member.name}</h1>
            <p>{member.role}</p>
            <a href={member.resumeLink} download>Download Resume</a>
        </div>
    );
};

export default ProfilePage;
