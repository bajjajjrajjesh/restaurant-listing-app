import { StatusBar, SafeAreaView, FlatList } from "react-native";
import { React } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";
import styled from "styled-components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const SearchBar = styled.View`
  justify-content: center;
  // padding: ${(props) => props.theme.space[3]};
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[2]};
`;

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchBar>
        <Searchbar />
      </SearchBar>
      <FlatList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
        renderItem={() => <RestaurantInfo />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
