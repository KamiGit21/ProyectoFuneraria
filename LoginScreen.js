// LoginScreen.js
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const slideAnim = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogin = () => {
    console.log("Iniciando sesión con:", email, password);
    // Aquí iría la lógica de autenticación
  };

  return (
    <View style={styles.screenContainer}>
      <Animated.View style={[styles.container, { transform: [{ translateX: slideAnim }] }]}>
        <Image source={require("./assets/logo.png")} style={styles.logo} />

        <Text style={styles.title}>Iniciar Sesión</Text>

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.linkText}>¿No tienes cuenta? Regístrate</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Barra inferior */}
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

        <TouchableOpacity style={styles.navItemActive}>
          <Image
            source={require("./assets/user-icon.png")}
            style={styles.navIconActive}
          />
          <Text style={styles.navLabelActive}>Login</Text>
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
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: "#6C4F4B",
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    width: "100%",
  },
  button: {
    backgroundColor: "#6C4F4B",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  linkText: {
    marginTop: 16,
    color: "#3A4A58",
    textAlign: "center",
    textDecorationLine: "underline",
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
  navItemActive: {
    alignItems: "center",
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
    tintColor: "#fff",
  },
  navIconActive: {
    width: 24,
    height: 24,
    marginBottom: 4,
    tintColor: "#FFD700", // icono activo en dorado
  },
  navLabel: {
    color: "#fff",
    fontSize: 12,
  },
  navLabelActive: {
    color: "#FFD700",
    fontSize: 12,
  },
});
