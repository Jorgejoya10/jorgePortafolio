import Geometric from './Geometric'
import Gradient from './Gradient'

type BackgroundType = 'geometric' | 'gradient'

interface DynamicBackgroundProps {
  type: BackgroundType
  darkMode: boolean
}

const DynamicBackground = ({ type, darkMode }: DynamicBackgroundProps) => {
  switch (type) {
    case 'geometric':
      return <Geometric darkMode={darkMode} />
    case 'gradient':
      return <Gradient darkMode={darkMode} />
    default:
      return null
  }
}


export default DynamicBackground;