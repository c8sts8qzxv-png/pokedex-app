import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import StateMessage from '../components/StateMessage';
import TypeBadge from '../components/TypeBadge';
import { fetchPokemonDetails } from '../api/pokeapi';
import { colorForType, colors, radius, spacing } from '../theme';

export default function DetailsScreen({ route, navigation }) {
  const { name } = route.params;
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadDetails() {
      try {
        const result = await fetchPokemonDetails(name);
        setDetails(result);
      } catch (e) {
        setError('Could not load this Pokemon. Please check your connection.');
      } finally {
        setLoading(false);
      }
    }
    loadDetails();
  }, [name]);

  useEffect(() => {
    navigation.setOptions({ title: name.charAt(0).toUpperCase() + name.slice(1) });
  }, [navigation, name]);

  if (loading) {
    return <StateMessage loading />;
  }

  if (error) {
    return <StateMessage message={error} />;
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={[styles.header, { backgroundColor: colorForType(details.types[0]) }]}>
        <Image source={{ uri: details.image }} style={styles.image} resizeMode="contain" />
      </View>

      <View style={styles.body}>
        <Text style={styles.name}>{details.name}</Text>
        <Text style={styles.number}>Nº{String(details.number).padStart(3, '0')}</Text>

        <View style={styles.typeRow}>
          {details.types.map((type) => (
            <TypeBadge key={type} type={type} />
          ))}
        </View>

        <View style={styles.measureRow}>
          <View style={styles.measure}>
            <Text style={styles.measureLabel}>Height</Text>
            <View style={styles.measureBox}>
              <Text style={styles.measureValue}>{details.heightM.toFixed(1)} m</Text>
            </View>
          </View>
          <View style={styles.measure}>
            <Text style={styles.measureLabel}>Weight</Text>
            <View style={styles.measureBox}>
              <Text style={styles.measureValue}>{details.weightKg.toFixed(1)} kg</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  content: {
    paddingBottom: spacing.xl,
  },
  header: {
    alignItems: 'center',
    paddingVertical: spacing.lg,
  },
  image: {
    width: 200,
    height: 200,
  },
  body: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: radius.md,
    borderTopRightRadius: radius.md,
    marginTop: -spacing.lg,
    paddingTop: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textDark,
    textTransform: 'capitalize',
  },
  number: {
    fontSize: 15,
    color: colors.textMedium,
    marginTop: spacing.xs,
  },
  typeRow: {
    flexDirection: 'row',
    marginTop: spacing.md,
  },
  measureRow: {
    flexDirection: 'row',
    marginTop: spacing.xl,
  },
  measure: {
    flex: 1,
    marginRight: spacing.md,
  },
  measureLabel: {
    fontSize: 12,
    color: colors.textMedium,
    textTransform: 'uppercase',
    marginBottom: spacing.xs,
  },
  measureBox: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  measureValue: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.textDark,
  },
});
