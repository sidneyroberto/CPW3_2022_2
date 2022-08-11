type Props = {
  childElement: JSX.Element
}

const Container = ({ childElement }: Props) => {
  return <div>{childElement}</div>
}

export default Container
