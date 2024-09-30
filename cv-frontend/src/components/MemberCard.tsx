import { Link } from 'react-router-dom';
import { Member } from "../Interface/Member";
import React from "react";

interface MemberCardProps {
    member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
    return (
        <div className="w-full bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 h-80">
                <img
                    className="object-center object-cover w-full h-full"
                    src={member.image}
                    alt={`Profile of ${member.name}`}
                />
            </div>
            <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                <p className="text-xl text-gray-700 font-bold">{member.name}</p>
                <p className="text-base text-gray-400 font-normal">{member.role}</p>
                <p className="text-base leading-relaxed text-gray-500 font-normal">
                    {member.description}
                </p>

                <Link to={`/profile/${member.id}`}>
                    <button
                        className="mt-4 bg-green-400 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
                    >
                        Lær mer om meg
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MemberCard;
