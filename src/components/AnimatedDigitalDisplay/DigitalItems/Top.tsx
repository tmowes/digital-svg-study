import React from 'react'

import Svg, { Path } from 'react-native-svg'
import Animated, { useAnimatedProps } from 'react-native-reanimated'

import { Props } from './types'

const AnimatedPath = Animated.createAnimatedComponent(Path)
const MULTIPLIER = 1
const HEIGHT = 100 * MULTIPLIER
const WIDTH = 22 * MULTIPLIER * 0.9
const R = 2 * MULTIPLIER

export const Top = (props: Props) => {
  const { deg } = props

  const topPath = useAnimatedProps(() => {
    const d = `M00
        ${HEIGHT - WIDTH}c0
        ${R * 2}
        ${WIDTH}
        ${WIDTH + R * 2}
        ${WIDTH}
        ${WIDTH - R / 2}V${HEIGHT - WIDTH / 2}
        ${WIDTH / 2}
        0C${WIDTH}-${R * 2}
        0
        ${WIDTH - R * 2}
        0
        ${WIDTH}v${HEIGHT - WIDTH * 2}z`
    return { d }
  })

  return (
    <Svg
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      style={{
        transform: [{ rotateZ: deg }],
        marginVertical: -WIDTH * 2.65,
      }}
    >
      <AnimatedPath animatedProps={topPath} fill="white" />
    </Svg>
  )
}
