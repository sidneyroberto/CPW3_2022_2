import Container from './Container'
import CustomHello from './CustomHello'

const MyDiv = () => {
  const element = (
    <div>
      <CustomHello message='Fala, negada!' />
      <p>Tudo baum?</p>
    </div>
  )

  return <Container childElement={element} />
}

export default MyDiv
