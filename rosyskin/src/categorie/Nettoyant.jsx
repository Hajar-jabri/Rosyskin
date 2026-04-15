import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";
 
 const Net= [
    {
        id:1,
        img:'/Nettoyant/1.jpeg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
    {
        id:2,
        img:'/Nettoyant/2.jpeg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
     {
        id:3,
        img:'/Nettoyant/3.jpeg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
      {
        id:4,
        img:'/Nettoyant/4.jpeg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
      {
        id:5,
        img:'/Nettoyant/5.jpeg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
     {
        id:6,
        img:'/Nettoyant/6.jpeg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
      {
        id:7,
        img:'/Nettoyant/7.jpeg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
      {
        id:8,
        img:'/Nettoyant/8.jpeg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
      {
        id:9,
        img:'/Nettoyant/9.jpeg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
     {
        id:10,
        img:'/Nettoyant/10.jpeg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
     {
        id:11,
        img:'/Nettoyant/11.jpeg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
     {
        id:12,
        img:'/Nettoyant/12.jpeg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
     {
        id:13,
        img:'/Nettoyant/13.jpeg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
     {
        id:14,
        img:'/Nettoyant/14.jpeg',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
 ]
function Nettoyant(){
    const { ajouterPanier } = useContext(CartContext);

    return(
        <div className="page-container">
            <h1>Produits nettoyants</h1>
             <div className="products-grid">
            {Net.map((item)=>(     
                <div key={item.id} className="product-card">
                <img src={item.img} className="product-image" alt={item.nompro} />
                <h5 >{item.nompro} </h5>
                <p >{item.prix} </p>
                < Link to="/Panier" 
                onClick={()=>ajouterPanier(item)}
                className="action-link"> Ajouter au panier</Link>
            </div>
             

            ))}
            
        </div>
        </div>
    )
}
export default Nettoyant;







