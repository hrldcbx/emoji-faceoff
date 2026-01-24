// Character sets for different game modes
// Each character has a display (emoji or text) and a name

export const characterSets = {
  emojis: {
    id: 'emojis',
    icon: '😀',
    // Characters are loaded from emojis.js
    useDefaultEmojis: true,
  },

  fictional: {
    id: 'fictional',
    icon: '🎬',
    characters: [
      // Stranger Things
      { display: '👧🔮', name: 'Eleven' },
      { display: '👦🚴', name: 'Mike Wheeler' },
      { display: '👦🧢', name: 'Dustin Henderson' },
      { display: '👨‍✈️🍦', name: 'Jim Hopper' },
      { display: '👩‍🦰📷', name: 'Nancy Wheeler' },
      { display: '👦🎸', name: 'Eddie Munson' },
      { display: '🧟👹', name: 'Demogorgon' },
      { display: '👦🏀', name: 'Lucas Sinclair' },
      { display: '👩‍🔬🔬', name: 'Joyce Byers' },
      { display: '👦💡', name: 'Will Byers' },

      // The Simpsons
      { display: '👨‍🦲🍩', name: 'Homer Simpson' },
      { display: '👩‍🦱💙', name: 'Marge Simpson' },
      { display: '👦🛹', name: 'Bart Simpson' },
      { display: '👧🎷', name: 'Lisa Simpson' },
      { display: '👶🍼', name: 'Maggie Simpson' },
      { display: '👴📺', name: 'Grandpa Simpson' },
      { display: '🤓☢️', name: 'Mr. Burns' },
      { display: '👨‍🔬⚗️', name: 'Professor Frink' },
      { display: '🍺🏠', name: 'Moe Szyslak' },
      { display: '👮‍♂️🍩', name: 'Chief Wiggum' },

      // Disney/Pixar
      { display: '🦁👑', name: 'Simba' },
      { display: '❄️👸', name: 'Elsa' },
      { display: '🧜‍♀️🔱', name: 'Ariel' },
      { display: '🤖❤️', name: 'WALL-E' },
      { display: '🧸🐻', name: 'Winnie the Pooh' },
      { display: '🐭✨', name: 'Mickey Mouse' },
      { display: '🧞‍♂️💫', name: 'Genie' },
      { display: '🦊🐰', name: 'Robin Hood' },
      { display: '👸🐸', name: 'Tiana' },
      { display: '🏹👩', name: 'Merida' },

      // Harry Potter
      { display: '⚡🧙', name: 'Harry Potter' },
      { display: '📚👧', name: 'Hermione Granger' },
      { display: '🧡♟️', name: 'Ron Weasley' },
      { display: '🧙‍♂️🧹', name: 'Dumbledore' },
      { display: '🐍😈', name: 'Voldemort' },
      { display: '🖤🧪', name: 'Snape' },
      { display: '🧝‍♂️🧦', name: 'Dobby' },
      { display: '🦉📬', name: 'Hedwig' },

      // Marvel/DC
      { display: '🦇🌙', name: 'Batman' },
      { display: '🕷️🕸️', name: 'Spider-Man' },
      { display: '🔨⚡', name: 'Thor' },
      { display: '🛡️🇺🇸', name: 'Captain America' },
      { display: '💚😤', name: 'Hulk' },
      { display: '🤖❤️', name: 'Iron Man' },
      { display: '👸🦸‍♀️', name: 'Wonder Woman' },
      { display: '🃏😈', name: 'Joker' },
      { display: '🐱‍👤⚫', name: 'Black Panther' },
      { display: '🧲🔴', name: 'Magneto' },

      // Star Wars
      { display: '⚔️🖤', name: 'Darth Vader' },
      { display: '👦🌌', name: 'Luke Skywalker' },
      { display: '👸💫', name: 'Princess Leia' },
      { display: '🤖🔵', name: 'R2-D2' },
      { display: '🤖🟡', name: 'C-3PO' },
      { display: '👽🟢', name: 'Yoda' },
      { display: '🏹🐻', name: 'Chewbacca' },
      { display: '😎🚀', name: 'Han Solo' },

      // Game of Thrones
      { display: '🐺👑', name: 'Jon Snow' },
      { display: '🐉👸', name: 'Daenerys Targaryen' },
      { display: '🦁👨', name: 'Tyrion Lannister' },
      { display: '❄️👹', name: 'Night King' },
      { display: '🗡️👧', name: 'Arya Stark' },

      // Other classics
      { display: '🧛‍♂️🦇', name: 'Dracula' },
      { display: '🧟‍♂️⚡', name: 'Frankenstein' },
      { display: '🔪😱', name: 'Michael Myers' },
      { display: '🎪🤡', name: 'Pennywise' },
      { display: '🦖🏝️', name: 'T-Rex (Jurassic Park)' },
      { display: '👻👻', name: 'Casper' },
      { display: '🧙‍♂️💍', name: 'Gandalf' },
      { display: '🏔️💍', name: 'Frodo' },
      { display: '🏹🧝', name: 'Legolas' },
      { display: '🪓🧔', name: 'Gimli' },
    ],
  },

  famous: {
    id: 'famous',
    icon: '⭐',
    characters: [
      // Musicians
      { display: '👑🎤', name: 'Beyonce' },
      { display: '🎹🕶️', name: 'Stevie Wonder' },
      { display: '💜🎸', name: 'Prince' },
      { display: '🌙🎤', name: 'Michael Jackson' },
      { display: '🎀🎤', name: 'Taylor Swift' },
      { display: '💅👸', name: 'Lady Gaga' },
      { display: '🕺🪩', name: 'Bruno Mars' },
      { display: '🦢🎶', name: 'Bjork' },
      { display: '🎸🔥', name: 'Jimi Hendrix' },
      { display: '👓🎹', name: 'Elton John' },
      { display: '🤘🦇', name: 'Ozzy Osbourne' },
      { display: '🎤👑', name: 'Freddie Mercury' },
      { display: '🎸🇬🇧', name: 'The Beatles' },
      { display: '💋🎸', name: 'KISS' },
      { display: '🎤💎', name: 'Rihanna' },
      { display: '🧔🎸', name: 'Ed Sheeran' },
      { display: '🎹🎤', name: 'Adele' },
      { display: '🎤🔥', name: 'Drake' },

      // Actors/Directors
      { display: '🎬😐', name: 'Keanu Reeves' },
      { display: '💪🎬', name: 'Arnold Schwarzenegger' },
      { display: '😏🎬', name: 'Leonardo DiCaprio' },
      { display: '🎭🌟', name: 'Meryl Streep' },
      { display: '👊🎬', name: 'Jackie Chan' },
      { display: '😎🕶️', name: 'Tom Cruise' },
      { display: '🦸‍♂️🎬', name: 'Dwayne Johnson' },
      { display: '👓🎥', name: 'Steven Spielberg' },
      { display: '🎬🖤', name: 'Quentin Tarantino' },
      { display: '🤵🔫', name: 'James Bond (Daniel Craig)' },
      { display: '🎪🎬', name: 'Jim Carrey' },
      { display: '👴🎬', name: 'Morgan Freeman' },
      { display: '😎🌴', name: 'Will Smith' },
      { display: '🧙🎬', name: 'Ian McKellen' },

      // Sports
      { display: '⚽🐐', name: 'Lionel Messi' },
      { display: '⚽💪', name: 'Cristiano Ronaldo' },
      { display: '🏀👑', name: 'LeBron James' },
      { display: '🏀👟', name: 'Michael Jordan' },
      { display: '🎾💪', name: 'Serena Williams' },
      { display: '🏎️🏆', name: 'Lewis Hamilton' },
      { display: '⛳🐯', name: 'Tiger Woods' },
      { display: '🥊🦋', name: 'Muhammad Ali' },
      { display: '🏊‍♂️🥇', name: 'Michael Phelps' },
      { display: '⚽🇧🇷', name: 'Pele' },
      { display: '🏀📈', name: 'Shaquille O\'Neal' },
      { display: '🎾🇨🇭', name: 'Roger Federer' },

      // Scientists/Inventors
      { display: '🧠💡', name: 'Albert Einstein' },
      { display: '🍎📱', name: 'Steve Jobs' },
      { display: '🚀🔴', name: 'Elon Musk' },
      { display: '💻🪟', name: 'Bill Gates' },
      { display: '🔬👩', name: 'Marie Curie' },
      { display: '🌌🛋️', name: 'Stephen Hawking' },
      { display: '💡🔌', name: 'Thomas Edison' },
      { display: '🎨🖼️', name: 'Leonardo da Vinci' },

      // Historical/Political
      { display: '👑💎', name: 'Queen Elizabeth II' },
      { display: '✌️🕊️', name: 'Nelson Mandela' },
      { display: '🕊️🇮🇳', name: 'Mahatma Gandhi' },
      { display: '💪🎤', name: 'Martin Luther King Jr.' },
      { display: '🗽🎩', name: 'Abraham Lincoln' },
      { display: '👩‍✈️✈️', name: 'Amelia Earhart' },
      { display: '🎨✂️', name: 'Frida Kahlo' },
      { display: '🌻🎨', name: 'Vincent van Gogh' },
      { display: '⏱️🎨', name: 'Salvador Dali' },
      { display: '🖌️🇪🇸', name: 'Pablo Picasso' },

      // TV Personalities/Influencers
      { display: '📺👩', name: 'Oprah Winfrey' },
      { display: '🍳👨‍🍳', name: 'Gordon Ramsay' },
      { display: '🎤😜', name: 'Ellen DeGeneres' },
      { display: '💄👗', name: 'Kim Kardashian' },
      { display: '🧘‍♀️🏠', name: 'Martha Stewart' },
      { display: '🍔🇺🇸', name: 'Guy Fieri' },

      // Comedians
      { display: '🎤😂', name: 'Kevin Hart' },
      { display: '🎭🎤', name: 'Dave Chappelle' },
      { display: '🤣💜', name: 'Robin Williams' },
      { display: '🎤🇬🇧', name: 'Ricky Gervais' },
    ],
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
