import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-background']};
`
export const FormStyle = styled.form`
  display: flex;
`
export const FormSection = styled.section`
  flex: 1;
  margin-right: 2rem;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2rem;
  border-radius: 8px;

  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.2rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }

  div {
    margin-bottom: 1rem;
  }

  span {
    font-size: 0.9rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const AddressInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border: 1px solid ${(props) => props.theme['base-hover']};
  border-radius: 4px;
  background-color: ${(props) => props.theme['base-input']};
`

export const PaymentSection = styled.div`
  margin-top: 1rem;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 8px;

  h3 {
    font-size: 1.2rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: ${(props) => props.theme['base-text']};
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`

export const PaymentButton = styled.button`
  flex: 1;
  padding: 0.75rem;
  margin-right: 0.5rem;
  background-color: ${(props) => props.theme['base-button']};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${(props) => props.theme['base-text']};
  font-weight: bold;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: ${(props) => props.theme['purple-color']};
    color: ${(props) => props.theme['white-color']};
  }
`

export const SelectedCoffeesSection = styled.section`
  flex: 1;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2rem;
  border-radius: 8px;

  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1rem;
  }
`

export const SummaryContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 8px;
`

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }

  span {
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${(props) => props.theme['yellow-color']};
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme['white-color']};
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
