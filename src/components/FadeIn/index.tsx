import React, { useEffect, useState } from 'react'

import * as S from './styles'

const FadeIn: React.FC = ({ children }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 150)

    return () => {
      setShow(false)
    }
  }, [children])

  return <S.FadeIn>{show && <div className="show">{children}</div>}</S.FadeIn>
}

export default FadeIn
