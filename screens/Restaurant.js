import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { useDispatch, useSelector } from "react-redux";

import {
  ArrowLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import Dishes from "../components/Dishes";
import CartPopup from "../components/CartPopup";
import { restaurantItems } from "../features/restaurantSlice";

const Restaurant = () => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const {
    params: {
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
    },
  } = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(
      restaurantItems({
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
      })
    );
  }, []);

  return (
    <>
      <CartPopup />
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Image
              source={{
                uri: urlFor(imgUrl).url(),
              }}
              className="w-full h-56 relative"
            />
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              className="absolute bg-white top-7 p-2 mx-2 rounded-full"
            >
              <ArrowLeftIcon size={20} />
            </TouchableOpacity>
          </View>
          <View>
            <View className="bg-white">
              <View>
                <Text className="text-xl font-bold px-4 pt-4">{title}</Text>
              </View>
              <View className="flex-row items-center px-3 space-x-1 pt-2">
                <View className="flex-row items-center space-x-1">
                  <StarIcon opacity={0.5} size={22} color="#33D75F" />
                  <Text>{rating}</Text>
                  <Text>{genre}</Text>
                </View>
                <View className="flex-row items-center space-x-1">
                  <LocationMarkerIcon opacity={0.5} size={22} color="#33D75F" />
                  <Text>Nearby - {address}</Text>
                </View>
              </View>
              <View className="px-4 p-3">
                <Text>{shortDescription}</Text>
              </View>
              <TouchableOpacity>
                <View className="flex-row items-center p-3 border-slate-200 border-y-2">
                  <View
                    className="flex-row items-center flex-1 space-x-1
              "
                  >
                    <QuestionMarkCircleIcon color="#808080" />
                    <Text className="font-bold">Have a food allergy?</Text>
                  </View>
                  <ChevronRightIcon color="#33D75F" />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Text className="font-bold text-lg p-2">Menu</Text>
            </View>
            <View className="pb-28">
              {dishes?.map((dish) => (
                <Dishes
                  key={dish._id}
                  id={dish._id}
                  name={dish.name}
                  description={dish.short_description}
                  price={dish.price}
                  image={dish.image}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Restaurant;
