import { useEffect, useState } from 'react'
import CoinCard from '../../components/CoinCard'
import Coin from '../../models/Coin'
import CoinService from '../../services/CoinService'
import { Container } from './styles'

const Home = () => {
  const [coins, setCoins] = useState<Coin[]>([])

  const loadCoins = async () => {
    const coinService = new CoinService()
    const loadedCoins = await coinService.loadCoins()
    setCoins(loadedCoins)
  }

  useEffect(() => {
    loadCoins()
  }, [])

  return (
    <Container>
      {coins.length > 0 && coins.map((c) => <CoinCard coin={c} key={c.id} />)}
    </Container>
  )
}

export default Home
