import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

const availableWeekDays = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

export function New() {
  const [weekDays, setWeekDays] = useState<number[]>([]);
  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays((prevState) =>
        prevState.filter((weekDay) => weekDay !== weekDayIndex)
      );
    } else {
      setWeekDays((prevState) => [...prevState, weekDayIndex]);
    }
  }
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <BackButton />
        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar habito
        </Text>
        <Text className="mt-6 text-white font-extrabold text-base">
          Qual seu comprometimento?
        </Text>
        <TextInput
          placeholder="Exercícios, dormir bem, etc..."
          placeholderTextColor={colors.zinc[400]}
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white border-2 border-zinc-800 focus:border-green-600"
        />
        <Text className="font-semibold mt-4 mb-3 text-white text-base">
          Qual a recorrência?
        </Text>
        {availableWeekDays.map((weekDay, index) => {
          return (
            <Checkbox
              onPress={() => handleToggleWeekDay(index)}
              key={weekDay}
              title={weekDay}
              checked={weekDays.includes(index)}
            />
          );
        })}

        <TouchableOpacity
          className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
          activeOpacity={0.7}
        >
          <Feather name="check" size={20} color={colors.white} />
          <Text className="font-semibold text-base text-white ml-2">
            Confirmar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
