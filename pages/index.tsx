import type { NextPage } from 'next'
import LabelIcon from '../components/LabelIcon'
import MoreButton from '../components/MoreButton'
import ReadMoreButton from '../components/ReadMoreButton'
import TopProduct from '../components/TopProduct'

const Home: NextPage = () => {
  return (
    <div className={"container container-xl m-auto"}>
      <div className="grid grid-cols-6">
        <TopProduct />
        <TopProduct />
        <TopProduct />
        <TopProduct />
        <TopProduct />
        <TopProduct />
      </div>
      <MoreButton />
      <LabelIcon />
      <ReadMoreButton/>  
    </div>
  )
}

export default Home
