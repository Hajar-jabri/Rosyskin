
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";
const Hyd= [
    {
        id:1,
        img:'/Hydratation/1.jpg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
    {
        id:2,
        img:'/Hydratation/2.jpg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
     {
        id:3,
        img:'/Hydratation/3.jpg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
      {
        id:4,
        img:'/Hydratation/4.jpg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
      {
        id:5,
        img:'/Hydratation/5.jpg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
     {
        id:6,
        img:'/Hydratation/6.jpg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
      {
        id:7,
        img:'/Hydratation/7.jpg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
      {
        id:8,
        img:'/Hydratation/8.jpg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
      {
        id:9,
        img:'/Hydratation/9.jpg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
     {
        id:10,
        img:'/Hydratation/10.jpg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
     {
        id:11,
        img:'/Hydratation/11.jpg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
     {
        id:12,
        img:'/Hydratation/12.jpg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
     {
        id:13,
        img:'/Hydratation/13.jpg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
     {
        id:14,
        img:'/Hydratation/14.jpg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
     {
        id:15,
        img:'/Hydratation/15.jpg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
 ]

function Hydratation(){
    const { ajouterPanier } = useContext(CartContext);

    return(
         <div className="page-container">
            <h1>Produits hydratants</h1>
             <div className="products-grid">
            {Hyd.map((item)=>(     
                <div key={item.id} className="product-card">
                <img src={item.img} className="product-image" alt={item.nompro} />
                <h5>{item.nompro} </h5>
                <p>{item.prix} </p>
                < Link to="/Panier" 
                onClick={()=>ajouterPanier(item)}
                className="action-link"> Ajouter au panier</Link>
            </div>
             

            ))}
            
        </div>
        </div>
    )
}
export default Hydratation;




