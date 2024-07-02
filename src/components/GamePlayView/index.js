import {
  GamePlayViewContainer,
  ChoicesContainer,
  ChoiceButton,
  ChoiceImage,
} from './styledComponents'

const GamePlayView = props => {
  const {choicesList, clickChoiceItem} = props
  const onClickRockImage = () => clickChoiceItem(choicesList[0].id)
  const onClickScissorImage = () => clickChoiceItem(choicesList[1].id)
  const onClickPaperImage = () => clickChoiceItem(choicesList[2].id)

  return (
    <GamePlayViewContainer>
      <ChoicesContainer>
        <ChoiceButton
          onClick={onClickRockImage}
          type="button"
          data-testid="rockButton"
        >
          <ChoiceImage src={choicesList[0].imageUrl} alt={choicesList[0].id} />
        </ChoiceButton>
        <ChoiceButton
          onClick={onClickScissorImage}
          type="button"
          data-testid="scissorsButton"
        >
          <ChoiceImage src={choicesList[1].imageUrl} alt={choicesList[1].id} />
        </ChoiceButton>
      </ChoicesContainer>
      <ChoicesContainer>
        <ChoiceButton
          onClick={onClickPaperImage}
          type="button"
          data-testid="paperButton"
        >
          <ChoiceImage src={choicesList[2].imageUrl} alt={choicesList[2].id} />
        </ChoiceButton>
      </ChoicesContainer>
    </GamePlayViewContainer>
  )
}

export default GamePlayView
