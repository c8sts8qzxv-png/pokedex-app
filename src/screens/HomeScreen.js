import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import PokemonCard from '../components/PokemonCard';
import StateMessage from '../components/StateMessage';
import { fetchPokemonList } from '../api/pokeapi';
import { colors, spacing } from '../theme';

export default function HomeScreen({ navigation }) {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Favourites live here so the whole list shares one source of truth;
  // each card is told whether it is a favourite through props.
  const [favourites, setFavourites] = useState({});

  useEffect(() => {
    async function loadPokemon() {
      try {
        const results = await fetchPokemonList();
        setPokemon(results);
      } catch (e) {
        setError('Could not load Pokemon. Please check your connection.');
      } finally {
        setLoading(false);
      }
    }
    loadPokemon();
  }, []);

  function toggleFavourite(name) {
    setFavourites((current) => ({ ...current, [name]: !current[name] }));
  }

  if (loading) {
    return <StateMessage loading />;
  }

  if (error) {
    return <StateMessage message={error} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemon}
        keyExtractor={(item) => item.name}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <PokemonCard
            name={item.name}
            image={item.image}
            number={item.number}
            isFavourite={!!favourites[item.name]}
            onToggleFavourite={() => toggleFavourite(item.name)}
            onPress={() => navigation.navigate('Details', { name: item.name })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    padding: spacing.sm,
  },
});
