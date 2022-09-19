import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Currency from "react-currency-formatter";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBasketItem, totalBasketItems } from "../features/basketSlice";
import { selectRestaurant } from "../features/restaurantSlice";
import { XIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { removeFromBasket } from "../features/basketSlice";
import CartItems from "../components/CartItems";

const CheckOut = () => {
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
  console.log(groupedRestuarants);

  return (
    <>
      <SafeAreaView className="mt-5 w-full bg-white h-48 absolute bottom-0 z-10">
        <View className="flex-row items-center p-3 ">
          <Text className="flex-1 text-gray-500">Subtotal</Text>
          <Text className="pr-3 text-gray-500">
            <Currency quantity={totalItems} currency="USD" />
          </Text>
        </View>
        <View className="flex-row items-center p-3 ">
          <Text className="flex-1 text-gray-500">Delivery Fee</Text>
          <Text className="pr-3 text-gray-500">$5.99</Text>
        </View>
        <View className="flex-row items-center p-3 ">
          <Text className="flex-1 font-bold">Order Total</Text>
          <Text className="font-bold pr-3">
            <Currency quantity={totalItems + 5.99} currency="USD" />
          </Text>
        </View>
        <View className="flex-row items-center w-full justify-center">
          <TouchableOpacity
            onPress={() => navigation.navigate("Request")}
            className={`w-3/4 bg-[#4e9c7e] p-2 items-center rounded-lg ${
              items.length === 0 && `bg-[#797c7b]`
            }`}
            disabled={items.length === 0}
          >
            <Text className="font-bold text-lg text-white">Place Order</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <SafeAreaView>
        <View className="flex-row items-center justify-end bg-white p-2 mb-2 relative">
          <View className=" w-3/6 ">
            <Text className="ml-2 text-lg font-bold">Basket</Text>
            <Text className="ml-2 text-xs text-gray-500">
              {restuarant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="self-end p-3 bg-[#3b876a] rounded-full m-2 mr-4"
          >
            <XIcon color="#ffff" size={15} />
          </TouchableOpacity>
        </View>
        <View className=" bg-white flex-row items-center my-3 mb-4">
          <View className="flex-row items-center p-2 space-x-2 flex-1">
            <Image
              source={{
                uri: "https://image.shutterstock.com/image-vector/delivery-service-worker-riding-vintage-260nw-1546230749.jpg",
              }}
              className="w-10 h-10 rounded-full"
            />
            <Text>Deliver in 50-75min</Text>
          </View>
          <TouchableOpacity className="pr-2">
            <Text className="text-green-400 text-xs font-bold pr-2">
              Change
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View className="mb-52">
            {Object.entries(groupedRestuarants).map(([key, item]) => (
              <CartItems item={item} id={key} key={key} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default CheckOut;
