import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`

export const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    color: #d7a22a;
  }

  span {
    font-size: 1rem;
    color: #555;
  }
`

export const InfoBox = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    margin: 0;
  }

  strong {
    font-weight: bold;
  }
`

export const Icon = styled.div`
  font-size: 1.5rem;
`

export const ScooterImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 2rem;
`
