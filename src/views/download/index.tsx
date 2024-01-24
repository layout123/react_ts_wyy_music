import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  childern?: ReactNode
}

const Download: FC<Iprops> = () => {
  return <div>Download</div>
}

export default memo(Download)
