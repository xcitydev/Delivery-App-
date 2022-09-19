import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import { selectBasketItem, totalBasketItems } from "../features/basketSlice";
import { selectRestaurant } from "../features/restaurantSlice";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { removeFromBasket } from "../features/basketSlice";
const CartItems = ({ item, id }) => {
  const restuarant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItem);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const totalItems = useSelector(totalBasketItems);
  const [groupedRestuarants, setGroupedRestuarants] = useState([]);
  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedRestuarants(groupedItems);
  }, [items]);
  return (
    <View className="flex-row items-center p-1 bg-white my-2">
      <View className="flex-1 flex-row items-center space-x-2">
        <Text className="p-3 text-emerald-500">{item?.length} x</Text>
        <Image
          source={{
            uri: urlFor(item[0]?.image).url(),
          }}
          className="w-12 h-12 rounded-full"
        />
        <Text>{item[0].name}</Text>
      </View>
      <View className="flex-row space-x-2">
        <Text>
          <Currency quantity={item[0].price} currency="USD" />
        </Text>
        <TouchableOpacity
          onPress={() => dispatch(removeFromBasket({ id: id }))}
        >
          <Text className="text-green-400 text-xs font-bold pr-2">Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItems;
