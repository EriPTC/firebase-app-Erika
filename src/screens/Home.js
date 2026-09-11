import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import CardProductos from '../components/CardProductos';
import useProducts from '../hooks/useProducts';

const Home = ({ navigation }) => {
  const productos = useProducts();

  const renderItem = ({ item }) => (
    <CardProductos
      id={item.id}
      nombre={item.nombre}
      precio={item.precio}
      vendido={item.vendido}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos Disponibles</Text>

      {productos.length > 0 ? (
        <FlatList
          data={productos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      ) : (
        <Text style={styles.subtitle}>No hay productos disponibles</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Add')}>
        <Text style={styles.buttonText}>Agregar Producto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#ff9800',
  },
  button: {
    backgroundColor: '#0288d1',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 50,
    paddingVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    flexGrow: 1,
  },
});

export default Home;
