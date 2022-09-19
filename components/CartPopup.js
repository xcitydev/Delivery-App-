import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import { selectBasketItem, totalBasketItems } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
const CartPopup = () => {
  const items = useSelector(selectBasketItem);
  const navigation = useNavigation();
  const totalPrice = useSelector(totalBasketItems);
  return (
    <View className="absolute bottom-10 z-10 w-full h-16 p-4">
      <TouchableOpacity
        className="bg-[#42ad84] w-full h-14 rounded-lg shadow-lg flex-row items-center justify-between p-2 px-4"
        onPress={() => navigation.navigate("CheckOut")}
      >
        <View className=" bg-[#25694e] p-2 rounded-sm py-1">
          <Text className="text-lg font-bold text-white">{items.length}</Text>
        </View>
        <Text className="text-white font-bold text-lg">View Basket</Text>
        <Text className="text-white font-bold text-base">
          <Currency quantity={totalPrice} currency="USD" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartPopup;
