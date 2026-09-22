'use client';

import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface NewProductData {
    title: string;
    price: number;
    category: string;
}

const addProductToApi = async (newProduct: NewProductData) => {
    const res = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
    });

    if (!res.ok) {
        throw new Error('Błąd dodawania.');
    }

    return res.json();
};

export function AddProductForm() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: addProductToApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });

            setTitle('');
            setPrice('');
            setCategory('');
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || !price || !category) return;

        mutation.mutate({
            title,
            price: Number(price),
            category,
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm mb-8"
        >
            <h2 className="text-xl font-bold mb-4 dark:text-white">Dodaj nowy produkt</h2>

            <div className="flex flex-col gap-4">
                <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        Tytuł
                    </label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        Cena ($)
                    </label>
                    <input
                        type="number"
                        required
                        min="0"
                        step="0.01"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        Kategoria
                    </label>
                    <input
                        type="text"
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {mutation.isError && (
                    <p className="text-red-500 text-sm">Nie udało się dodać produktu.</p>
                )}
                {mutation.isSuccess && (
                    <p className="text-green-500 text-sm">Produkt został dodany pomyślnie!</p>
                )}

                <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {mutation.isPending ? 'Dodawanie...' : 'Dodaj produkt'}
                </button>
            </div>
        </form>
    );
}