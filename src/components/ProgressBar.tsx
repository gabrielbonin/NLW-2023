import { View } from "react-native";

interface IProgressProps {
  progress?: number;
}

export function ProgressBar({ progress = 0 }: IProgressProps) {
  return (
    <View className="w-full h-3 rounded-xl bg-zinc-700 mt-4">
      <View
        style={{ width: `${progress}%` }}
        className="h-3 rounded-xl bg-violet-600"
      ></View>
    </View>
  );
}
