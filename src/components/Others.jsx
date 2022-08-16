import BloodPool from './BloodPool'
import ColumnOthers from './ColumnOthers'
import HumanityPath from './HumanityPath'
import MeritsAndFlaw from './MeritsAndFlaw'
import Weakness from './Weakness'
import WillPower from './WillPower'
import Experience from './Experience'
import Health from './Health'

const Others = () => {
  return (
    <>
      <ColumnOthers title={'Merits & Flaws'}>
        <MeritsAndFlaw />
      </ColumnOthers>
      <ColumnOthers title={'Humanity/Path'}>
        <HumanityPath />
        <ColumnOthers title={'Willpower'}>
          <WillPower />
        </ColumnOthers>
        <ColumnOthers title={'Blood Pool'}>
          <BloodPool />
        </ColumnOthers>
      </ColumnOthers>
      <ColumnOthers title={'Health'}>
        <Health />
        <ColumnOthers title={'Weakness'}>
          <Weakness />
        </ColumnOthers>
        <ColumnOthers title={'Experience'}>
          <Experience />
        </ColumnOthers>
      </ColumnOthers>
    </>
  )
}

export default Others
