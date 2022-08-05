import { React } from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-left: ${(props) => props.theme.space[3]};
  margin-right: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  // padding: ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.monospace};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-bottom: ${(props) => props.theme.space[2]};
  padding-top: ${(props) => props.theme.space[2]};
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Go Where",
    image = ["https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000"],
    description = "This is a great bar",
    openingHours = "10 AM - 10 PM",
    rating = 4,
    address = "123 Main St",
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover Key={name} source={{ uri: image[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width="20" height="20" />
          ))}
        </Rating>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
