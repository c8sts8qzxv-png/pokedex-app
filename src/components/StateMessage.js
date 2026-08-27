import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme';

// Shared loading / error block so every screen reports state the same way.
export default function StateMessage({ loading, message }) {
  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size="large" color={colors.primary} /> : null}
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },
  message: {
    marginTop: spacing.md,
    fontSize: 15,
    color: colors.textMedium,
    textAlign: 'center',
  },
});
