import { View, Text, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const Search = () => {
  return (
    <View className="flex-1 items-center px-2">
      <Text className="text-lg capitalize font-bold my-4">search</Text>
      <View className="relative w-full h-10">
        <View className="absolute left-2 top-2 z-10">
          <FontAwesome 
            name='search' 
            color="#fff"
            size={24}
          />
        </View>
        <TextInput 
          className="bg-[#303030] h-full pl-10 rounded-lg text-white" 
          placeholder='Search'
          placeholderTextColor="#fff"
          autoCorrect={false}
        />
      </View>
    </View>
  )
}

export default Search