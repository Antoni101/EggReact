const Fcreatures = [
    { name: "Slime", speed: 1, ageSpeed: 0.5, mult: 1, value: 5},
    { name: "Bat", speed: 3, ageSpeed: 3, mult: 1.3, value: 6},
    { name: "Rat", speed: 2, ageSpeed: 5, mult: 1.5, value: 3},
]

const Dcreatures = [
    { name: "Zombie", speed: 2, ageSpeed: 0.5, mult: 1.5, value: 12},
    { name: "Goblin", speed: 5, ageSpeed: 8, mult: 3, value: 15},
    { name: "Skeleton", speed: 4, ageSpeed: 1, mult: 2, value: 13},
]

const Ccreatures = [
    { name: "Imp", speed: 10, ageSpeed: 8, mult: 3, value: 30},
    { name: "Troll", speed: 6, ageSpeed: 5, mult: 4, value: 45},
    { name: "Gnome", speed: 9, ageSpeed: 2, mult: 2, value: 40},
]

const Bcreatures = [
    { name: "Orc", speed: 15, ageSpeed: 4, mult: 10, value: 155},
    { name: "Hobgoblin", speed: 20, ageSpeed: 8, mult: 15, value: 205},
    { name: "Ogre", speed: 18, ageSpeed: 2, mult: 12, value: 175},
]

const Acreatures = [
    { name: "Giant", speed: 15, ageSpeed: 0.5, mult: 27, value: 750},
    { name: "Centaur", speed: 50, ageSpeed: 5, mult: 30, value: 1025},
    { name: "Golem", speed: 25, ageSpeed: 1, mult: 25, value: 850},
]

const Screatures = [
    { name: "Titan", speed: 80, ageSpeed: 1, mult: 75, value: 3500},
    { name: "Minotaur", speed: 100, ageSpeed: 1.5, mult: 90, value: 5000},
    { name: "Chimera", speed: 115, ageSpeed: 0.8, mult: 85, value: 4000},
]

const elements = [
    { name: "Fire", speed: 8, age: 4, mult: 8 },
    { name: "Ice", speed: -4, age: -4, mult: 2 },
    { name: "Earth", speed: -2, age: -2, mult: 4 },
    { name: "Wind", speed: 10, age: 2, mult: 6 },
]

const eggPools = {
  F: {
    chances: [70, 20, 10], 
    pool: [Fcreatures, Dcreatures, Ccreatures]
  },
  D: {
    chances: [70, 25, 5], 
    pool: [Dcreatures, Ccreatures, Bcreatures]
  },
  C: {
    chances: [60, 35, 5],
    pool: [Ccreatures, Bcreatures, Acreatures]
  },
  B: {
    chances: [70, 29, 1],
    pool: [Bcreatures, Acreatures, Screatures]
  },
  A: {
    chances: [95, 5],            
    pool: [Acreatures, Screatures]
  },
  S: {
    chances: [100],
    pool: [Screatures]
  }
};

const traits = [
  { name: "Swift", chance: 25, speed: 2, age: 0, mult: 0, value: 0 },
  { name: "Sturdy", chance: 20, speed: 0, age: -2, mult: 0, value: 0 },
  { name: "Greedy", chance: 15, speed: 0, age: 0, mult: 0, value: 4 },
  { name: "Vicious", chance: 10, speed: 0, age: 0, mult: 3, value: 0 },
  { name: "Durable", chance: 5, speed: 0, age: -1, mult: 1, value: 2 },
  { name: "Fertile", chance: 1, speed: 0, age: 0, mult: 0, value: 0 }
];

const ageStages = [
  { stage: "Baby",    max: 10 },
  { stage: "Young",   max: 20 },
  { stage: "Adult",   max: 50 },
  { stage: "Elder",   max: 70 },
];

export {
  Fcreatures,
  Dcreatures,
  Ccreatures,
  Bcreatures,
  Acreatures,
  Screatures,
  elements,
  eggPools,
  traits,
  ageStages
};



