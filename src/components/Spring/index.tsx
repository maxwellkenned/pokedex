import React, { ReactNode, useEffect, useState } from 'react'

interface ISpringProps {
  from: number
  to: number
  delay: number
  children(number): ReactNode
}

const Spring: React.FC<ISpringProps> = ({ from, to, delay, children }) => {
  const [counter, setCounter] = useState(from)

  useEffect(() => {
    return () => setCounter(0)
  }, [])

  useEffect(() => {
    counter !== to &&
      setTimeout(() => {
        from > to ? setCounter(counter - 1) : setCounter(counter + 1)
      }, delay)
  }, [counter, from, to, delay])

  return React.useMemo(() => <>{children(counter)}</>, [children, counter])
}

export default Spring
