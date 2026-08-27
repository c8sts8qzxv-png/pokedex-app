import { StyleSheet, Text, View } from 'react-native';
import { colorForType, radius, spacing } from '../theme';

export default function TypeBadge({ type }) {
  return (
    <View style={[styles.badge, { backgroundColor: colorForType(type) }]}>
      <Text style={styles.label}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.sm,
    marginRight: spacing.sm,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
