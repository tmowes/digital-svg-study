import React from 'react'

import Svg, { Path } from 'react-native-svg'
import Animated, { useAnimatedProps } from 'react-native-reanimated'

const AnimatedPath = Animated.createAnimatedComponent(Path)
const MULTIPLIER = 1
const HEIGHT = 68 * MULTIPLIER
const WIDTH = 22 * MULTIPLIER
const HALF = WIDTH / 2
const R = 2 * MULTIPLIER

export const Center = () => {
  const centerPath = useAnimatedProps(() => {
    const d = `M00
      ${HEIGHT - WIDTH / 2 - R / 2}C0
      ${HEIGHT - WIDTH / 2 + R}
      ${WIDTH / 2 - R}
      ${HEIGHT}
      ${WIDTH / 2}
      ${HEIGHT}s${WIDTH / 2}-${WIDTH / 2 - R}
      ${HALF}-${HALF}V${HALF}c0-${R}-${HALF - R}-${HALF}-${HALF}-${HALF}S0
      ${WIDTH / 2 - R}
      0
      ${WIDTH / 2}v${HEIGHT - WIDTH / 2 - R / 2}z`
    return { d }
  })

  return (
    <Svg
      width={WIDTH}
      height={HEIGHT}
      style={{
        transform: [{ scale: 1 }, { rotateZ: '90deg' }],
        marginVertical: -WIDTH * 1.5,
      }}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
    >
      <AnimatedPath animatedProps={centerPath} fill="white" />
    </Svg>
  )
}
