import { HandPalm, Play } from 'phosphor-react'

import { CountdownButton, HomeContainer, StopCountdownButton } from './styles'
import { createContext, useState } from 'react'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

const newCylceFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa a ser executada'),
  minutesAmount: zod
    .number()
    .min(1, 'Valor deve ser maior ou igual a 1')
    .max(60, 'Valor deve ser menor ou igual a 60'),
})

type NewCycleFormData = zod.infer<typeof newCylceFormValidationSchema>

export function Home() {
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCylceFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 1,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const task = watch('task')
  const isSubmitButtonDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />
        </CycleContext.Provider>
        {activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <CountdownButton type="submit" disabled={isSubmitButtonDisabled}>
            <Play size={24} />
            Começar
          </CountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
