import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from'./pages/Home';
import Products from'./pages/Products';
import Navbar from'./components/Navbar';
import Nettoyant from "./categorie/Nettoyant";
import Hydratation from "./categorie/Hydratation";
import Protection from "./categorie/Protection";
import Panier from "./components/Panier";
import "./responsive.css";
export default function App(){
  return(
    <div>
       
     
       <Navbar/>
      
      
      <Routes>
     
         <Route path='/' element={<Home/>}/>
         <Route path='/Products' element={<Products/>}/>
         <Route path='/Nettoyant' element={<Nettoyant/>}/>
         <Route path='/Hydratation' element={<Hydratation/>}/>
         <Route path='/Protection' element={<Protection/>}/>
         <Route path="/Panier" element={<Panier />} />
        </Routes>
       
         
            {/* <Nettoyant/> */}
      {/* toutes tes pages */}
  
       
    </div>
   
  )
}