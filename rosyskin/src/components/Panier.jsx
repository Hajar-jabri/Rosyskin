import { useContext, useState } from "react";
import { CartContext } from "../CartContext";

function Panier() {
  const { panier, supprimerProduit, supprimerTous } = useContext(CartContext);
  const [activeButtonId, setActiveButtonId] = useState(null);
  const totalProduits = panier.reduce((total, item) => total + Number(item.quantite || 1), 0);
  const totalPrix = panier.reduce(
    (total, item) => total + Number(item.prix || 0) * Number(item.quantite || 1),
    0
  );

  return (
    <div className="page-container">
      <h1>Mon Panier</h1>

      <div className="products-grid">
        {panier.map((item) => (
          <div key={item.cartKey || `${item.id}-${item.img}`} className="product-card">
            <img
              src={item.img}
              alt={item.nompro}
              className="product-image"
            />
            <h5>{item.nompro}</h5>
            <p>Quantite: {item.quantite || 1}</p>
            <p>{item.prix} DH</p>

            <button
              onClick={() => supprimerProduit(item.cartKey || `${item.id}-${item.img}`)}
              onMouseDown={() => setActiveButtonId(item.cartKey || `${item.id}-${item.img}`)}
              onMouseUp={() => setActiveButtonId(null)}
              onMouseLeave={() => setActiveButtonId(null)}
              className={`action-button ${activeButtonId === (item.cartKey || `${item.id}-${item.img}`) ? "action-button-active" : ""}`}
              style={{ transition: "all 0.12s ease" }}
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          backgroundColor: "#f7eef4",
          border: "1px solid #e5d4df",
          borderRadius: "12px",
          padding: "14px",
          maxWidth: "340px",
          marginTop: "22px",
        }}
      >
        <p style={{ margin: 0, fontWeight: 600 }}>Total produits: {totalProduits}</p>
        <p style={{ margin: "6px 0 0 0", fontWeight: 600 }}>Total prix: {totalPrix} DH</p>
        <button
          onClick={supprimerTous}
          className="action-button"
          style={{ marginTop: "12px" }}
          disabled={panier.length === 0}
        >
          Supprimer tous
        </button>
      </div>
    </div>
  );
}

export default Panier;