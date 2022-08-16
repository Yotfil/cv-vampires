import { v4 } from 'uuid'

const attributesData = [
  {
    id: v4(),
    titleColumn: 'Physical',
    properties: [
      {
        id: v4(),
        name: 'Strength',
        active: 0,
      },
      {
        id: v4(),
        name: 'Dexterity',
      },
      {
        id: v4(),
        name: 'Stamina',
      },
    ],
  },
  {
    id: v4(),
    titleColumn: 'Social',
    properties: [
      {
        id: v4(),
        name: 'Charisma',
      },
      {
        id: v4(),
        name: 'Manipulation',
      },
      {
        id: v4(),
        name: 'Appearance',
      },
    ],
  },
  {
    id: v4(),
    titleColumn: 'Mental',
    properties: [
      {
        id: v4(),
        name: 'Perception',
      },
      {
        id: v4(),
        name: 'Intelligence',
      },
      {
        id: v4(),
        name: 'Wits',
      },
    ],
  },
]

const abilitiesData = [
  {
    id: v4(),
    titleColumn: 'Talents',
    properties: [
      {
        id: v4(),
        name: 'Alertness',
      },
      {
        id: v4(),
        name: 'Athletics',
      },
      {
        id: v4(),
        name: 'Awareness',
      },
      {
        id: v4(),
        name: 'Brawl',
      },
      {
        id: v4(),
        name: 'Empathy',
      },
      {
        id: v4(),
        name: 'Expression',
      },
      {
        id: v4(),
        name: 'Intimidation',
      },
      {
        id: v4(),
        name: 'Leadership',
      },
      {
        id: v4(),
        name: 'Streetwise',
      },
      {
        id: v4(),
        name: 'Subterfuge',
      },
    ],
  },
  {
    id: v4(),
    titleColumn: 'Skills',
    properties: [
      {
        id: v4(),
        name: 'Animal Ken',
      },
      {
        id: v4(),
        name: 'Crafts',
      },
      {
        id: v4(),
        name: 'Drive',
      },
      {
        id: v4(),
        name: 'Etiquette',
      },
      {
        id: v4(),
        name: 'Firearms',
      },
      {
        id: v4(),
        name: 'Larceny',
      },
      {
        id: v4(),
        name: 'Melee',
      },
      {
        id: v4(),
        name: 'Performance',
      },
      {
        id: v4(),
        name: 'Stealth',
      },
      {
        id: v4(),
        name: 'Survival',
      },
    ],
  },
  {
    id: v4(),
    titleColumn: 'Knowledges',
    properties: [
      {
        id: v4(),
        name: 'Academics',
      },
      {
        id: v4(),
        name: 'Computer',
      },
      {
        id: v4(),
        name: 'Finance',
      },
      {
        id: v4(),
        name: 'Investigation',
      },
      {
        id: v4(),
        name: 'Law',
      },
      {
        id: v4(),
        name: 'Medicine',
      },
      {
        id: v4(),
        name: 'Occult',
      },
      {
        id: v4(),
        name: 'Politics',
      },
      {
        id: v4(),
        name: 'Science',
      },
      {
        id: v4(),
        name: 'Technology',
      },
    ],
  },
]

