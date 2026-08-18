"use client"
import {useState} from "react";

interface TeamMemberCardProps {
    name: string;
    role: string;
    bio: string;
    skills: string[];
}

function TeamMemberCard({ name, role, bio, skills }: TeamMemberCardProps) {
    return (
        <div className="border-2 border-black flex flex-col md:w-90 lg:w-1/3">
            <img
                className={"w-full"}
                src={"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"}
                alt={"avatar"} />
            <div className={"p-4"}>
                <h1 className="font-bold text-2xl md:text-3xl">{name}</h1>
                <h2 className="text-blue-900 text-lg">{role}</h2>
                <p>{bio}</p>

                <ul className="list-disc pl-6 mt-2 flex flex-col lg:flex-row lg:gap-6">
                    {skills.map(skill => (
                        <li className={"whitespace-nowrap"} key={skill}>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
export default TeamMemberCard;