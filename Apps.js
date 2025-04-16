
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.loginText}>Log in</Text>
        <View style={styles.menuIcon}>
          <Text style={styles.menuLine}>≡</Text>
        </View>
      </View>

      <View style={styles.logoContainer}>
        <Text style={styles.logo}>FUNERARIA</Text>
      </View>

      <Image
        style={styles.mainImage}
        source={{ uri: 'https://i.imgur.com/WSN7U2P.png' }}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cotizar ahora</Text>
      </TouchableOpacity>

      <Text style={styles.texto}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Servicios</Text>
        <Text style={styles.sectionTitle}>Obituarios</Text>
        <Text style={styles.sectionTitle}>Contacto</Text>
      </View>

      <View style={styles.subSection}>
        <Text style={styles.subTitle}>Quiénes</Text>
        <Text style={styles.subTitle}>somos</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </Text>
      </View>

      <View style={styles.subSection}>
        <Text style={styles.subTitle}>Testimonios</Text>
        <View style={styles.testimonio}>
          <View style={styles.foto}></View>
          <View>
            <Text style={styles.nombre}>nombre</Text>
            <Text style={styles.fecha}>fechax/x/x</Text>
          </View>
        </View>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2025 Aquelarre de Informaticos</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F0EC',
    flex: 1,
    padding: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
  },
  loginText: {
    color: '#B59D66',
    fontSize: 16,
    marginLeft: 10,
  },
  menuIcon: {
    marginRight: 20,
  },
  menuLine: {
    fontSize: 28,
    color: '#445',
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#B59D66',
  },
  mainImage: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#6C5044',
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  texto: {
    fontSize: 16,
    color: '#555',
    margin: 10,
    textAlign: 'justify',
  },
  section: {
    margin: 15,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#6C5044',
    marginVertical: 5,
  },
  subSection: {
    margin: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6C5044',
  },
  paragraph: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
    textAlign: 'justify',
  },
  testimonio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ccc',
    marginRight: 15,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  fecha: {
    fontSize: 14,
    color: '#666',
  },
  footer: {
    backgroundColor: '#D3D3D3',
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#333',
  },
});
