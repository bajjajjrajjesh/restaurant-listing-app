import { React } from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-left: ${(props) => props.theme.space[3]};
  margin-right: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Go Where",
    image = ["https://picsum.photos/200"],
    description = "This is a great bar",
    openingHours = "10 AM - 10 PM",
    rating = 4.5,
    address = "123 Main St",
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover Key={name} source={{ uri: image[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
