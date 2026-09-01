import { notFound } from 'next/navigation';
import {MOCK_USERS} from "../../../components/UserProfilesList";
import {UserProfileCard} from "@/src/components/UserProfileCard";


export default async function UserProfilePage({params,}: {
    params: Promise<{ id: string }>;
}) {

    const { id } = await params;

    const user = MOCK_USERS.find((u) => u.id === id);

    if (!user) {
        notFound();
    }

    return (
        <UserProfileCard user={user} />

    );
}