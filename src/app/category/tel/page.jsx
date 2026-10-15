// import Link from 'next/link';
import React from 'react';
import Card from '@/app/components/card/card';

const page = async () => {
    try{const data = await fetch(process.env.TEL_API, {cache:'no-cache'});
    const products = await data.json();
   
    

    
    return (
  
   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3  my-4 px-5">
   
    {
        products.map((product) => (
        <Card key={product.id} product={product} />
    ))}
   </div>
  
  );}
    catch (error) {
    console.error('Error fetching products:', error);

    return (
      <div className="my-4 px-5 text-red-500">
        Failed to load products. Please try again later.
      </div>
    );
  }
};

export default page;