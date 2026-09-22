import {Product} from "@/types/product";
import ProductList from "@/app/products/ProductList";

interface DummyJson {
  products: Product[];
}
async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://dummyjson.com/products', {
    next: {
      revalidate: 60,
      tags: ['products']
    },
  });
  if (!res.ok) {
    throw new Error("Błąd ładowania");
  }
  const data: DummyJson = await res.json();
  return data.products;
}
export default async function Home() {
  const products = await getProducts();
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1>Hello World</h1>
          <ProductList initialData={products} />
        </div>
      </main>
    </div>
  );
}
