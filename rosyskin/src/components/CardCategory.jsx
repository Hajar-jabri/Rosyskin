import{Link} from'react-router-dom';
function CardCategory(props){
    return(
        <div className="category-card">

            <img src={props.image} className="category-image" alt={props.titre} />
            <h4 className="category-title">{props.titre} </h4>
           <Link className="action-link category-action" to={props.page}>Voir produits</Link>
        </div>
    )
}
export default CardCategory;