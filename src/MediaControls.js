// @flow

import React, { Component, type Node } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
  Image,
  // eslint ignore next $FlowFixMe
} from 'react-native';
import Slider from 'react-native-slider';
import styles from './MediaControlsStyles';
import { humanizeVideoDuration, noop } from './Utils';
import PLAYER_STATES, { type PlayerState } from './Constants';

type Props = {
  toolbar: Node,
  mainColor: string,
  isLoading: boolean,
  progress: number,
  duration: number,
  playerState: PlayerState,
  onFullScreen: Function,
  onPaused: Function,
  onReplay: Function,
  onSeek: Function,
  onSeeking: Function,
};
type State = {};
class MediaControls extends Component<Props, State> {
  static defaultProps = {
    isFullScreen: false,
    isLoading: false,
    mainColor: 'rgba(12, 83, 175, 0.9)',
    onFullScreen: noop,
    onReplay: noop,
    onSeeking: noop,
  };

  onReplay = () => {
    this.props.onReplay();
  };

  onPause = () => {
    const { playerState, onPaused } = this.props;
    const { PLAYING, PAUSED } = PLAYER_STATES;
    switch (playerState) {
      case PLAYING: {
        break;
      }
      case PAUSED: {
        break;
      }
      default:
        break;
    }

    const newPlayerState = playerState === PLAYING ? PAUSED : PLAYING;
    return onPaused(newPlayerState);
  };

  setLoadingView = () => (
    <ActivityIndicator style={styles.loadingIcon} size={16} color="#FFF" />
  );

  setPlayerControls = (playerState: PlayerState) => {
    const icon = this.getPlayerStateIcon(playerState);
    const pressAction =
      playerState === PLAYER_STATES.ENDED ? this.onReplay : this.onPause;
    return (
      <TouchableOpacity style={[styles.playButton]} onPress={pressAction}>
        <Image source={icon} tintColor="white" style={styles.playIcon} />
      </TouchableOpacity>
    );
  };

  getPlayerStateIcon = (playerState: PlayerState) => {
    switch (playerState) {
      case PLAYER_STATES.PAUSED:
        // eslint ignore next $FlowFixMe
        return require('./assets/ic_play.png');
      case PLAYER_STATES.PLAYING:
        // eslint ignore next $FlowFixMe
        return require('./assets/ic_pause.png');
      case PLAYER_STATES.ENDED:
        // eslint ignore next $FlowFixMe
        return require('./assets/ic_replay.png');
      default:
        return null;
    }
  };

  dragging = (value: number) => {
    const { onSeeking, playerState } = this.props;

    onSeeking(value);
    if (playerState === PLAYER_STATES.PAUSED) return;

    this.onPause();
  };

  seekVideo = (value: number) => {
    this.props.onSeek(value);
    this.onPause();
  };

  renderControls() {
    const {
      duration,
      isLoading,
      mainColor,
      onFullScreen,
      playerState,
      progress,
      toolbar,
    } = this.props;

    // eslint ignore next $FlowFixMe
    const fullScreenImage = require('./assets/ic_fullscreen.png');
    return (
      <View style={styles.container}>
        <View style={[styles.controlsRow, styles.toolbarRow]}>{toolbar}</View>
        <View style={[styles.controlsRow, styles.progressContainer]}>
          <View>
            {isLoading
              ? this.setLoadingView()
              : this.setPlayerControls(playerState)}
          </View>
          <View style={styles.progressColumnContainer}>
            <View style={[styles.timerLabelsContainer]}>
              <Text style={styles.timerLabel}>
                {humanizeVideoDuration(progress)}
              </Text>
              <Text style={styles.timerLabel}>
                {humanizeVideoDuration(duration)}
              </Text>
            </View>
            <Slider
              style={styles.progressSlider}
              onValueChange={this.dragging}
              onSlidingComplete={this.seekVideo}
              maximumValue={Math.floor(duration)}
              value={Math.floor(progress)}
              trackStyle={styles.track}
              thumbStyle={[styles.thumb, { borderColor: mainColor }]}
              minimumTrackTintColor={mainColor}
            />
          </View>
          <TouchableOpacity
            style={styles.fullScreenContainer}
            onPress={onFullScreen}
          >
            <Image style={styles.fullScreenImage} source={fullScreenImage} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return <View style={styles.container}>{this.renderControls()}</View>;
  }
}

export default MediaControls;
