import React from 'react'

import Svg, { Path } from 'react-native-svg'

import { Props } from './types'
import { centerPath, HEIGHT, R, sidePath, SIZE, topPath, WIDTH } from './constants'

export const DigitalItems = (props: Props) => {
  const { deg = '0deg' } = props

  return (
    <Svg width={WIDTH} height={HEIGHT} viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
      <Path d={sidePath} fill="blue" />
      <Path d={centerPath} fill="orange" />
      <Path d={topPath} fill="white" />
    </Svg>
  )
}
