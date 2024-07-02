import {
  GameResultViewContainer,
  GameChoicesView,
  ResultChoiceContainer,
  ChoiceText,
  ChoiceImage,
  GameResult,
  ResultText,
  PlayAgainButton,
} from './styledComponents'

const GameResultView = props => {
  const {
    yourChoiceImage,
    opponentChoiceImage,
    gameResult,
    clickPlayAgain,
  } = props

  const onPlayAgain = () => clickPlayAgain()

  return (
    <GameResultViewContainer>
      <GameChoicesView>
        <ResultChoiceContainer>
          <ChoiceText>YOU</ChoiceText>
          <ChoiceImage src={yourChoiceImage} alt="your choice" />
        </ResultChoiceContainer>
        <ResultChoiceContainer>
          <ChoiceText>OPPONENT</ChoiceText>
          <ChoiceImage src={opponentChoiceImage} alt="opponent choice" />
        </ResultChoiceContainer>
      </GameChoicesView>
      <GameResult>
        <ResultText>{gameResult}</ResultText>
        <PlayAgainButton onClick={onPlayAgain} type="button">
          PLAY AGAIN
        </PlayAgainButton>
      </GameResult>
    </GameResultViewContainer>
  )
}

export default GameResultView
