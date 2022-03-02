import {
  ScrollView,
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import AnimatedColorBox from "../components/AnimatedColorBox";
import LinkButton from "../components/LinkButton";
import NavBar from "../components/NavBar";
import Masthead from "../components/Masthead";

function AboutScreen() {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("warmGray.50", "warmGray.900")}
      w="full"
    >
      <Masthead title="" image={require("../assets/aboutMasthead.png")}>
        <NavBar isWhite={false} />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue("warmGray.50", "primary.900")}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require("../assets/profile.jpeg")}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
          </Box>
          <Text fontSize="md" w="full">
            This is a task management app to help you stay organized and manage
            your day-to-day.
          </Text>
          <LinkButton
            colorScheme="red"
            size="lg"
            borderRadius="full"
            href="https://github.com/Gyeonghun-Park/blockchain-blog"
            leftIcon={<Icon as={Feather} name="book" size="sm" opacity={0.5} />}
          >
            Other Works
          </LinkButton>
          <LinkButton
            colorScheme="trueGray"
            size="lg"
            borderRadius="full"
            href="https://github.com/Gyeonghun-Park/todo-app-rn"
            leftIcon={
              <Icon as={Feather} name="github" size="sm" opacity={0.5} />
            }
          >
            Source Code
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  );
}

export default AboutScreen;
