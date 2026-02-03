// Character sets for different game modes
// Each character has a display (emoji or text) and a name

export const characterSets = {
  emojis: {
    id: 'emojis',
    icon: '😀',
    // Characters are loaded from emojis.js
    useDefaultEmojis: true,
  },
};

// Get a character set by ID
export function getCharacterSet(setId) {
  return characterSets[setId] || characterSets.emojis;
}

// Get all available character sets for UI
export function getAllCharacterSets() {
  return Object.values(characterSets);
}
