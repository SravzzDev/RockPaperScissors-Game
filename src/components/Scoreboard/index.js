import {
  ScoreboardContainer,
  HeaderTitles,
  Choice,
  ScoreContainer,
  ScoreText,
  Score,
} from './styledComponents'

const Scoreboard = props => {
  const {score} = props

  return (
    <ScoreboardContainer>
      <HeaderTitles>
        <Choice>
          ROCK <br />
          PAPER <br />
          SCISSORS
        </Choice>
      </HeaderTitles>
      <ScoreContainer>
        <ScoreText>Score</ScoreText>
        <Score>{score}</Score>
      </ScoreContainer>
    </ScoreboardContainer>
  )
}

export default Scoreboard
