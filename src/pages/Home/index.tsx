import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CountdownButton,
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  TaskInput,
} from './styles'

const newCylceFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa a ser executada'),
  minutesAmount: zod
    .number()
    .min(5, 'Valor deve ser maior ou igual a 5')
    .max(60, 'Valor deve ser menor ou igual a 60'),
})

type NewCycleFormData = zod.infer<typeof newCylceFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCylceFormValidationSchema),
    defaultValues: {
      task: 'Tarefa 1',
      minutesAmount: 5,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitButtonDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para seu projeto"
            {...register('task')}
          />
          <datalist id="task-suggestions">
            <option value="um"></option>
            <option value="dois"></option>
            <option value="tres"></option>
          </datalist>

          <label htmlFor="minutesAmount">Durante</label>
          <MinutesAmountInput
            type="number"
            step={5}
            // min={1}
            // max={60}
            id="minutesAmount"
            placeholder="00"
            {...register('minutesAmount', { valueAsNumber: true })}
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

        <CountdownButton type="submit" disabled={isSubmitButtonDisabled}>
          <Play size={24} />
          Começar
        </CountdownButton>
      </form>
    </HomeContainer>
  )
}
