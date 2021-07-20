import React from 'react'

import Svg, { Path } from 'react-native-svg'

import { Props } from './types'
import { centerPath, HEIGHT, R, sidePath, SIZE, topPath, WIDTH } from './constants'

export const Top = (props: Props) => {
  const { deg = '0deg' } = props

  return (
    <Svg
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      style={{
        transform: [{ rotateZ: deg }],
        position: 'absolute',
        top: deg === '90deg' ? SIZE : 0,
        bottom: deg === '90deg' ? 0 : SIZE,
      }}
    >
      <Path d={topPath} fill="white" />
    </Svg>
  )
}
