import { StyleSheet, Text, View } from 'react-native';
import { colorForType, colors, spacing } from '../theme';

// Full pill, matching the reference design.
export default function TypeBadge({ type }) {
  return (
    <View style={[styles.badge, { backgroundColor: colorForType(type) }]}>
      <Text style={styles.label}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xs,
    borderRadius: 999,
    marginRight: spacing.sm,
  },
  label: {
    color: colors.surface,
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
