import Link from "next/link";
import {NAV_LINKS} from "@/src/config";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";

export default function Navbar() {
    return (
        <nav className="inset-0 py-6 grid place-items-center">
            <Tabs defaultValue={NAV_LINKS[0]?.id}>
                <TabsList variant="line">
                    {NAV_LINKS.map(link => (
                        <TabsTrigger key={link.id} value={link.id}>
                            <Link href={link.href}>
                                {link.title}
                            </Link>
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>
        </nav>
    );
}
