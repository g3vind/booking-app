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
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

const HomeScreen = () => {
  const navigation = useNavigation();

  // state to store the selected dates
  const [selectedDates, setSelectedDates] = useState([]);
  console.log(selectedDates);

  // states for room adult and children
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // state to check modal visibility
  const [modalVisible, setModalVisible] = useState(false);

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
    <>
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
              onPress={() => setModalVisible(!modalVisible)}
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
                placeholder={`${rooms} Rooms - ${adults} Adults - ${children} Children`}
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
      {/* BOTTOM MODAL */}
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: "#003580",
              }}
              onPress={() => setModalVisible(!modalVisible)}
            ></ModalButton>
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select Rooms and Guests"></ModalTitle>}
        modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        {/* MODAL CONTENT */}
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 500 }}>Rooms</Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginVertical: 15,
              }}
            >
              <Pressable
                onPress={() => setRooms(Math.max(1, rooms - 1))}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 13,
                  borderColor: "#bebebe",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: 600,
                    paddingHorizontal: 6,
                    marginVertical: -2,
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: 500,
                    paddingHorizontal: 6,
                    marginVertical: -4,
                  }}
                >
                  {rooms}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setRooms((room) => room + 1)}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  borderColor: "#bebebe",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: 600,
                    paddingHorizontal: 6,
                    // marginVertical: -4,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          {/* SECOND */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 500 }}>Adults</Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginVertical: 15,
              }}
            >
              <Pressable
                onPress={() => setAdults(Math.max(1, adults - 1))}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 13,
                  borderColor: "#bebebe",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: 600,
                    paddingHorizontal: 6,
                    marginVertical: -2,
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: 500,
                    paddingHorizontal: 6,
                    marginVertical: -4,
                  }}
                >
                  {adults}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setAdults((adult) => adult + 1)}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  borderColor: "#bebebe",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: 600,
                    paddingHorizontal: 6,
                    // marginVertical: -4,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          {/* THIRD */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 500 }}>Children</Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginVertical: 15,
              }}
            >
              <Pressable
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 13,
                  borderColor: "#bebebe",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: 600,
                    paddingHorizontal: 6,
                    marginVertical: -2,
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: 500,
                    paddingHorizontal: 6,
                    marginVertical: -4,
                  }}
                >
                  {children}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setChildren((children) => children + 1)}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  borderColor: "#bebebe",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: 600,
                    paddingHorizontal: 6,
                    // marginVertical: -4,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
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
