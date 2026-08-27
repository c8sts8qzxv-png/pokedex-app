import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '../theme';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Text style={styles.title}>Pokedex</Text>
        <Text style={styles.body}>
          A small Pokemon browser built with React Native and Expo. It lists Pokemon
          fetched live from the PokeAPI, lets you mark favourites, and opens a details
          screen with each Pokemon's type, height and weight.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Data source</Text>
        <Text style={styles.body}>
          All data comes from PokeAPI, a free and open Pokemon API that needs no key.
        </Text>
        <Text style={styles.link} onPress={() => Linking.openURL('https://pokeapi.co/')}>
          pokeapi.co
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Built with</Text>
        <Text style={styles.body}>
          Expo, React Navigation (stack, bottom tabs and drawer), and React hooks for
          state and data fetching.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.lg },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textDark,
    marginBottom: spacing.sm,
  },
  body: { fontSize: 14, lineHeight: 21, color: colors.textMedium },
  link: { fontSize: 14, color: colors.primary, marginTop: spacing.sm },
});
