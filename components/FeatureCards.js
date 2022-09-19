import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const FeatureCards = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  shortDescription,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          shortDescription,
          dishes,
          long,
          lat,
        });
      }}
      className=" bg-white w-64 rounded-sm mb-1 shadow-lg mx-1"
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="w-64 h-32 rounded-sm"
      />
      <View className="px-5">
        <Text className="font-bold text-lg">{title}</Text>
        <View className="flex-row space-x-1 items-center ">
          <StarIcon color="#33D75F" />
          <Text className="text-sm text-green-600">{rating}</Text>
          <Text className="text-gray-500">{genre}</Text>
        </View>
        <View className="flex-row items-center p-1 space-x-2">
          <LocationMarkerIcon color="#7a7d7d" size={15} className="px-1" />

          <Text className="text-gray-500  text-xs">Nearby - </Text>
          <Text className="text-gray-500  text-xs">{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeatureCards;
