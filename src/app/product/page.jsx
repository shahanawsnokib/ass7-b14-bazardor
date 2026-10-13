// import Link from 'next/link';
import React from 'react';
import Card from '@/app/components/card/card';

const page = async () => {
    const data = await fetch(process.env.All_PRODUCT_API);
    const products = await data.json();
    

    
    return (
  
 <div className='px-5 py-5'>
 <h4 className='mb-3 font-bold text-[#26352b]'>সব পণ্য</h4>
 <p>  মোট {products.length} টি পণ্য দেখানো হচ্ছে</p>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3  my-4 ">
     
    {
        products.map((product) => (
        <Card key={product.id} product={product} />
    ))}
    
   </div>
   </div>
  
  );
};

export default page;