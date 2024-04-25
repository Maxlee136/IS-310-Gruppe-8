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
            <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
                <div className="grid justify-center items-center order-1 col-span-1">
                    <img className="lg:h-80 md:h-64 h-40 rounded-full" src="https://scontent.fosl3-2.fna.fbcdn.net/v/t39.30808-6/384114230_18054013399466160_7478538626211862689_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ermsxSkjrZIAb5hppLf&_nc_ht=scontent.fosl3-2.fna&oh=00_AfCqx68UHeCmSlc2EHGXINqXK5n4qK0NrTfFggzfpWIURw&oe=663019A6" alt="" />
                </div>
                <div className="mt-8 md:mt-0 lg:justify-end col-span-2">
                    <h1 className="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">Hei, mitt navn er Max Lee</h1>
                    <p className="text-xl text-gray-800 text-center md:text-left">Jeg er en it Student, med erfaring innenfor React og Java Spingboot. Jeg er veldig glad i å programmere og jobber med en Saas på fritiden</p>
                    <button className="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400">Last ned CV</button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
