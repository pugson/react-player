import React, { Component } from 'react'

import { defaultProps } from './props'
import Player from './Player'
import { getConfig } from './utils'

export default function createSinglePlayer (activePlayer) {
  return class SinglePlayer extends Component {
    static displayName = `${activePlayer.displayName}Player`
    static canPlay = activePlayer.canPlay

    render () {
      if (!activePlayer.canPlay(this.props.url)) {
        return null
      }
      return (
        <Player
          {...this.props}
          activePlayer={activePlayer}
          config={getConfig(this.props, defaultProps)}
        />
      )
    }
  }
}
