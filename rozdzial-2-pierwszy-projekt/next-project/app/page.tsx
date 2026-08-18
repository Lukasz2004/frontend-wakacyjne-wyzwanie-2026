import Image from "next/image";
import TeamMemberCard from "@/app/TeamMemberCard";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <TeamMemberCard name={"Łukasz Czerwiński"}
                      role={"Junior Java Fullstack Developer"}
                      bio={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis ligula eros, sed vehicula nisl fringilla sed. Nam pharetra rhoncus enim gravida egestas. Donec ultricies laoreet nunc, eu sollicitudin nibh eleifend vitae. Nullam condimentum pellentesque justo, vitae malesuada tellus gravida."}
                      skills={["Java","Spring","React (Soon)","Team Lead"]} ></TeamMemberCard>
    </div>
  );
}
