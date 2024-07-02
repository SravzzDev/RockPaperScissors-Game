import styled from 'styled-components/macro'

export const GamePlayViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
`

export const ChoicesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`

export const ChoiceButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  padding: 0px;
  margin-left: 10px;
  margin-right: 15px;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin: 25px;
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
