'use client';

import { useState } from 'react';
import {Product} from "@/types/product";
import {ProductCard} from "@/components/product-card";
import {useQuery} from "@tanstack/react-query";
import {AddProductForm} from "@/app/products/AddProductForm";

interface ProductListProps {
    initialData: Product[];
}
const fetchProducts = async (searchTerm: string): Promise<Product[]> => {
    const url = searchTerm
        ? `https://dummyjson.com/products/search?q=${searchTerm}`
        : 'https://dummyjson.com/products';

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Błąd ładowania');
    }

    const data = await res.json();
    return data.products;
};
export default function ProductList({ initialData }: ProductListProps) {
    const [search, setSearch] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data: products = [], isLoading, isError } = useQuery({
        queryKey: ['products', search],
        queryFn: () => fetchProducts(search),
        initialData: search === '' ? initialData : undefined,
        staleTime: 60_000,
    });
    return (
        <div>
            <div className="w-full mb-6 flex flex-col sm:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Szukaj produktów..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 max-w-md px-4 py-2 border rounded-lg border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 dark:text-black text-white px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap"
                >
                    + Dodaj produkt
                </button>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ul>
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="relative w-full max-w-md bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 text-xl leading-none"
                            aria-label="Zamknij"
                        >
                            &times;
                        </button>

                        <h2 className="text-xl font-bold mb-6 dark:text-white">Nowy produkt</h2>

                        <AddProductForm onClose={() => setIsModalOpen(false)} />
                    </div>
                </div>
            )}
        </div>
    );
}