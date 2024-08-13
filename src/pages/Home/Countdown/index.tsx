import { CountdownContainer, Separator } from './styles'
import { useContext, useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import { CycleContext } from '..'

export function Countdown() {
  const { activeCycle, activeCycleId, markCurrentCycleAsFinished } = useContext(CycleContext)
  const [secondsAmountPassed, setSecondsAmountPassed] = useState(0)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - secondsAmountPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [activeCycle, minutes, seconds])

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      const secondsDifference = differenceInSeconds(
        new Date(),
        activeCycle.startDate,
      )
      interval = setInterval(() => {
        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()

          setSecondsAmountPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsAmountPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleAsFinished])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
