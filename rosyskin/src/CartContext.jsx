import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [panier, setPanier] = useState([]);

  const ajouterPanier = (produit) => {
    setPanier((prevPanier) => {
      const cartKey = `${produit.id}-${produit.img}`;
      const produitExistant = prevPanier.find((item) => item.cartKey === cartKey);

      if (produitExistant) {
        return prevPanier.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantite: (item.quantite || 1) + 1 }
            : item
        );
      }

      return [...prevPanier, { ...produit, cartKey, quantite: 1 }];
    });
  };

  const supprimerProduit = (cartKey) => {
    setPanier((prevPanier) =>
      prevPanier.filter((item) => (item.cartKey || `${item.id}-${item.img}`) !== cartKey)
    );
  };

  const supprimerTous = () => {
    setPanier([]);
  };

  return (
    <CartContext.Provider value={{ panier, ajouterPanier, supprimerProduit, supprimerTous }}>
      {children}
    </CartContext.Provider>
  );
};