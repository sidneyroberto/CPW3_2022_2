import { useLocation } from 'react-router-dom'

const CoinInfo = () => {
  const location = useLocation()
  const { coin } = location.state

  return <h1>{coin.name}</h1>
}

export default CoinInfo
