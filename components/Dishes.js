import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  selectBasketItemId,
  removeFromBasket,
} from "../features/basketSlice";

const Dishes = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemId(state, id));

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };
  const removeItemsFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  console.log(items);
  return (
    <>
      <TouchableOpacity
        className={`border-y bg-white border-gray-400 ${
          isPressed && `border-y`
        }`}
        onPress={() => {
          setIsPressed(!isPressed);
        }}
      >
        <View className={`p-3 flex-row `}>
          <View className="flex-1">
            <Text className="font-semibold text-lg">{name}</Text>
            <Text>{description}</Text>
            <Text className="py-2">
              <Currency currency="USD" quantity={price} />
            </Text>
          </View>
          <View className="w-1/5 h-20">
            <Image
              source={{
                uri: urlFor(image).url(),
              }}
              className="w-20 h-20 rounded-md"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="flex-row items-center p-2 pl-3 space-x-2">
          <TouchableOpacity
            className={`${!items.length && `text-zinc-600`} `}
            disabled={!items.length}
            onPress={removeItemsFromBasket}
          >
            <MinusCircleIcon size={25} />
          </TouchableOpacity>
          <Text>{items.length}</Text>
          <TouchableOpacity onPress={addItemToBasket}>
            <PlusCircleIcon size={25} />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Dishes;
