// import Link from 'next/link';
import React from 'react';
import Card from '@/app/components/card/card';

const page = async () => {
    const data = await fetch(process.env.MACH_API);
    const products = await data.json();
    console.log(products);
    

    
    return (
  
   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3  my-4 px-5">
   
    {
        products.map((product) => (
        <Card key={product.id} product={product} />
    ))}
   </div>
  
  );
};

export default page;