import Navbar from "./Navbar";
import { Outlet, useNavigation } from 'react-router-dom';  
import Loader from './Loader';

function AppLayout1() {
   
    const Navigation =useNavigation();
    const isloading = Navigation.state === "loading";
   
   return <>
    
    <div className="layout">
    {isloading&& <Loader /> }
    <Navbar />

    <Outlet />

    </div>

    
    </>
}

export default AppLayout1;
