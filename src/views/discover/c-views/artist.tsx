import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  childern?: ReactNode
}

const Artist: FC<Iprops> = () => {
  return <div>Artist</div>
}

export default memo(Artist)
