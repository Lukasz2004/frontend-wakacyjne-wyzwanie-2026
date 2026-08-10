import {useState} from "react";

interface Technology {
    id: string; // np. UUID lub unikalny hash
    name: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: Technology[];
}

function ProjectCard({ title, description, technologies }: ProjectCardProps) {
    const [status, setStatus] = useState<string>("W trakcie")
    return (
        <div style={{ border: "1px solid black" }}>
            <h3><b>{title}</b></h3>
            <p style={{color: "darkslateblue"}}>{description}</p>
            <div style={{display: "flex", justifyContent: "center", gap: "5px"}}>
                <p style={{color: status==="W trakcie"? "blue":"green"}}>Status: {status}</p>
                <button onClick={()=>setStatus(status === "W trakcie" ? "Ukończony" : "W trakcie")}
                        style={{border: "1px solid black"}}>
                    🔄</button>
            </div>

            <ul style={{ listStyleType: "disc", paddingLeft: '20px', paddingRight: '20px'}}>
                {technologies.map(tech => (
                    <li key={tech.id}>
                        {tech.name}
                    </li>
                ))}
            </ul>

        </div>
    )
}
export default ProjectCard;