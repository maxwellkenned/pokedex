import React from 'react'

import { Spin } from './styles'

const Loading: React.FC = () => (
  <Spin src="/img/pokeball.svg" loading="eager" width={50} height={50} />
)

export default React.memo(Loading)
