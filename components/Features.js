import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowNarrowRightIcon } from "react-native-heroicons/outline";
import FeatureCards from "./FeatureCards";
import client from "../sanity";
import urlFor from "../sanity";

const Features = ({ id, title, description }) => {
  const [resturants, setResturants] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured" && _id == $id]{
            ...,
            resturant[]->{
              ...,
              dishes[]->, type-> {
                name
              }
            }
  }[0]`,
        { id }
      )
      .then((data) => {
        setResturants(data?.resturant);
      });
  }, []);

  return (
    <View className=" mt-2">
      {/* Title */}
      <View className="flex-row items-center mx-5">
        <Text className="flex-1 text-lg">{title}</Text>
        <ArrowNarrowRightIcon />
      </View>
      {/* FeatureCards */}
      <Text className="text-sm text-gray-500 mx-5">{description}</Text>
      {/* Description */}
      <ScrollView
        contentContainerStyle={{ paddingTop: 5, paddingHorizontal: 15 }}
        horizontal
        className="rounded-sm"
        showsHorizontalScrollIndicator={false}
      >
        {resturants?.map((resturant) => (
          <FeatureCards
            key={resturant._id}
            id={resturant._id}
            title={resturant.name}
            imgUrl={resturant.image}
            rating={resturant.rating}
            genre={resturant.type?.name}
            address={resturant.address}
            shortDescription={resturant.short_description}
            long={resturant.long}
            lat={resturant.lat}
            dishes={resturant.dishes}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Features;
