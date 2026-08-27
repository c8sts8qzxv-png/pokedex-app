import { Pressable, StyleSheet } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing } from '../theme';

// The drawer sits above the tabs, whose headers are hidden, so the drawer's
// own toggle is not rendered. This puts it back in the header that is shown.
export default function DrawerButton() {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      accessibilityRole="button"
      accessibilityLabel="Open navigation menu"
    >
      <Ionicons name="menu" size={24} color={colors.surface} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: spacing.md,
  },
});
