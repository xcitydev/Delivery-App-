import { ScrollView, Text, View } from "react-native";
import React, { Component, useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import client from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "category" ]{
            ...,
            
            
        }
      `
      )
      .then((category) => {
        setCategories(category);
      });
  }, []);
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 5,
      }}
      showsHorizontalScrollIndicator={false}
      className="mb-2"
    >
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          title={category.name}
          imageUrl={category.image}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
