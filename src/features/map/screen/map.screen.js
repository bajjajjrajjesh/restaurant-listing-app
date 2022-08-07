import React from "react";
import { SafeArea } from "../../../utils/safe-area.component";
import MapView from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";
import { PROVIDER_GOOGLE } from "react-native-maps";

export const MapScreen = () => {
  return (
    <SafeArea>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 22.6241504,
            longitude: 88.4306945,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
