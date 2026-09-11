import { useState } from 'react';
import { Alert } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';

import { database } from '../config/firebase';

const useAddProduct = (onSuccess) => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  const agregarProducto = async () => {
    const parsedPrice = Number.parseFloat(precio);

    if (!nombre.trim() || !Number.isFinite(parsedPrice)) {
      Alert.alert('Datos incompletos', 'Ingresa un nombre y un precio válido.');
      return;
    }

    try {
      await addDoc(collection(database, 'productos'), {
        nombre: nombre.trim(),
        precio: parsedPrice,
        vendido: false,
        creado: new Date(),
      });

      Alert.alert('Producto agregado', 'El producto se agregó correctamente', [
        { text: 'Ok', onPress: onSuccess },
      ]);
    } catch (error) {
      console.error('Error al agregar el producto', error);
      Alert.alert(
        'Error',
        'Ocurrió un error al agregar el producto. Por favor, intenta nuevamente.',
      );
    }
  };

  return {
    nombre,
    precio,
    setNombre,
    setPrecio,
    agregarProducto,
  };
};

export default useAddProduct;
