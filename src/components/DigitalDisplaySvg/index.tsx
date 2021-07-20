import React from 'react'
import { View } from 'react-native'

import Svg, { Path } from 'react-native-svg'

export const DigitalDisplaySvg = () => {
  const a = ''

  const HEIGHT = 200
  const WIDTH = HEIGHT * 0.6
  const STK = HEIGHT * 0.11
  const HALF = STK / 2
  const RADIUS = 4 / HEIGHT
  const R = HEIGHT * RADIUS
  const DR = HEIGHT * RADIUS * 2
  const HR = (HEIGHT * RADIUS) / 2

  const WIDTHLSTK = WIDTH - STK
  const WIDTHLHLF1 = WIDTH - HALF
  const WIDTHLHLF = WIDTH - HALF + HR
  const CENTER = WIDTHLSTK - (R + HR)
  const CENTERW = WIDTHLSTK + HR

  const BOTTOMW = CENTERW + HR

  const STKPR = STK + R
  const STKPDR = STK - DR
  const STKMR = STK - R
  const BOTTOMI = STKMR + STKPDR - HR / 2
  const TOPMI = WIDTH - BOTTOMI + HR / 2

  const HEIGHTSTK = HEIGHT - STK

  const BOTTOMHEIGHT = WIDTH - STK * 2

  const TOPHEIGHT = WIDTH - STK - HALF
  const TOP2HEIGHT = WIDTH - STK - HALF + R + HR / 2

  console.log({
    TOP2HEIGHT,
    TOPHEIGHT,
    BOTTOMHEIGHT,
    HEIGHT,
    WIDTH,
    STK,
    HALF,
    RADIUS,
    R,
    DR,
    HR,
    WIDTHLSTK,
    WIDTHLHLF1,
    WIDTHLHLF,
    STKPR,
    STKPDR,
    STKMR,
    HEIGHTSTK,
    CENTERW,
    BOTTOMW,
  })

  return (
    <View style={{ position: 'relative', transform: [{ scale: 1 }] }}>
      <Svg width={WIDTH} height={HEIGHT} viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
        <Path
          d={`M${TOPMI} ${STK}c${R} 0 ${STKPR}-${STK} ${STK}-${STK}H0 ${DR}c-${R} 0 ${STKMR} ${STK} ${STK} ${STK}h0z`}
          fill="white"
        />
        <Path
          d={`M${STK} ${STK}C${STK} ${STKMR} 0-${R} 0 ${HR}V${TOPHEIGHT}C0 ${TOP2HEIGHT} ${DR} ${WIDTHLSTK} ${HALF} ${WIDTHLSTK}s${HALF}-${DR} ${HALF}-${HALF}V0z`}
          fill="orange"
        />
        <Path
          d={`M${WIDTHLSTK} ${STK}c0-${R} ${STK}-${STKPR} ${STK}-${STK}V${TOPHEIGHT}C${WIDTH} ${TOP2HEIGHT} ${WIDTHLHLF} ${WIDTHLSTK} ${WIDTHLHLF1} ${WIDTHLSTK}s-${HALF}-${DR}-${HALF}-${HALF}V0z`}
          fill="red"
        />
        <Path
          d={`M${CENTER} ${WIDTHLHLF}c${HR} 0 ${HALF}-${DR} ${HALF}-${HALF}s-${DR}-${HALF}-${HALF}-${HALF}H${STKPR}C${STKPR} ${TOPHEIGHT} ${STKMR} ${WIDTHLSTK} ${STKMR} ${CENTERW}s${DR} ${HALF} ${HALF} ${HALF}h0z`}
          fill="white"
        />
        <Path
          d={`M${STK} ${HEIGHTSTK}c0 ${R}-${STK} ${STKPR}-${STK} ${STK}v-${HALF}-${BOTTOMHEIGHT}C0 ${WIDTHLHLF1} ${DR} ${BOTTOMW} ${HALF} ${BOTTOMW}s${HALF} ${DR} ${HALF} ${HALF}v0z`}
          fill="gray"
        />
        <Path
          d={`M${WIDTHLSTK} ${HEIGHTSTK}c0 ${R} ${STK} ${STKPR} ${STK} ${STK}v-${HALF}-${BOTTOMHEIGHT}c0-${HR}-${DR}-${HALF}-${HALF}-${HALF}s-${HALF} ${DR}-${HALF} ${HALF}v0z`}
          fill="gray"
        />
        <Path
          d={`M${BOTTOMI} ${HEIGHTSTK}c-${R} 0-${STKPR} ${STK}-${STK} ${STK}h${BOTTOMW}c${R} 0-${STKMR}-${STK}-${STK}-${STK}h0z`}
          fill="white"
        />
      </Svg>
    </View>
  )
}
