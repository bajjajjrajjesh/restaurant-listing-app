import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, SafeAreaView } from "react-native";
import { React } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";
import styled from "styled-components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const RestaurantInfoView = styled.View`
  flex: 1;
`;

const SearchBar = styled.View`
  justify-content: center;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => {
  return (
    <>
      <SafeArea>
        <SearchBar>
          <Searchbar />
        </SearchBar>
        <RestaurantInfoView>
          <RestaurantInfo />
        </RestaurantInfoView>
      </SafeArea>
    </>
  );
};
