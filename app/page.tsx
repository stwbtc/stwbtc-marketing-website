import Banner from './components/Banner'
import Title from './components/Title'
import Introduce from './components/Introduce'
import HowWorks from './components/HowWorks'
import Roadmap from './components/Roadmap'
import Faq from './components/Faq'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'stWBTC',
  description: '',
}

export default function Home() {
  return (
    <div>
      <Banner />
      <Introduce />
      <HowWorks />
      <Roadmap />
      <Title
        title="Frequently Asked Questions"
      />
      <Faq />
    </div>
  )
}
