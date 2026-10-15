
import Card from '../components/card/card'

const page = async () => {
    const res = await fetch(process.env.All_PRODUCT_API, {cache:'no-cache'})
 const data = await res.json()
 const products = data;
const priceIncreased = products.filter(
  (product) => Number(product.today) > Number(product.yesterday)
);

const priceDecreased = products.filter(
  (product) => Number(product.today) < Number(product.yesterday)
);

return (
  <div className="space-y-6 px-5 py-5">
    {/* দাম বেড়েছে */}
    <section className='py-3'>
      <h2 className="mb-3 font-bold text-[#26352b]">
        <span className="text-red-500">▲</span> আজ দাম বেড়েছে
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {priceIncreased.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>

    {/* দাম কমেছে */}
    <section className='py-3'>
      <h2 className="mb-3 font-bold text-[#26352b]">
        <span className="text-green-600">▼</span> আজ দাম কমেছে
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {priceDecreased.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  </div>
);
};

export default page;