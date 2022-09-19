import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
const CategoryCard = ({ id, title, imageUrl }) => {
  return (
    <TouchableOpacity className="mx-1 bg-black p-0.5 rounded-sm">
      <Image
        className="w-20 h-20 rounded-sm"
        source={{
          uri: urlFor(imageUrl).url(),
        }}
      />
      <Text className="absolute bottom-1 font-bold text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
