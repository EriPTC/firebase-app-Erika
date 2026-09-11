import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

import { database } from '../config/firebase';

const useProducts = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productsQuery = query(
      collection(database, 'productos'),
      orderBy('creado', 'desc'),
    );

    const unsubscribe = onSnapshot(productsQuery, (querySnapshot) => {
      const products = querySnapshot.docs.map((productDocument) => ({
        id: productDocument.id,
        ...productDocument.data(),
      }));

      setProductos(products);
    });

    return unsubscribe;
  }, []);

  return productos;
};

export default useProducts;
