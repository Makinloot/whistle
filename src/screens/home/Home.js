import { View, Text, ScrollView, FlatList } from "react-native";
import Card from "../../components/card/Card";

const arr = [
  {
    id: 1,
    image:
      "https://i1.sndcdn.com/artworks-66ztWDe33g72CZam-qS9nnw-t240x240.jpg",
    title: "Bassiani invites Newa b2b Ndrx / Podcast #168",
    artist: "bassiani",
  },
  {
    id: 2,
    image:
      "https://i1.sndcdn.com/artworks-K32I1PqMzFTvHzsr-q6N4eA-t240x240.jpg",
    title: "Bassiani invites Accelerationism / Podcast #175",
    artist: "bassiani",
  },
  {
    id: 3,
    image:
      "https://i1.sndcdn.com/artworks-gKy3G8UQl93nW7Yp-lxPrhg-t240x240.jpg",
    title: "Bassiani invites Olly / Podcast #169",
    artist: "bassiani",
  },
  {
    id: 4,
    image:
      "https://i1.sndcdn.com/artworks-qLbsSa84C6z5JYW6-LdH0DQ-t240x240.jpg",
    title: "Bassiani invites DJ Plant Texture / Podcast #174",
    artist: "bassiani",
  },
  {
    id: 5,
    image:
      "https://i1.sndcdn.com/artworks-CUztiYNlSuj3ZddX-Qx8WQA-t240x240.jpg",
    title: "Bassiani invites Casper Tielrooij / Podcast #167",
    artist: "bassiani",
  },
];

const Home = () => {
  return (
    <View>
      {/* <Text className="font-bold text-lg capitalize">welcome back !</Text> */}

      <ScrollView>
        <View className="p-2">
          <FlatList
            data={arr}
            renderItem={(item) => <Card {...item.item} />}
            horizontal
            ItemSeparatorComponent={() => <View className="w-4" />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
