import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Header from "../components/Header";
import { AntDesign } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";

const HomeScreen = () => {
  const navigation = useNavigation();

  // state to store the selected dates
  const [selectedDates, setSelectedDates] = useState([]);
  console.log(selectedDates);

  // states for room adult and children
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={28}
          color="white"
          style={{ marginRight: 15 }}
        />
      ),
    });
  }, []);

  // CUSTOM BUTTON
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        primary
        title="Submit"
        style={{
          container: {
            width: "80%",
            marginHorizontal: "3%",
          },
          text: { fontSize: 20 },
        }}
      ></Button>
    );
  };
  return (
    <View>
      <Header />
      <ScrollView>
        <View
          style={{
            margin: 20,
            borderColor: "#ffc72c",
            borderWidth: 3,
            borderRadius: 6,
          }}
        >
          {/* DESTINATION */}
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderWidth: 2,
              borderColor: "#ffc72c",
              paddingVertical: 12,
            }}
          >
            <Feather name="search" size={24} color="black" />
            <TextInput
              placeholderTextColor="black"
              placeholder="Enter Your Destination"
            ></TextInput>
          </Pressable>
          {/* SELECTED DATES */}
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderWidth: 2,
              borderColor: "#ffc72c",
              paddingVertical: 12,
            }}
          >
            <AntDesign name="calendar" size={24} color="black" />
            <DatePicker
              style={{
                width: 250,
                height: 30,
                borderRadius: 0,
                borderWidth: 0,
                borderColor: "transparent",
              }}
              customStyles={{
                placeholderText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "auto",
                  fontWeight: "bold",
                },
                headerStyle: { backgroundColor: "#003580" },
                contentText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                },
              }}
              centerAlign
              selectedBgColor="#0047AB"
              onConfirm={(startDate, endDate) =>
                setSelectedDates(startDate, endDate)
              }
              customButton={(onConfirm) => customButton(onConfirm)}
              allowFontScaling={false}
              placeholder={"11 Sept 2024 to 20 Sept 2024"}
              mode={"range"}
            ></DatePicker>
          </Pressable>
          {/* ROOMS AND GUESTS */}
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderWidth: 2,
              borderColor: "#ffc72c",
              paddingVertical: 12,
            }}
          >
            <AntDesign name="user" size={24} color="black" />
            <TextInput
              placeholderTextColor="red"
              placeholder="1 Room - 2 Adults - 0 Children"
            ></TextInput>
          </Pressable>
          {/* SEARCH BUTTON */}
          <Pressable
            style={{
              paddingHorizontal: 10,
              borderWidth: 2,
              borderColor: "#ffc72c",
              paddingVertical: 12,
              backgroundColor: "#2a52be",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: 500,
                color: "white",
              }}
            >
              Search
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HomeScreen;
