import { React } from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

const ResturantCard = styled(Card)`
  background-color: #fff;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
`;

const ResturantCardCover = styled(Card.Cover)`
  background-color: #fff;
  padding: 16px;
`;

const Title = styled(Text)`
  padding: 20px;
  color: red;
`;

export const ResturantInfo = ({ restaurant = {} }) => {
  const {
    name = "Go Where",
    image = ["https://picsum.photos/200"],
    description = "This is a great bar",
    openingHours = "10 AM - 10 PM",
    rating = 4.5,
    address = "123 Main St",
  } = restaurant;

  return (
    <ResturantCard elevation={5}>
      <ResturantCardCover Key={name} source={{ uri: image[0] }} />
      <Title>{name}</Title>
    </ResturantCard>

  );
};
