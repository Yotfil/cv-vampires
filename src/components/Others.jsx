import ColumnOthers from './ColumnOthers'
import MeritsAndFlaw from './MeritsAndFlaw'

const Others = () => {
  return (
    <>
      <ColumnOthers title={'Merits & Flaws'}>
        <MeritsAndFlaw />
      </ColumnOthers>
      <ColumnOthers title={'Humanity/Path'}>
        <h1>Hello world!</h1>
        <ColumnOthers title={'Willpower'}>
          <h1>Hello world!</h1>
        </ColumnOthers>
        <ColumnOthers title={'Blood Pool'}>
          <h1>Hello world!</h1>
        </ColumnOthers>
      </ColumnOthers>
      <ColumnOthers title={'Health'}>
        <h1>Hello world!</h1>
        <ColumnOthers title={'Weakness'}>
          <h1>Hello world!</h1>
        </ColumnOthers>
        <ColumnOthers title={'Experience'}>
          <h1>Hello world!</h1>
        </ColumnOthers>
      </ColumnOthers>
    </>
  )
}

export default Others
