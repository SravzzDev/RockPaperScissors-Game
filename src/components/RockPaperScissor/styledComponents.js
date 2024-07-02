import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #223a5f;
  min-height: 100vh;
`

export const GameViewContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  width: 100%;
`

export const RulesButton = styled.button`
  display: flex;
  align-self: flex-end;
  color: #223a5f;
  background-color: white;
  font-family: 'Bree Serif';
  font-size: 14px;
  border-radius: 5px;
  border: none;
  padding: 10px;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: 15px;
  outline: none;
  cursor: pointer;
`

export const CloseButton = styled.button`
  display: flex;
  align-self: flex-end;
  color: #223a5f;
  font-size: 14px;
  font-family: 'Bree Serif';
  border: none;
  padding: 10px;
  outline: none;
  cursor: pointer;
`

export const RulesImage = styled.img`
  width: 80%;
  max-width: 1024px;
  margin-top: 5px;
  margin-bottom: 20px;
`
