import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import Features from "../components/Features";
import client from "../sanity";
import urlFor from "../sanity";

const HomeScreen = () => {
  const [features, setFeatures] = useState([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured"]{
            ...,
            resturant[]->{
              ...,
              dishes[]->{
                ...,
              }
            }
  }`
      )
      .then((data) => {
        setFeatures(data);
      });
  }, []);

  return (
    <SafeAreaView className="pt-5  bg-white">
      <View className="flex-row pb-3 mx-4 space-x-2 items-center">
        {/* Image */}
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/delivery-service-with-car_138905-61.jpg?w=996",
          }}
          className="h-7 w-7 bg-gray-400 rounded-full p-4"
        />

        <View className="flex-1">
          <Text className="font-bold text-xs text-gray-500">Delivery</Text>
          <Text className="text-lg flex items-center">
            Current Location
            <ChevronDownIcon size={20} color="black" />
          </Text>
        </View>
        <UserIcon size={30} color="black" />
      </View>
      <View className="flex-row items-center pb-3 mx-4 space-x-2">
        <View className="flex-row bg-gray-300 p-2 flex-1">
          <SearchIcon />
          <TextInput placeholder="Welcome" keyboardType="default" />
        </View>
        <AdjustmentsIcon />
      </View>
      <ScrollView
        className="bg-gray-200"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {/* categories */}
        <Categories />
        {/* Features */}
        {features?.map((feature) => (
          <Features
            id={feature._id}
            key={feature._id}
            title={feature.name}
            description={feature.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
