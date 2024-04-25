// components/MemberCard.tsx
import { Link } from 'react-router-dom';
import {Member} from "../Interface/Member";
import React from "react";

interface MemberCardProps {
    member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
    return (
        <Link to={`/profile/${member.id}`} className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 h-80">
                <img className="object-center object-cover w-full h-full" src={member.image} alt={`Profile of ${member.name}`} />
            </div>
            <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                <p className="text-xl text-gray-700 font-bold">{member.name}</p>
                <p className="text-base text-gray-400 font-normal">{member.role}</p>
                <p className="text-base leading-relaxed text-gray-500 font-normal">{member.description}</p>
                {/* Consider adding a SocialMediaLinks component here */}
            </div>
        </Link>
    );
};
export default MemberCard;
