import { useContext, useEffect, useState } from 'react'
import CoinCard from '../../components/CoinCard'
import Coin from '../../models/Coin'
import CoinService from '../../services/CoinService'
import { Container, FilterInput, Loading } from './styles'
import loading from '../../assets/img/loading.gif'
import { UserContext } from '../../context/UserContext'

const Home = () => {
  const [coins, setCoins] = useState<Coin[]>([])
  const [filter, setFilter] = useState('')
  const [coinsLoaded, setCoinsLoaded] = useState(false)
  const [coinService] = useState(new CoinService())

  const { vsCurrency } = useContext(UserContext)

  const loadCoins = async () => {
    setCoinsLoaded(false)
    const loadedCoins = await coinService.loadCoins(vsCurrency)
    setCoins(loadedCoins)
    setCoinsLoaded(true)
  }

  useEffect(() => {
    loadCoins()
  }, [])

  useEffect(() => {
    const results = coinService.filterCoins(filter)
    setCoins(results)
  }, [filter])

  return (
    <Container>
      {coinsLoaded && (
        <>
          <FilterInput
            placeholder='Digite o nome ou o símbolo da crypto'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          {coins.length > 0 &&
            coins.map((c) => <CoinCard coin={c} key={c.id} />)}
        </>
      )}

      {!coinsLoaded && <Loading src={loading} alt='Carregando criptomoedas' />}
    </Container>
  )
}

export default Home
