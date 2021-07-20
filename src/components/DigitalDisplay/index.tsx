import React from 'react'
import { View } from 'react-native'

import { DigitalItems } from './DigitalItems'
import { Center } from './DigitalItems/Center'
import { Side } from './DigitalItems/Side'
import { Top } from './DigitalItems/Top'

export const DigitalDisplay = () => {
  const a = ''

  return (
    <View style={{ position: 'relative', width: 360 / 3 }}>
      <DigitalItems />
    </View>
  )
}
