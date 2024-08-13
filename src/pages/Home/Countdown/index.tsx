import { CountdownContainer, Separator } from './styles'
import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'


export function Countdown() {
  const [secondsAmountPassed, setSecondsAmountPassed] = useState(0)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      const secondsDifference = differenceInSeconds(
        new Date(),
        activeCycle.startDate,
      )
      interval = setInterval(() => {
        if (secondsDifference >= totalSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return {
                  ...cycle,
                  finishedDate: new Date(),
                }
              } else {
                return cycle
              }
            }),
          )
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
  }, [activeCycle, totalSeconds, activeCycleId, cycles])

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
