import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { colors } from '../theme';

const Stack = createNativeStackNavigator();

// Stack for the Home tab: the list pushes the details screen on top of itself.
export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen name="PokemonList" component={HomeScreen} options={{ title: 'Pokedex' }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} />
    </Stack.Navigator>
  );
}
