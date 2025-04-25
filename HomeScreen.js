import React from "react";
//import LinearGradient from 'react-native-linear-gradient';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.screenContainer}>
      <ScrollView style={styles.container}>
        <StatusBar barStyle="light-content" />

        {/* Header */}
        <View style={styles.header}>
          <Image source={require("./assets/logo.png")} style={styles.logo} />
        </View>

        {/* Imagen principal */}
        <Image
          source={require("./assets/portada.png")}
          style={styles.mainImage}
        />

        {/* Botón Cotizar ahora */}
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaText}>Cotizar ahora</Text>
        </TouchableOpacity>

        {/* LUMENGEST resaltado */}
        <Text style={styles.lumengestText}>LUMENGEST</Text>

        {/* Menú rápido con ícono al lado */}
        <View style={styles.menuLinksContainer}>
          <View style={styles.menuLinks}>
            <Text style={styles.menuLink}>Servicios</Text>
            <Text style={styles.menuLink}>Obituarios</Text>
            <Text style={styles.menuLink}>Contacto</Text>
          </View>
          <Image source={require("./assets/icono.png")} style={styles.icono} />
        </View>

        {/* Quiénes somos */}
        <Text style={styles.sectionTitle}>Quiénes{"\n"}somos</Text>
        <Text style={styles.placeholderText}>
          En LumenGest, entendemos la importancia de honrar la memoria de sus
          seres queridos. Nuestro compromiso es ofrecer un servicio cálido,
          respetuoso y profesional, brindando apoyo en los momentos más
          difíciles. Nos esforzamos por ser un pilar de confianza y empatía
          para las familias que confían en nosotros.
        </Text>

        {/* Testimonios */}
        <Text style={styles.sectionTitle}>Testimonios</Text>
        <View style={styles.testimonioContainer}>
          <View style={styles.fotoPlaceholder}>
            <Text style={styles.fotoText}>Foto</Text>
          </View>
          <View>
            <Text style={styles.testimonioNombre}>María López</Text>
            <Text style={styles.testimonioFecha}>15 de marzo de 2023</Text>
          </View>
        </View>
        <Text style={styles.placeholderText}>
          El servicio fue excepcional, nos ayudaron en todo momento y nos
          brindaron el apoyo que necesitábamos en un momento tan difícil.
        </Text>

        <Text style={styles.footer}>2025 Aquelarre de Informaticos</Text>
      </ScrollView>

      {/* Barra de navegación inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("./assets/home-icon.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Login")}
        >
          <Image
            source={require("./assets/user-icon.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navLabel}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} disabled>
          <Image
            source={require("./assets/cart-icon.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navLabel}>Carrito</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} disabled>
          <Image
            source={require("./assets/search-icon.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navLabel}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#F2EFEA",
  },
  container: {
    padding: 16,
  },
  header: {
    alignItems: "center",
    backgroundColor: "#2E3B4E",
    padding: 10,
    borderRadius: 10,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  mainImage: {
    width: "100%",
    height: 450,
    resizeMode: "cover",
    marginVertical: 12,
  },
  ctaButton: {
    backgroundColor: "#6C4F4B",
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: "center",
    marginVertical: 8,
  },
  ctaText: {
    color: "#F2EFEA",
    fontSize: 18,
  },
  lumengestText: {
    fontSize: 28,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#B59F6B",
    textAlign: "center",
    marginVertical: 10,
  },
  placeholderText: {
    fontSize: width > 400 ? 16 : 14,
    color: "#3A4A58",
    marginVertical: 8,
    textAlign: "center",
  },
  menuLinksContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginVertical: 12,
  },
  menuLinks: {
    alignItems: "center",
  },
  menuLink: {
    fontSize: 18,
    color: "#6C4F4B",
    marginVertical: 2,
  },
  icono: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: 12,
  },
  sectionTitle: {
    fontSize: 28,
    color: "#6C4F4B",
    textAlign: "center",
    marginVertical: 8,
  },
  testimonioContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginVertical: 8,
    justifyContent: "center",
  },
  fotoPlaceholder: {
    backgroundColor: "#CED2D4",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  fotoText: {
    color: "white",
    fontSize: 16,
  },
  testimonioNombre: {
    color: "#3A4A58",
    textAlign: "center",
  },
  testimonioFecha: {
    fontSize: 14,
    color: "#3A4A58",
    textAlign: "center",
  },
  footer: {
    textAlign: "center",
    marginTop: 32,
    paddingVertical: 12,
    backgroundColor: "#CED2D4",
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#2E3B4E",
    paddingVertical: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
    tintColor: "#fff",
  },
  navLabel: {
    color: "#fff",
    fontSize: 12,
  },

});
