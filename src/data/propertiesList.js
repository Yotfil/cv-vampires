import { v4 } from 'uuid'

const attributesData = [
  {
    id: v4(),
    titleColumn: 'Physical',
    properties: [
      {
        id: v4(),
        name: 'Strength',
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

export { attributesData, abilitiesData, advantagesData, othersData }
