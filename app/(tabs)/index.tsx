import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Color from "../contants/Color";
import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import CategoryButtons from "../components/CategoryButtons";

const index = () => {
  const headerHeight = useHeaderHeight();
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/men/1.jpg",
                }}
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: Color.white,
                padding: 10,
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 4,
              }}
            >
              <Ionicons name="notifications" size={20} color={Color.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <Text style={styles.headingText}>Explore The Beatiful World!</Text>

        <View style={styles.searchSectionWrapper}>
          <View style={styles.searchBar}>
            <Ionicons
              name="search"
              size={18}
              style={{ marginRight: 5 }}
              color={Color.black}
            />
            <TextInput placeholder="Search..." />
          </View>
          <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
            <Ionicons name="options" size={28} color={Color.white} />
          </TouchableOpacity>
        </View>
        <CategoryButtons />
      </View>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Color.bgColor,
  },
  headingText: {
    fontSize: 28,
    fontWeight: "800",
    color: Color.black,
    marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
    padding: 12,
    borderRadius: 10,
  },
  filterBtn: {
    backgroundColor: Color.primaryColor,
    alignItems: "center",
    borderRadius: 10,
    padding: 16,
    marginLeft: 20,
  },
});
