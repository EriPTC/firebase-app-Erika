import { deleteDoc, doc, updateDoc } from 'firebase/firestore';

import { database } from '../config/firebase';

const useProductActions = () => {
  const eliminarProducto = async (id) => {
    try {
      await deleteDoc(doc(database, 'productos', id));
      console.log('Se eliminó el documento con id: ', id);
    } catch (error) {
      console.error('Error removing document: ', error);
    }
  };

  const actualizarProducto = async (id, vendido) => {
    try {
      await updateDoc(doc(database, 'productos', id), {
        vendido: !vendido,
      });
      console.log('Se actualizó el documento con id: ', id);
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  return { eliminarProducto, actualizarProducto };
};

export default useProductActions;
