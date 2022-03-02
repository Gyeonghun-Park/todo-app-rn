import { useCallback } from "react";
import { HStack, IconButton } from "native-base";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

interface Props {
  isWhite: boolean;
}

function NavBar({ isWhite }: Props) {
  const navigation = useNavigation<DrawerNavigationProp<{}>>();
  const handlePressMenuButton = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  return (
    <HStack w="full" h={40} alignItems="center" alignContent="center" p={4}>
      <IconButton
        onPress={handlePressMenuButton}
        borderRadius={100}
        _icon={{
          as: Feather,
          name: "menu",
          size: 6,
          color: `${isWhite ? "white" : "black"}`,
        }}
      />
    </HStack>
  );
}

export default NavBar;

NavBar.defaultProps = {
  isWhite: true,
};
