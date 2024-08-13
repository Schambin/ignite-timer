import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  margin-top: 1rem;
  padding: 1rem 2rem;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  transition: 0.1s linear;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const CountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`
export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
