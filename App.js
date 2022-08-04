import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ResturantScreen } from "./src/features/resturants/screens/resturant.screen";

export default function App() {
  return (
    <>
      <ResturantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
