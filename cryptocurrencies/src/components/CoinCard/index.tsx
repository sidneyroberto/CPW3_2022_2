import Coin from '../../models/Coin'
import { Card, CryptoLogo, CryptoTitle, Price } from './styles'

type Props = {
  coin: Coin
}

const CoinCard = ({ coin }: Props) => {
  const formatter = Intl.NumberFormat('pt-BR', {
    currency: 'usd',
    style: 'currency',
  })

  return (
    <Card>
      <CryptoLogo src={coin.logo} alt={`${coin.name} logo`} />
      <CryptoTitle>{coin.name}</CryptoTitle>
      <Price>{formatter.format(coin.currentPrice)}</Price>
    </Card>
  )
}

export default CoinCard
