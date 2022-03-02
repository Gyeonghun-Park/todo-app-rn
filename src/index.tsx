import { createDrawerNavigator } from "@react-navigation/drawer";
import MainScreen from "./screens/MainScreen";
import Sidebar from "./components/SideBar";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={(props) => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: "back",
        overlayColor: "#00000000",
      }}
    >
      <Drawer.Screen name="Main" component={MainScreen} />
    </Drawer.Navigator>
  );
}

export default App;
