import CardCategory from "../components/CardCategory";
import NavLeft from '../components/NavLeft';
function Home(){
    return(
          <div className="page-container">
       {/* <h1 style={{color:'#5A2E4C'}}> votre kjejhef</h1> */}
        
    <div className="home-categories-grid">
       
    <CardCategory image='/CLEANER.jpeg' titre='Nettoyant' page='/Nettoyant'/>
    <CardCategory image='/HYD.jpeg' titre='Hydratation' page='/Hydratation'/>
    <CardCategory image='/SPF.jpeg' titre='Protection UV' page='/Protection'/>
    </div>
     <NavLeft />
        </div>
    )
}
export default Home;


