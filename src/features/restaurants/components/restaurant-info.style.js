import styled from "styled-components";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-left: ${(props) => props.theme.space[3]};
  margin-right: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  border-top-left-radius: ${(props) => props.theme.space[3]};
  border-top-right-radius: ${(props) => props.theme.space[3]};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  // padding-bottom: ${(props) => props.theme.space[2]};
  padding-top: ${(props) => props.theme.space[2]};
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const OpenHours = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const OpeningStatus = styled.Image`
  width: ${(props) => props.theme.space[3]};
  height: ${(props) => props.theme.space[3]};
`;
