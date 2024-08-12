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
export const FormContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 100%;

  color: ${(props) => props.theme['gray-100']};

  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`
export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;

  color: ${(props) => props.theme['gray-100']};
  font-size: 10rem;
  line-height: 8rem;

  span {
    font-family: 'Roboto Mono', monospace;
    background: ${(props) => props.theme['gray-700']};

    padding: 2rem 1rem;
    border-radius: 8px;
  }
`
export const Separator = styled.div`
  font-family: 'Roboto Mono', monospace;

  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  color: ${(props) => props.theme['gray-100']};
  padding: 0 0.5rem;

  &:focus {
    border-color: ${(props) => props.theme['green-500']};
    box-shadow: none;
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`
export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
  text-align: center;
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
