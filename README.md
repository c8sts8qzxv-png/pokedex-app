# Pokedex App

A Pokemon browser built with React Native and Expo, using live data from
[PokeAPI](https://pokeapi.co/).

## Running it

```bash
npm install
npx expo start
```

Then open the project in Expo Go by scanning the QR code, or press `i` / `a` for
the iOS simulator / Android emulator. No API key or signup is needed.

## Screens

- **Home** — fetches a list of Pokemon on load and renders each one with the
  reusable `PokemonCard` component. Shows a loading indicator while fetching and
  a message if the request fails. Each card has a favourite icon that toggles.
- **Details** — opened by tapping a card. Fetches that Pokemon's full details and
  displays its type, height and weight.
- **About** — the second bottom tab.
- **Settings**, **Help and Support**, **Logout** — drawer links.

## Navigation

```
Drawer
├── Pokedex            -> Bottom tabs
│   ├── Home           -> Stack: PokemonList -> Details
│   └── About
├── Settings
├── Help and Support
└── Logout
```

## Project structure

```
App.js                              navigation container and providers
src/
  theme.js                          flat colour palette and spacing
  api/pokeapi.js                    fetch helpers for the PokeAPI endpoints
  components/
    PokemonCard.js                  reusable card (name, image, number via props)
    TypeBadge.js                    flat type-coloured pill
    StateMessage.js                 shared loading / error block
  screens/                          Home, Details, About, Settings, Help, Logout
  navigation/
    RootNavigator.js                drawer, wrapping the tabs
    TabNavigator.js                 bottom tabs: Home and About
    HomeStackNavigator.js           stack: list -> details
```

## Notes

- The `/pokemon` list endpoint returns only a name and a URL, so the Pokedex
  number is taken from the last segment of that URL and used to build the image
  URL.
- PokeAPI reports height in decimetres and weight in hectograms; both are
  converted to metres and kilograms in `src/api/pokeapi.js`.
