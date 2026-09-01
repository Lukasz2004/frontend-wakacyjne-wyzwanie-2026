import Link from "next/link";

export default function UsersLayout( {children,}: {children: React.ReactNode;}) {
    return (
        <>
            <nav>
                <Link
                    href="/users"
                    style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        background: '#1f2937',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '4px'
                    }}
                >
                    Wróć do listy użytkowników
                </Link>
            </nav>
            <main className="min-h-screen flex flex-col justify-between items-center mx-auto max-w-5xl p-8 text-center">
                {children}
            </main>
        </>
    );
}

