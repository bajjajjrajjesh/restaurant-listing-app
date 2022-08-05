import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-left: ${(props) => props.theme.space[3]};
  margin-right: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.space[3]};
`;

const RestaurantCardCover = styled(Card.Cover)`
  border-top-left-radius: ${(props) => props.theme.space[3]};
  border-top-right-radius: ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.monospace};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: ${(props) => props.theme.space[2]};
  padding-top: ${(props) => props.theme.space[2]};
`;

const Rating = styled.View`
  flex-direction: row;
`;

const OpenHours = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Spacing = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

const OpeningStatus = styled.Image`
  width: ${(props) => props.theme.space[3]};
  height: ${(props) => props.theme.space[3]};
`;

const ClosedTemporarily = styled(Text)`
  variant: "label";
  color: ${(props) => props.theme.colors.ui.error};
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Go Where",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    image = [
      "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000",
      "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000",
    ],
    isOpenNow = true,
    rating = 4,
    address = "123 Main St",
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover Key={name} source={{ uri: image[(0, 1)] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width="20" height="20" />
            ))}
            <OpenHours>
              {isClosedTemporarily && (
                <ClosedTemporarily>CLOSED TEMPORARILY</ClosedTemporarily>
              )}
              <Spacing />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <Spacing />
              <OpeningStatus source={{ uri: icon }} />
            </OpenHours>
          </Rating>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
