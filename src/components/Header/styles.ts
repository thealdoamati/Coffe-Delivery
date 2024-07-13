import styled from 'styled-components'

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme['gray-100']};
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-color']};
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.875rem;
  gap: 0.25rem;
`

export const Cart = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  background: ${(props) => props.theme['yellow-light']};
  border: none;
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
`

export const CartCount = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme['white-color']};
  border-radius: 50%;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
`
