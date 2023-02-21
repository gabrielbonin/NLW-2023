import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
export function HabitIsEmpty() {
  const { navigate } = useNavigation();
  return (
    <Text className="text-zinc-400 text-base">
      Você ainda não tem hábitos cadastrados{" "}
      <Text
        className="text-violet-400 text-base underline"
        onPress={() => navigate("new")}
      >
        comece cadastrando um agora!
      </Text>
    </Text>
  );
}
