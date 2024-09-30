import { Link } from 'react-router-dom';
import { Member } from "../Interface/Member";
import React from "react";

// Define the interface with member property
interface MemberCardProps {
    member: Member; // Specify that the member prop should be of type Member
}

// Correctly declare the MemberCard component
const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
    return (
        <Link to={`/profile/${member.id}`} className="w-full bg-lg rounded-lg shadow-lg border border-gray-200 overflow-hidden flex flex-col md:flex-row transition-transform transform hover:scale-105 hover:shadow-3xl">
            <div className="w-full md:w-2/5 h-80">
                <img className="object-center object-cover w-full h-full" src={member.image} alt={`Profile of ${member.name}`} />
            </div>
            <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2 flex flex-col justify-between">
                <div>
                    <p className="text-xl text-gray-700 font-bold">{member.name}</p>
                    <p className="text-base text-gray-400 font-normal">{member.role}</p>
                    <br/>
                    <p className="text-base leading-relaxed text-gray-500 font-normal">{member.description}</p>
                </div>
                <p className="text-base leading-relaxed text-green-400 font-normal">{member.clickOnCard}</p>
            </div>
        </Link>
    );
};

export default MemberCard;
