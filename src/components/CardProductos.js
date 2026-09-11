import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import useProductActions from '../hooks/useProductActions';

const CardProductos = ({ id, nombre, precio, vendido }) => {
  const { eliminarProducto, actualizarProducto } = useProductActions();

  return (
    <View style={styles.card}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.text}>${precio}</Text>
      <Text style={[styles.text, vendido ? styles.vendido : styles.disponible]}>
        {vendido ? 'Vendido' : 'Disponible'}
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.deleteButton} onPress={() => eliminarProducto(id)}>
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.updateButton, vendido ? styles.regresarButton : styles.venderButton]}
          onPress={() => actualizarProducto(id, vendido)}
        >
          <Text style={styles.buttonText}>
            {vendido ? 'Devolver Producto' : 'Vender'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  vendido: {
    color: 'red',
    fontWeight: 'bold',
  },
  disponible: {
    color: 'green',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 5,
  },
  updateButton: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  venderButton: {
    backgroundColor: '#4caf50',
  },
  regresarButton: {
    backgroundColor: '#ff9800',
  },
});

export default CardProductos;
