import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
const RequestScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);
  return (
    <View className="bg-[#4e9c7e] h-full w-full items-center justify-center">
      <SafeAreaView>
        <View className="items-center justify-center">
          <Animatable.Image
            source={require("../assets/cit.png")}
            animation="slideInUp"
            iterationCount={1}
            direction="alternate"
          />
          <Animatable.Text
            className="text-white p-2 text-lg"
            animation="slideInUp"
            iterationCount={1}
            direction="alternate"
          >
            Waiting for your order to be confirmed
          </Animatable.Text>
          <Progress.Circle
            size={50}
            indeterminate={true}
            color="#fff"
            className="my-6"
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default RequestScreen;
