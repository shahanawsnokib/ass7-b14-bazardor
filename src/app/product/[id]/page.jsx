
import Details from '../../ditails/page'

export const instant = false;

const Page = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(
    `${process.env.All_PRODUCT_API}/${id}`
  );

  if (!response.ok) {
    return <h1>Product not found</h1>;
  }

  const product = await response.json();

  if (!product || product.message === "Product not found") {
    return <h1>Product not found</h1>;
  }

  return (
    // <div className="p-6">
    //   <h1 className="text-2xl font-bold">
    //     {product.nameBn}
    //   </h1>

    //   <p>Product ID: {id}</p>
    //   <p>আজকের দাম: {product.today} টাকা</p>
    //   <p>গতকালের দাম: {product.yesterday} টাকা</p>
    //   <p>প্রতি: {product.unit}</p>
    // </div>

    
        <Details key={id} product={product}> </Details>
   
  );
};

export default Page;
