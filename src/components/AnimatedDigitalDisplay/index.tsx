import React from 'react'
import { View } from 'react-native'

import { Center } from './DigitalItems/Center'
import { Side } from './DigitalItems/Side'
import { Top } from './DigitalItems/Top'

export const AnimatedDigitalDisplay = () => {
  const a = ''

  return (
    <View
      style={{
        alignItems: 'center',
        // backgroundColor: 'red',
      }}
    >
      <Top deg="270deg" />
      <View
        style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between' }}
      >
        <Side deg="180deg" isMirror />
        <Side deg="180deg" />
      </View>
      <Center />
      <View
        style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between' }}
      >
        <Side deg="0deg" />
        <Side deg="0deg" isMirror />
      </View>
      <Top deg="90deg" />
    </View>
  )
}
