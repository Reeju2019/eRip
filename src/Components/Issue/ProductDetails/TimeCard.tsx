import * as React from 'react'

interface ITimeCardProps {
  time: string
  setActiveTime: React.Dispatch<React.SetStateAction<string>>
}

const TimeCard: React.FunctionComponent<ITimeCardProps> = ({ time, setActiveTime }) => {
  const TimeClicked = () => {
    setActiveTime(time)
  }
  return (
    <>
      <div onClick={TimeClicked}>{time}</div>
    </>
  )
}

export default TimeCard
