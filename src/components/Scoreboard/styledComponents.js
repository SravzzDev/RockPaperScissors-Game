import styled from 'styled-components/macro'

export const ScoreboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  max-width: 718px;
  border: 2px solid #ffffff;
  border-radius: 12px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 30px;
`

export const HeaderTitles = styled.div`
  margin-left: 30px;
`

export const Choice = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 160px;
  height: 115px;
  border-radius: 12px;
  margin-left: 30px;
  margin-right: 30px;
`

export const ScoreText = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 20px;
  line-height: 1.4;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const Score = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`
