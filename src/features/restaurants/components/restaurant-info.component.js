import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Rating,
  OpenHours,
  OpeningStatus,
} from "./restaurant-info.style";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Hard Rock Cafe",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    image = [
      "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000",
      "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000",
    ],
    isOpenNow = true,
    rating = 4,
    address = "159 W. Main St, New York, NY 10012, USA",
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover Key={name} source={{ uri: image[(0, 1)] }} />
      <Info>
        <Text variant="title">{name}</Text>
        <Text variant="label">{address}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width="20" height="20" />
            ))}
            <OpenHours>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="large" />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <Spacer position="left" size="large" />
              <OpeningStatus source={{ uri: icon }} />
            </OpenHours>
          </Rating>
        </Section>
      </Info>
    </RestaurantCard>
  );
};
