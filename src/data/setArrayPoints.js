import { v4 } from 'uuid'

const radioInput = () => {
  return {
    id: v4(),
    checked: false,
    bgColor: 'inactive',
  }
}

export const setArrayPoints = amountPoints => {
  return [...Array(amountPoints)].map(() => radioInput())
}
// const rawInputsProperties = [
//   {
//     id: v4(),
//     checked: false,
//     bgColor: 'inactive',
//   },
//   {
//     id: v4(),
//     checked: false,
//     bgColor: 'inactive',
//   },
//   {
//     id: v4(),
//     checked: false,
//     bgColor: 'inactive',
//   },
//   {
//     id: v4(),
//     checked: false,
//     bgColor: 'inactive',
//   },
//   {
//     id: v4(),
//     checked: false,
//     bgColor: 'inactive',
//   },
// ]

export default setArrayPoints
