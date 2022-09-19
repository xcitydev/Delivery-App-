import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

const Welcome = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 4000);
  }, []);
  return (
    <View className="bg-[#4e9c7e]">
      <SafeAreaView>
        <Animatable.View
          animation="slideInUp"
          iterationCount={1}
          direction="alternate"
          className=" flex items-center w-full h-full bg-[#4e9c7e] mt-12"
        >
          <Text className="text-white font-bold text-4xl p-3 mt-10">
            Welcome
          </Text>
          <Text className="text-white font-bold text-2xl p-2 mb-4">To</Text>
          <Image
            source={require("../assets/chopandgo.png")}
            className="w-full h-[36%] object-contain"
          />
          <Text className="text-white font-bold text-4xl p-3 mt-10">
            Order and Chop
          </Text>
          <Progress.Circle
            size={50}
            indeterminate={true}
            color="#fff"
            className="my-6"
          />
        </Animatable.View>
      </SafeAreaView>
    </View>
  );
};

export default Welcome;
