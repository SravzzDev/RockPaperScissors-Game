import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'

import GamePlayView from '../GamePlayView'
import GameResultView from '../GameResultView'
import Scoreboard from '../Scoreboard'

import {
  AppContainer,
  GameViewContainer,
  RulesButton,
  CloseButton,
  RulesImage,
} from './styledComponents'

import './index.css'

const gameViewStatusConstants = {
  playing: 'PLAYING',
  result: 'RESULT',
}

const gameResultsConstants = {
  youWon: 'YOU WON',
  youLose: 'YOU LOSE',
  itIsDraw: 'IT IS DRAW',
}

class RockPaperScissor extends Component {
  state = {
    score: 0,
    yourChoiceId: '',
    opponentChoiceId: '',
    gameResult: '',
    gameViewStatus: gameViewStatusConstants.playing,
  }

  getCurrentScore = gameResult => {
    switch (gameResult) {
      case gameResultsConstants.youWon:
        return 1
      case gameResultsConstants.youLose:
        return -1
      case gameResultsConstants.itIsDraw:
        return 0
      default:
        return null
    }
  }

  getGameResult = (yourChoiceId, opponentChoiceId) => {
    const {choicesList} = this.props
    let gameResult

    if (
      yourChoiceId === choicesList[0].id &&
      opponentChoiceId === choicesList[1].id
    ) {
      gameResult = gameResultsConstants.youWon
    } else if (
      yourChoiceId === choicesList[0].id &&
      opponentChoiceId === choicesList[2].id
    ) {
      gameResult = gameResultsConstants.youLose
    } else if (
      yourChoiceId === choicesList[1].id &&
      opponentChoiceId === choicesList[2].id
    ) {
      gameResult = gameResultsConstants.youWon
    } else if (
      yourChoiceId === choicesList[1].id &&
      opponentChoiceId === choicesList[0].id
    ) {
      gameResult = gameResultsConstants.youLose
    } else if (
      yourChoiceId === choicesList[2].id &&
      opponentChoiceId === choicesList[0].id
    ) {
      gameResult = gameResultsConstants.youWon
    } else if (
      yourChoiceId === choicesList[2].id &&
      opponentChoiceId === choicesList[1].id
    ) {
      gameResult = gameResultsConstants.youLose
    } else {
      gameResult = gameResultsConstants.itIsDraw
    }
    return gameResult
  }

  clickChoiceItem = id => {
    const {choicesList} = this.props
    const randomChoice = Math.floor(Math.random() * 3)
    const opponentChoice = choicesList[randomChoice]
    const gameResult = this.getGameResult(id, opponentChoice.id)
    const gameScore = this.getCurrentScore(gameResult)

    this.setState(prevState => ({
      yourChoiceId: id,
      opponentChoiceId: opponentChoice.id,
      gameResult,
      score: prevState.score + gameScore,
      gameViewStatus: gameViewStatusConstants.result,
    }))
  }

  clickPlayAgain = () => {
    this.setState({gameViewStatus: gameViewStatusConstants.playing})
  }

  renderGameResultViewComponent = () => {
    const {yourChoiceId, opponentChoiceId, gameResult} = this.state
    const {choicesList} = this.props
    const yourChoice = choicesList.find(
      eachChoice => eachChoice.id === yourChoiceId,
    )
    const yourChoiceImage = yourChoice.imageUrl
    const opponentChoice = choicesList.find(
      eachChoice => eachChoice.id === opponentChoiceId,
    )
    const opponentChoiceImage = opponentChoice.imageUrl

    return (
      <GameResultView
        yourChoiceImage={yourChoiceImage}
        opponentChoiceImage={opponentChoiceImage}
        gameResult={gameResult}
        clickPlayAgain={this.clickPlayAgain}
      />
    )
  }

  renderGamePlayViewComponent = () => {
    const {choicesList} = this.props
    return (
      <GamePlayView
        choicesList={choicesList}
        clickChoiceItem={this.clickChoiceItem}
      />
    )
  }

  renderViewsBasedOnGameStatus = () => {
    const {gameViewStatus} = this.state

    if (gameViewStatus === gameViewStatusConstants.playing) {
      return this.renderGamePlayViewComponent()
    }
    return this.renderGameResultViewComponent()
  }

  render() {
    const {score} = this.state

    return (
      <AppContainer>
        <Scoreboard score={score} />
        <GameViewContainer>
          {this.renderViewsBasedOnGameStatus()}
        </GameViewContainer>
        <Popup
          className="my-popup"
          modal
          trigger={<RulesButton type="button">RULES</RulesButton>}
        >
          {close => (
            <>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine />
              </CloseButton>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </>
          )}
        </Popup>
      </AppContainer>
    )
  }
}

export default RockPaperScissor
