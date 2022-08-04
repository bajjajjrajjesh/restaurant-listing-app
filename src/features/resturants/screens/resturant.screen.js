import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  SafeAreaView,
} from "react-native";
import { React } from "react";
import { Searchbar } from "react-native-paper";
import { ResturantInfo } from "../components/resturant-info.component";
import styled from "styled-components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const ResturantInfoView = styled.View`
  flex: 1;
`;

const SearchBar = styled.View`
  justify-content: center;
  padding: 16px;
`;

export const ResturantScreen = () => {
  return (
    <>
      <SafeArea>
        <SearchBar>
          <Searchbar />
        </SearchBar>
        <ResturantInfoView>
          <ResturantInfo />
        </ResturantInfoView>
      </SafeArea>
    </>
  );
};
