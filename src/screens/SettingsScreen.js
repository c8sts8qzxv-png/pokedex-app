import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { colors, radius, spacing } from '../theme';

export default function SettingsScreen() {
  const [showNumbers, setShowNumbers] = useState(true);
  const [favouritesFirst, setFavouritesFirst] = useState(false);
  const [notifications, setNotifications] = useState(false);

  const rows = [
    { label: 'Show Pokedex numbers', value: showNumbers, onChange: setShowNumbers },
    { label: 'Favourites first', value: favouritesFirst, onChange: setFavouritesFirst },
    { label: 'Notifications', value: notifications, onChange: setNotifications },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {rows.map((row, index) => (
          <View
            key={row.label}
            style={[styles.row, index < rows.length - 1 && styles.rowDivider]}
          >
            <Text style={styles.label}>{row.label}</Text>
            <Switch
              value={row.value}
              onValueChange={row.onChange}
              trackColor={{ true: colors.primary }}
            />
          </View>
        ))}
      </View>
      <Text style={styles.note}>Preferences are kept for this session only.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.lg },
  card: { backgroundColor: colors.surface, borderRadius: radius.md },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  rowDivider: { borderBottomWidth: 1, borderBottomColor: colors.border },
  label: { fontSize: 15, color: colors.textDark },
  note: { fontSize: 13, color: colors.textMedium, marginTop: spacing.md },
});
