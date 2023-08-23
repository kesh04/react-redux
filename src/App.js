import { useDispatch, useSelector } from "react-redux";
import BasketProducts from "./components/BasketProducts";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import {  updateTotal } from "./features/basketSlice";

function App() {
   const { products } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(updateTotal())
  },[products, dispatch])
  return (
   <>
   <Navbar />
   <h1 className="  text-blue-950 text-center text-3xl font-medium mt-2  py-2">
    Redux Sample 
   </h1>
 <BasketProducts />
   
   </>
  );
}

export default App;
// import { useDispatch, useSelector } from "react-redux";
// import BasketProducts from "./components/BasketProducts";
// import Navbar from "./components/Navbar";
// import { useEffect } from "react";
// import { updateTotal } from "./features/basketSlice";

// function App() {
//   const { products } = useSelector((store) => store.basket);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(updateTotal()); // Add parentheses to invoke the updateTotal action as a function
//   }, [products, dispatch]);

//   return (
//     <>
//       <Navbar />
//       <h1 className="text-blue-950 text-center text-3xl font-medium mt-2 py-2">
//         Redux Sample
//       </h1>
//       <BasketProducts />
//     </>
//   );
// }

// export default App;
