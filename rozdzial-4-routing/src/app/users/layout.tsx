export default function UserMainLayout({
                                            children,
                                            list,
                                            stats,
                                        }: {
    children: React.ReactNode;
    list: React.ReactNode;
    stats: React.ReactNode;
}) {
    return (
        <>
            {children}
            <div style={{ display: 'flex', gap: '2rem' }}>
                <section style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                    {list}
                </section>

                <section style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                    {stats}
                </section>
            </div>
        </>

    );
}