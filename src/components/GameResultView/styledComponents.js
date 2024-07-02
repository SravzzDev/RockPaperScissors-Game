import styled from 'styled-components/macro'

export const GameResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    width: 760px;
  }
`

export const GameChoicesView = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

export const ResultChoiceContainer = styled.div`
  margin-right: 10px;
`

export const ChoiceText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
  line-height: 1.3;
  text-align: center;
  padding: 0px;
  margin: 10px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const ChoiceImage = styled.img`
  width: 150px;
  height: 150px;
  @media screen and (min-width: 768px) {
    width: 188px;
    height: 188px;
  }
`

export const GameResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const ResultText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 24px;
  line-height: 1.3;
  text-align: center;
  padding: 0px;
  margin: 10px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const PlayAgainButton = styled.button`
  color: #223a5f;
  background: #ffffff;
  font-family: 'bree serif';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.7;
  min-width: 175px;
  border-radius: 12px;
  padding: 10px;
  outline: none;
  border: none;
  cursor: pointer;
`
