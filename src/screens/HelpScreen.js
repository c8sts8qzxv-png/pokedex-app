import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '../theme';

const FAQS = [
  {
    question: 'How do I see a Pokemon in detail?',
    answer: 'Tap any card on the Home screen to open its details.',
  },
  {
    question: 'How do favourites work?',
    answer:
      'Tap the heart on a card to mark it. The count at the top of Home updates as you go.',
  },
  {
    question: 'The list will not load.',
    answer:
      'The app needs an internet connection to reach PokeAPI. Check your connection and use Try again.',
  },
];

export default function HelpScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {FAQS.map((faq) => (
        <View key={faq.question} style={styles.card}>
          <Text style={styles.question}>{faq.question}</Text>
          <Text style={styles.answer}>{faq.answer}</Text>
        </View>
      ))}
      <Text style={styles.note}>Still stuck? Email support@pokedex.example.</Text>
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
  question: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: spacing.xs,
  },
  answer: { fontSize: 14, lineHeight: 21, color: colors.textMedium },
  note: { fontSize: 13, color: colors.textMedium, textAlign: 'center' },
});
