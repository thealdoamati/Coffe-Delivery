import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #f3f3f3;
  border-radius: 8px;
  margin-bottom: 1rem;
`

export const CoffeInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  h3 {
    margin: 0;
    font-size: 1rem;
  }
`

export const Price = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.5rem;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;

  button {
    background-color: #e3e3e3;
    border: none;
    padding: 0.5rem;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:disabled {
    cursor: not-allowed;
  }

  button + button {
    margin-left: 0.5rem;
  }
`

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: #e3e3e3;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    margin: 0 0.5rem;
  }

  button:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  button:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

export const RemoveButton = styled.button`
  background-color: #f3f3f3;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;

  svg {
    margin-right: 0.5rem;
  }
`
