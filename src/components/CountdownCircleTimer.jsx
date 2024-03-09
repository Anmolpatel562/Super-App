import React from 'react'

import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const UrgeWithPleasureComponent = () => (
    <CountdownCircleTimer
      isPlaying
      duration={10}
      colors="#A30000"
      onComplete={() => {
        return { shouldRepeat: true, delay: 1.5 } 
      }}
    />
)
export default UrgeWithPleasureComponent;