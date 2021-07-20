import React from 'react'

import Svg, { Path } from 'react-native-svg'
import Animated, { useAnimatedProps } from 'react-native-reanimated'

import { Props } from './types'

const AnimatedPath = Animated.createAnimatedComponent(Path)
const MULTIPLIER = 1
const HEIGHT = 100 * MULTIPLIER
const WIDTH = 22 * MULTIPLIER
const R = 2 * MULTIPLIER

export const Side = (props: Props) => {
  const { deg, isMirror = false } = props
  const sidePath = useAnimatedProps(() => {
    const d = `M00
      ${HEIGHT - WIDTH}c0
      ${R * 2}
      ${WIDTH}
      ${WIDTH + R * 2}
      ${WIDTH}
      ${WIDTH - R}v-${WIDTH / 2}V${WIDTH / 2}C${WIDTH}
      ${WIDTH / 2 - R}
      ${WIDTH / 2 + R}
      0
      ${WIDTH / 2}
      0S0
      ${WIDTH / 2 - R}
      0
      ${WIDTH / 2}v${HEIGHT - WIDTH - WIDTH / 2}z`
    return { d }
  })

  return (
    <Svg
      width={WIDTH}
      height={HEIGHT}
      style={{
        transform: [
          { scale: 1 },
          { rotateZ: deg },
          { rotateY: isMirror ? '0deg' : '180deg' },
        ],
      }}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
    >
      <AnimatedPath animatedProps={sidePath} fill="white" />
    </Svg>
  )
}
