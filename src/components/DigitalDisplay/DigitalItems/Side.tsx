import React from 'react'

import Svg, { Path } from 'react-native-svg'

import { Props } from './types'
import { HEIGHT, R, sidePath, SIZE, WIDTH } from './constants'

export const Side = (props: Props) => {
  const { deg = '0deg', isMirror = false } = props

  return (
    <Svg
      width={WIDTH}
      height={HEIGHT}
      style={{
        transform: [
          { rotateZ: deg },
          {
            rotateY:
              (isMirror && deg === '0deg') || (!isMirror && deg !== '0deg')
                ? '0deg'
                : '180deg',
          },
        ],
        position: 'absolute',
        top: deg === '0deg' ? SIZE - WIDTH * 2 : WIDTH * 2,
        bottom: deg === '0deg' ? WIDTH * 2 : SIZE,
        right: !isMirror ? HEIGHT - WIDTH + R : -R * 2,
      }}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
    >
      {/* <Path d={sidePath} fill="white" /> */}
    </Svg>
  )
}
