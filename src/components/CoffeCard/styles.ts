import styled from 'styled-components'

export const CoffeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme['gray-300']};
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  gap: 0.5rem;
`

export const AddButton = styled.div`
  display: flex;
  gap: 4px;
  background: ${(props) => props.theme['gray-500']};
`
