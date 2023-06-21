import { View, Text } from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

const Navbar = ({ active }) => {
  return (
    <View className="absolute bottom-0 w-screen py-2 px-6 flex-row justify-between bg-[#000]">
      <Ionicons name='home' size={32} color={active === 'home' ? "#fff" : "#999"} />
      <FontAwesome name='feed' size={32} color={active === 'feed' ? "#fff" : "#999"} />
      <Ionicons name='search' size={32} color={active === 'search' ? "#fff" : "#999"} />
      <Ionicons name='library' size={32} color={active === 'library' ? "#fff" : "#999"} />
    </View>
  )
}

export default Navbar