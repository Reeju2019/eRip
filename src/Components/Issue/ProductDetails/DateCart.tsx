import * as React from 'react'

interface IDateCardProps {
  date: any[]
  setActiveDate: React.Dispatch<React.SetStateAction<any[]>>
}

const DateCard: React.FunctionComponent<IDateCardProps> = ({ date, setActiveDate }) => {
  const handleClick = () => {
    setActiveDate(date)
  }
  return (
    <>
      <div onClick={handleClick} className=''>
        <h6>{date[0]}</h6>
        <h4>{date[1]}</h4>
        <h6>{date[2]}</h6>
      </div>
    </>
  )
}
export default DateCard
