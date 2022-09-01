import styles from './index.module.css'

type Props = {
  sentence: string
  setSentence: (value: string) => void
}

const CharacterCounter = ({ sentence, setSentence }: Props) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.sentenceField}
        type='text'
        placeholder='Digite alguma coisa'
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
      />

      <span className={styles.counter}>
        Quantidade de caracteres: {sentence.length}
      </span>
    </div>
  )
}

export default CharacterCounter
