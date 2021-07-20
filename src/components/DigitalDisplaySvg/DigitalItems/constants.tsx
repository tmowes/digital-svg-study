import Animated from 'react-native-reanimated'
import { Path } from 'react-native-svg'

export const AnimatedPath = Animated.createAnimatedComponent(Path)

export const MULTIPLIER = 2
export const HEIGHT = 100 * MULTIPLIER
export const CENTER = 80 * MULTIPLIER
export const WIDTH = 22 * MULTIPLIER
export const HALF = WIDTH / 2
export const R = 2 * MULTIPLIER
export const SIZE = 360

export const sidePath = `M00
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

export const topPath = `M00
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

export const centerPath = `M00
${CENTER - WIDTH / 2 - R / 2}C0
${CENTER - WIDTH / 2 + R}
${WIDTH / 2 - R}
${CENTER}
${WIDTH / 2}
${CENTER}s${WIDTH / 2}-${WIDTH / 2 - R}
${HALF}-${HALF}V${HALF}c0-${R}-${HALF - R}-${HALF}-${HALF}-${HALF}S0
${WIDTH / 2 - R}
0
${WIDTH / 2}v${CENTER - WIDTH / 2 - R / 2}z`
