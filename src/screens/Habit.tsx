import { ScrollView, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { BackButton } from "../components/BackButton";
import dayjs from "dayjs";
import { ProgressBar } from "../components/ProgressBar";
import { Checkbox } from "../components/Checkbox";

interface IHabitProps {
  date: string;
}

export function Habit() {
  const route = useRoute();
  const { date } = route.params as IHabitProps;
  const parsedDate = dayjs();
  const dayOfWeek = parsedDate.format("dddd");
  const dayAndMonth = parsedDate.format("DD/MM");
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />
        <Text className="text-zinc-400 font-semibold mt-6 text-base lowercase">
          {dayOfWeek}
        </Text>

        <Text className="text-zinc-400 font-extrabold mt-6 text-3xl">
          {dayAndMonth}
        </Text>
        <ProgressBar progress={40} />
        <View className="mt-6">
          <Checkbox title="Fazer exercícios" checked />
          <Checkbox title="Fazer exercícios" />
        </View>
      </ScrollView>
    </View>
  );
}
