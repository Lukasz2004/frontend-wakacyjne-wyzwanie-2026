import { UserProfileList } from "../components/UserProfilesList";

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="text-4xl font-bold mb-4">
          Witamy w "Wakacyjnym wyzwaniu"
        </h1>
        <p className="text-gray-600 text-lg">
          Sprawdź <span className="underline font-bold">README.md</span> i
          zobacz co dla Ciebie przygotowaliśmy
        </p>
      </header>

    </main>
  );
}
