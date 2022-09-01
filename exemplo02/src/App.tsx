import { useState } from 'react'
import CharacterCounter from './components/CharacterCounter'

const App = () => {
  /**
   * O primeiro React Hook que veremos é
   * o hook useState
   */
  const [phrase, setPhrase] = useState('')

  return <CharacterCounter sentence={phrase} setSentence={setPhrase} />
}

export default App
