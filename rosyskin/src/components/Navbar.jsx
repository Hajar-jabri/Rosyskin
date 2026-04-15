import {Link} from'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../CartContext";
import './Navbar.css';

function Navbar(){
    const { panier } = useContext(CartContext);
    const totalProduits = panier.reduce((total, item) => total + Number(item.quantite || 1), 0);

    return(
        <div className='navbar-container'>
            <img src="/logo.png" className='navbar-logo' alt="Logo RosySkin" />
            <div className='navbar-links'>
            <Link className='navLink' to='/'>Home</Link>
            <Link className='navLink' to='/Nettoyant'>Nettoyant</Link>
            <Link className='navLink' to='/Hydratation'>Hydratation</Link>
            <Link className='navLink' to='/Protection'>Protection</Link>
            
            <Link className='navLink cart-link cart-icon-wrapper' to='/Panier'>
              <img src="/panier.png" alt="Panier" />
              <span className='cart-badge'>{totalProduits}</span>
            </Link>
            
            </div>
           
            
        
           
        </div>
     
    )
}
export default Navbar;