import { othersData } from '../data/propertiesList'
import SectionMeritsAndFlow from './SectionMeritsAndFlow'

const MeritsAndFlaw = () => {
  return (
    <>
      {othersData.map(otherData => {
        return (
          <SectionMeritsAndFlow
            key={otherData.id}
            otherData={otherData}></SectionMeritsAndFlow>
        )
      })}
    </>
  )
}

export default MeritsAndFlaw
