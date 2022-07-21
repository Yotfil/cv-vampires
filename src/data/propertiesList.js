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
        name: 'Strength',
      },
      {
        id: v4(),
        name: 'Strength',
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

export { attributesData }
