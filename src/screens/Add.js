import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import useAddProduct from '../hooks/useAddProduct';

const Add = ({ navigation }) => {
  const goToHome = () => navigation.goBack();
  const { nombre, precio, setNombre, setPrecio, agregarProducto } = useAddProduct(goToHome);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Agregar producto</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput style={styles.input} onChangeText={setNombre} value={nombre} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Precio:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPrecio}
            value={precio}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={agregarProducto}>
          <Text style={styles.buttonText}>Agregar producto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToHome}>
          <Text style={styles.buttonText}>Volver a home</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    width: '100%',
  },
  button: {
    backgroundColor: '#0288d1',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  inputContainer: {
    width: '100%',
    padding: 16,
    backgroundColor: '#f8f9fa',
    marginBottom: 16,
  },
});

export default Add;
