
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
const App = () => {

   return (

      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />} >
                  <Route index element={<Home/>}/>
                  <Route path="/home" element={<Home />} />
                  <Route path="/product" element={<Product/>} />
                  <Route path="/category" element={<Category />} />

               </Route>
            </Routes>

         </BrowserRouter>
       



      </>
   )

}
export default App;
