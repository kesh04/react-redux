// import { useSelector } from "react-redux"
// import Product from "./Product";



// const BasketProducts = ( ) => {
//     const {products , total , amount} = useSelector((store) => store.basket);
//        // eslint-disable-next-line

//   return (
// <div>  
//     <div>

//         {
//             products.map((item, i)=>
            
//              <Product 
//              key={new Date().getTime + Math.random()}
//              name={item.name}
//              price={item.price}
//              image={item.image}
//              amount={item.amount}
//              />
//             )
//         }
//      </div>
//      <div className="flex flex-row items-center justify-evenly py-8">
//         <p className=" text-2xl font-medium">Total</p>
        
//         <p className="text-2xl font-medium"> ${total}</p>
//      </div>
//     </div>
//   )
// }

// export default BasketProducts

// BasketProducts.js
import { useSelector } from "react-redux";
import Product from "./Product";

const BasketProducts = () => {
  const { products, total, amount } = useSelector((store) => store.basket);

  return (
    <div>
      <div>
        {products.map((item) => (
          <Product
            key={new Date().getTime() + Math.random()}
            name={item.name}
            price={item.price}
            image={item.image}
            amount={item.amount}
          />
        ))}
      </div>
      <div className="flex flex-row items-center justify-evenly py-8">
        <p className="text-2xl font-medium">Total</p>
        <p className="text-2xl font-medium">${total}</p>
      </div>
    </div>
  );
};

export default BasketProducts;
