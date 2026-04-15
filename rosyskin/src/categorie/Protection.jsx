  import { Link } from "react-router-dom";
  import { useContext } from "react";
  import { CartContext } from "../CartContext";
  const SPF=[
      {
        id:1,
        img:'/Protection/1.png',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
      {
        id:2,
        img:'/Protection/2.png',
        nompro:'hhhhhhelo',
        prix:100 ,
    },  {
        id:3,
        img:'/Protection/3.png',
        nompro:'hhhhhhelo',
        prix:100 ,
    }, 
     {
        id:4,
        img:'/Protection/4.png',
        nompro:'hhhhhhelo',
        prix:100 ,
    },  {
        id:5,
        img:'/Protection/5.png',
        nompro:'hhhhhhelo',
        prix:100 ,
    },  {
        id:6,
        img:'/Protection/6.png',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
     {
        id:7,
        img:'/Protection/7.png',
        nompro:'hhhhhhelo',
        prix:100 ,
    }, {
        id:8,
        img:'/Protection/8.png',
        nompro:'hhhhhhelo',
        prix:100 ,
    }, {
        id:9,
        img:'/Protection/9.png',
        nompro:'hhhhhhelo',
        prix:100 ,
    }, {
        id:10,
        img:'/Protection/10.png',
        nompro:'hhhhhhelo',
        prix:100 ,
    }, {
        id:11,
        img:'/Protection/11.png',
        nompro:'hhhhhhelo',
        prix:100 ,
    }, {
        id:12,
        img:'/Protection/12.png',
        nompro:'hhhhhhelo',
        prix:100 ,
    }, {
        id:13,
        img:'/Protection/13.png',
        nompro:'hhhhhhelo',
        prix:100 ,
    }, {
        id:14,
        img:'/Protection/14.png',
        nompro:'hhhhhhelo',
        prix:100 ,
    },
  ]
function Protection(props){
    const { ajouterPanier } = useContext(CartContext);

    return(
         <div className="page-container" >
             <h1>Protection solaire</h1>
             <div className="products-grid">
            {SPF.map((item)=>(     
                <div key={item.id} className="product-card">
                <img src={item.img} className="product-image" alt={item.nompro} />
                <h5>{item.nompro} </h5>
                <p>{item.prix} </p>
                < Link to="/Panier"
                        onClick={() => ajouterPanier(item)}
                        className="action-link"> Ajouter au panier</Link>
            </div>
             

            ))}
            
        </div>
        </div>
    )
}
export default Protection;