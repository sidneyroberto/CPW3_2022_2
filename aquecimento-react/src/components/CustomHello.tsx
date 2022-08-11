// Exemplo de uso de props
type Props = {
  message: string
}

const CustomHello = ({ message }: Props) => <h1>{message}</h1>

export default CustomHello
