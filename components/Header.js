import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#003580",
        height: 65,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        border: "none",
      }}
    >
      {/* STAYS */}
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "white",
          borderWidth: 1,
          borderRadius: 25,
          padding: 8,
        }}
      >
        <Ionicons name="bed-outline" size={24} color="white" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 12,
          }}
        >
          Stays
        </Text>
      </Pressable>
      {/* FLIGHTS */}
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="airplane-outline" size={24} color="white" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 12,
          }}
        >
          Flights
        </Text>
      </Pressable>
      {/* CAR RENTAL */}
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <AntDesign name="car" size={24} color="white" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 12,
          }}
        >
          Car Rental
        </Text>
      </Pressable>
      {/* TAXI */}
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: 5,
        }}
      >
        <MaterialIcons name="local-taxi" size={24} color="white" />
        <Text
          style={{
            marginLeft: 6,
            fontWeight: "bold",
            color: "white",
            fontSize: 13,
          }}
        >
          Taxi
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
