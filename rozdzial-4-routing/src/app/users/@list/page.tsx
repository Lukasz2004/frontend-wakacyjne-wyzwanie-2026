import { UserProfileList } from "../../../components/UserProfilesList";

export default async function List() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const isSuccess = Math.random() > 0.5;
    if (!isSuccess) {
        throw new Error('Błąd 404');
    }
    return (
        <div className="w-full my-auto py-8">
            <UserProfileList />
        </div>
    );
}


