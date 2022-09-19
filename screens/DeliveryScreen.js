import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Progress from "react-native-progress";
import { selectRestaurant } from "../features/restaurantSlice";
import MapView, { MapMarker } from "react-native-maps";

const DeliveryScreen = () => {
  const restuarant = useSelector(selectRestaurant);
  console.log(restuarant);
  return (
    <View className="bg-[#4e9c7e] w-full h-full">
      <SafeAreaView>
        <View className="bg-white mx-5 p-2 rounded-md shadow-2xl absolute mt-[20%] z-10 w-[90%]">
          <View className="flex-row px-4 p-2">
            <View className="flex-1">
              <Text className=" p-2">Estimated Arrival</Text>
              <Text className="font-bold text-2xl p-1">30-55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://image.shutterstock.com/image-vector/delivery-service-worker-riding-vintage-260nw-1546230749.jpg",
              }}
              className="w-14 h-14 rounded-lg"
            />
          </View>
          <View className="flex-row px-3 pb-2">
            <Progress.Bar
              progress={0.3}
              width={150}
              indeterminate={true}
              color="#4e9c7e"
            />
          </View>
          <Text className="text-gray-500 px-3">
            Your order at {restuarant.title} is being prepared
          </Text>
        </View>
        <View className="mt-[30%] mb-[-7%]">
          <MapView
            initialRegion={{
              latitude: restuarant.long,
              longitude: restuarant.lat,
              latitudeDelta: 0.004,
              longitudeDelta: 0.004,
            }}
            mapType="mutedStandard"
            className="w-full h-full"
          >
            <MapMarker
              coordinate={{
                latitude: restuarant.long,
                longitude: restuarant.lat,
              }}
              title="KFC"
              identifier="origin"
              description="Kentucky Fried Chicken"
              pinColor="#4e9c7e"
            ></MapMarker>
          </MapView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
