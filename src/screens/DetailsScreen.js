import React, { useEffect, useState } from 'react';
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
        <Text style={styles.number}>#{String(details.number).padStart(3, '0')}</Text>
        <Image source={{ uri: details.image }} style={styles.image} resizeMode="contain" />
      </View>

      <Text style={styles.name}>{details.name}</Text>

      <Text style={styles.label}>Type</Text>
      <View style={styles.typeRow}>
        {details.types.map((type) => (
          <TypeBadge key={type} type={type} />
        ))}
      </View>

      <View style={styles.measureRow}>
        <View style={styles.measure}>
          <Text style={styles.measureValue}>{details.heightM.toFixed(1)} m</Text>
          <Text style={styles.measureLabel}>Height</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.measure}>
          <Text style={styles.measureValue}>{details.weightKg.toFixed(1)} kg</Text>
          <Text style={styles.measureLabel}>Weight</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingBottom: spacing.xl,
  },
  header: {
    alignItems: 'center',
    paddingVertical: spacing.lg,
  },
  number: {
    alignSelf: 'flex-start',
    marginLeft: spacing.lg,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  image: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textDark,
    textAlign: 'center',
    textTransform: 'capitalize',
    marginTop: spacing.lg,
  },
  label: {
    fontSize: 13,
    color: colors.textMedium,
    textAlign: 'center',
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  typeRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  measureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    marginHorizontal: spacing.lg,
    marginTop: spacing.xl,
    paddingVertical: spacing.lg,
  },
  measure: {
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    height: 32,
    backgroundColor: colors.border,
  },
  measureValue: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textDark,
  },
  measureLabel: {
    fontSize: 13,
    color: colors.textMedium,
    marginTop: spacing.xs,
  },
});
