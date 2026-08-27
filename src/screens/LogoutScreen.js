import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, spacing } from '../theme';

export default function LogoutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons name="log-out-outline" size={48} color={colors.textMedium} />
      <Text style={styles.title}>Sign out of Pokedex?</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Pokedex')}>
        <Text style={styles.buttonLabel}>Log out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    padding: spacing.xl,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textDark,
    marginTop: spacing.md,
  },
  button: {
    marginTop: spacing.xl,
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: radius.sm,
  },
  buttonLabel: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
});
