import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, spacing } from '../theme';

// Reusable card. Everything it renders arrives through props, so the same
// component is used for the Home list and could be reused anywhere else.
// The favourite button is a sibling of the card body rather than a child of
// it, so the two touch targets never nest inside one another.
export default function PokemonCard({
  name,
  image,
  number,
  isFavourite = false,
  onToggleFavourite,
  onPress,
}) {
  const paddedNumber = `#${String(number).padStart(3, '0')}`;

  return (
    <View style={styles.wrapper}>
      <Pressable
        style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={`${name}, number ${number}`}
      >
        <Text style={styles.number}>{paddedNumber}</Text>
        <Image source={{ uri: image }} style={styles.image} resizeMode="contain" />
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
      </Pressable>

      <Pressable
        style={styles.favouriteButton}
        onPress={onToggleFavourite}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel={
          isFavourite ? `Remove ${name} from favourites` : `Add ${name} to favourites`
        }
      >
        <Ionicons
          name={isFavourite ? 'heart' : 'heart-outline'}
          size={20}
          color={isFavourite ? colors.favourite : colors.textLight}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: spacing.xs,
  },
  card: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardPressed: {
    opacity: 0.7,
  },
  number: {
    fontSize: 12,
    color: colors.textMedium,
  },
  image: {
    width: '100%',
    height: 96,
    marginVertical: spacing.xs,
  },
  name: {
    fontSize: 15,
    color: colors.textDark,
    textAlign: 'center',
    textTransform: 'capitalize',
    marginBottom: spacing.xs,
  },
  favouriteButton: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    padding: spacing.xs,
  },
});
