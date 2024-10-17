import { Outlet } from "react-router-dom";
import Topmenu from "./Topmenu";
import Footer from "./Footer";


const Layout = () => {
    return ( 
      <>
          <Topmenu/>
          <Outlet/>
          <Footer/>
      
      
      </>


     );
}
 
export default Layout;