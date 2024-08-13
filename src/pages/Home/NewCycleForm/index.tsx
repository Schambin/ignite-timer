import { FormContainer, TaskInput, MinutesAmountInput } from './styles'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

const newCylceFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa a ser executada'),
  minutesAmount: zod
    .number()
    .min(1, 'Valor deve ser maior ou igual a 1')
    .max(60, 'Valor deve ser menor ou igual a 60'),
})

type NewCycleFormData = zod.infer<typeof newCylceFormValidationSchema>

export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCylceFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 1,
    },
  })

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="task"
        list="task-suggestions"
        disabled={!!activeCycle}
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
        // step={5}
        min={1}
        max={60}
        id="minutesAmount"
        disabled={!!activeCycle}
        placeholder="00"
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
