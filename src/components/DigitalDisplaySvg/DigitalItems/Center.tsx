import React from 'react'

import Svg, { Path } from 'react-native-svg'

import { CENTER, centerPath, HALF, R, SIZE, WIDTH } from './constants'

export const Center = () => (
  <Svg
    width={WIDTH}
    height={CENTER}
    style={{
      transform: [{ rotateZ: '90deg' }],
      position: 'absolute',
      top: SIZE / 2 + WIDTH / 2,
    }}
    viewBox={`0 0 ${WIDTH} ${CENTER}`}
  >
    <Path d={centerPath} fill="white" />
  </Svg>
)
