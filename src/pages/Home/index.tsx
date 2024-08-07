import { Play } from 'phosphor-react'
import { CountdownButton, CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, TaskInput } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para seu projeto" 
          />
          <label htmlFor="minutesAmount">Durante</label>
          <MinutesAmountInput
            type="number"
            min={0}
            max={60}
            id="minutesAmount"
            placeholder="00"
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <CountdownButton type="submit" disabled>
          <Play size={24} />
          Começar
        </CountdownButton>
      </form>
    </HomeContainer>
  )
}
