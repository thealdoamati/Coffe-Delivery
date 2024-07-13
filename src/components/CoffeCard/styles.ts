import styled from 'styled-components'

export const CoffeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 1.5rem;
  gap: 1rem;

  img {
    width: 120px;
    height: 120px;
    margin-top: -20px;
  }

  h3 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    text-align: center;
  }

  h3:nth-of-type(2) {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
    font-weight: bold;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    & > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

export const AddButton = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
`

export const Buttons = styled.button`
  background: none;
  color: ${(props) => props.theme['purple-color']};
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: bold;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['white-color']};
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: bold;

  &:hover {
    background: ${(props) => props.theme['purple-color']};
  }
`

export const PriceTag = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  color: ${(props) => props.theme['base-title']};

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const TypeName = styled.div`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
`
