// Flat colour palette used across the app.
// fire, water, flying and grass are sampled from the reference design; the
// remaining types are not shown in it and follow the same flat treatment.

export const colors = {
  primary: '#DC0A2D',
  background: '#EFEFEF',
  surface: '#FFFFFF',
  textDark: '#212121',
  textMedium: '#666666',
  textLight: '#9E9E9E',
  border: '#E0E0E0',
  favourite: '#DC0A2D',
};

export const typeColors = {
  bug: '#A7B723',
  dark: '#75574C',
  dragon: '#7037FF',
  electric: '#F9CF30',
  fairy: '#E69EAC',
  fighting: '#C12239',
  fire: '#FF9D55',
  flying: '#89AAE3',
  ghost: '#70559B',
  grass: '#63BC5A',
  ground: '#DEC16B',
  ice: '#9AD6DF',
  normal: '#AAA67F',
  poison: '#A43E9E',
  psychic: '#FB5584',
  rock: '#B69E31',
  steel: '#B7B9D0',
  water: '#5090D6',
};

export function colorForType(type) {
  return typeColors[type] || colors.textMedium;
}

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
};

export const radius = {
  sm: 8,
  md: 12,
};
