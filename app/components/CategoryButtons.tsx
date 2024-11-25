import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import Color from "../contants/Color";
import destinationCategories from "../data/categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CategoryButtons = () => {
  const itemRef = useRef<TouchableOpacity[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectCategory = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 5,
          paddingVertical: 10,
          marginBottom: 10,
        }}
      >
        {destinationCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            ref={(el) => (itemRef.current[index] = el)}
            onPress={() => handleSelectCategory(index)}
            style={
              activeIndex === index
                ? styles.categoryBtnActive
                : styles.categoryBtn
            }
          >
            <MaterialCommunityIcons
              name={item.iconName as any}
              size={20}
              color={Color.black}
            />
            <Text style={styles.categoryBtnTxt}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryButtons;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: Color.black,
  },
  categoryBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: Color.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    backgroundColor: Color.white,
  },
  categoryBtnActive: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: Color.primaryColor,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    backgroundColor: Color.white,
  },
  categoryBtnTxt: {
    marginLeft: 5,
    color: Color.black,
  },
});
