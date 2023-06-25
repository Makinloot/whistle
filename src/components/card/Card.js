import { View, Text, Image } from "react-native";

const Card = ({ image, title, artist }) => {
  return (
    <View className="w-40">
      <Image
        source={{
          uri: image,
        }}
        className="h-40 w-40"
      />
      <Text className="my-1 text-sm font-bold text-white" numberOfLines={2}>
        {title}
      </Text>
      <Text className="font-medium capitalize text-white/50">{artist}</Text>
    </View>
  );
};

export default Card;