const advantagesData = [
  {
    id: v4(),
    titleColumn: 'Disciplines',
    properties: [
      {
        id: v4(),
        name: '',
        type: 'text',
        placeholder: 'Add a discipline',
      },
      {
        id: v4(),
        name: '',
        type: 'text',
        placeholder: 'Add another discipline',
      },
      {
        id: v4(),
        name: '',
        type: 'text',
        placeholder: '...and other',
      },
      {
        id: v4(),
        name: '',
        type: 'text',
        placeholder: '...and other',
      },
      {
        id: v4(),
        name: '',
        type: 'text',
        placeholder: '...and other',
      },
    ],
  },
  {
    id: v4(),
    titleColumn: 'Backgrounds',
    properties: [
      {
        id: v4(),
        name: '',
        type: 'text',
        placeholder: 'Add a background',
      },
      {
        id: v4(),
        name: '',
        type: 'text',
        placeholder: 'Add another background',
      },
      {
        id: v4(),
        name: '',
        type: 'text',
        placeholder: '...and other',
      },
      {
        id: v4(),
        name: '',
        type: 'text',
        placeholder: '...and other',
      },
      {
        id: v4(),
        name: '',
        type: 'text',
        placeholder: '...and other',
      },
    ],
  },
  {
    id: v4(),
    titleColumn: 'Backgrounds',
    properties: [
      {
        id: v4(),
        name: 'Conscience/Conviction',
      },
      {
        id: v4(),
        name: 'Self-Control/Instinct',
      },
      {
        id: v4(),
        name: 'Courage',
      },
    ],
  },
]

const othersData = [
  {
    id: v4(),
    titleColumn: 'Merits & Flaws',
    subTitles: ['Merit', 'Cost'],
    properties: [
      {
        id: v4(),
        name: '',
        type: 'text',
        line: true,
        placeholder: 'Add a merit',
      },
      {
        id: v4(),
        name: '',
        type: 'text',
        line: true,
        placeholder: 'Add another merit',
      },
      {
        id: v4(),
        name: '',
        type: 'text',
        line: true,
        placeholder: '...and other',
      },
      {
        id: v4(),
        name: '',
        type: 'text',
        line: true,
        placeholder: '...and other',
      },
      {
        id: v4(),
        name: '',
        type: 'text',
        line: true,
        placeholder: '...and other',
      },
    ],
  },
  {
    id: v4(),
    titleColumn: 'Merits & Flaws',
    subTitles: ['Flaw', 'Cost'],
    properties: [
      {
        id: v4(),
        name: '',
        type: 'text',
        line: true,
        placeholder: 'Add a flaw',
      },
      {
        id: v4(),
        name: '',
        type: 'text',
        line: true,
        placeholder: 'Add another flaw',
      },
      {
        id: v4(),
        name: '',
        type: 'text',
        line: true,
        placeholder: '...and other',
      },
      {
        id: v4(),
        name: '',
        type: 'text',
        line: true,
        placeholder: '...and other',
      },
      {
        id: v4(),
        name: '',
        type: 'text',
        line: true,
        placeholder: '...and other',
      },
    ],
  },
]

const humanityPath = {
  id: v4(),
  placeholder: 'Ej:',
  labelBearing: 'Bearing',
  placeholderBearing: 'Ej:',
  amountPoints: 10,
}

const willPower = {
  id: v4(),
  amountRoundPoints: 10,
  amountSquarePoints: 10,
}

const bloodPool = {
  id: v4(),
  amountSquarePoints: 20,
  label: 'Blood per turn',
  placeholder: 'Ej: 6',
  blood: true,
}

const healthStates = [
  {
    id: v4(),
    nameStateHealth: 'Bruised',
    active: false,
    penalty:0
  },
  {
    id: v4(),
    nameStateHealth: 'Hurt',
    active: false,
    penalty:-1
  },
  {
    id: v4(),
    nameStateHealth: 'Injured',
    active: false,
    penalty:-1
  },
  {
    id: v4(),
    nameStateHealth: 'Wounded',
    active: false,
    penalty:-2
  },
  {
    id: v4(),
    nameStateHealth: 'Mauled',
    active: false,
    penalty:-2
  },
  {
    id: v4(),
    nameStateHealth: 'Crippled',
    active: false,
    penalty:-5
  },
  {
    id: v4(),
    nameStateHealth: 'Incapacitated',
    active: false,
    penalty:0,
  },
]

const weakness = {
  placeholder: 'Ej: weakness',
}
const experience = {
  placeholder: 'Ej: 600',
}

export {
  attributesData,
  abilitiesData,
  advantagesData,
  othersData,
  humanityPath,
  willPower,
  bloodPool,
  weakness,
  experience,
  healthStates
}
