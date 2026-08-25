import Image from "next/image";
import { Dancing_Script } from 'next/font/google';
import Link from "next/link";

const font = Dancing_Script({ subsets: ['latin'] });
interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  skills: string[];
}

export default function TeamMemberCard({
  name,
  role,
  bio,
  skills,
}: TeamMemberCardProps) {
  return (
    <div className="flex w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-xl sm:flex-row">
      <div className="flex h-44 items-center justify-center bg-red-400 sm:h-auto sm:w-48">
        <div className="flex h-24 w-24 m-5 items-center justify-center rounded-full bg-black/20 text-3xl font-bold text-white">
          <Image
              src="/cutestCat.png"
              alt="Awatar"
              width={96}
              height={96}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{name}</h2>
          <p className="mt-1 text-sm font-medium text-red-700 font-mono">{role}</p>
        </div>
        <p className="text-sm leading-6 text-gray-600">{bio}</p>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Umiejętności
          </h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className={`rounded-full bg-gray-100 px-3 py-1 text-s font-medium text-gray-700 ${font.className}`}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <Link
              href="https://solvro.pwr.edu.pl"
              target="_blank"
              className="inline-block w-full sm:w-auto rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-sm "
          >
            Dowiedz się więcej
          </Link>
        </div>
      </div>
    </div>
  );
}
