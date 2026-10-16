import Link from "next/link";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Marquess = async() => {
     const res = await fetch(process.env.All_PRODUCT_API)
    const data = await res.json()
   console.log("m from", data );
 
            
     
    return (
        <div className="bg-gray-200 py-2">
         <MarqueeText direction="right" duration={10}>
         {
            data.map((p, index) => (
          <div className="mx-5">
                <Link href={`product/${p.id}`} >
              <span key={index} className="flex flex-row  gap-2">
                <span  >
                    {p.categoryIcon} 
                </span>
                <p>
                    {p.nameBn} 
                </p>
                <p>
                    {p.today} Tk 
                </p>
              </span>
              </Link>
          </div>
            ))
           }

         </MarqueeText>
          
        </div>
    );
};

export default Marquess;