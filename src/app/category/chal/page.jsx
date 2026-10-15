
import Card from '@/app/components/card/card';
import { Suspense } from 'react';

const page = async () => {
  try {
    const data = await fetch(process.env.CHAL_API, {cache:'no-cache'});

    if (!data.ok) {
      throw new Error('Failed to fetch products');
    }

    const products = await data.json();

    return (
    

         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 my-4 px-5">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>


    );
  } catch (error) {
    console.error('Error fetching products:', error);

    return (
      <div className="my-4 px-5 text-red-500">
        Failed to load products. Please try again later.
      </div>
    );
  }
};

export default page;