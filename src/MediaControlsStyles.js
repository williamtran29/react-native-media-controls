// @flow

// eslint ignore next $FlowFixMe
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controlsRow: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  toolbarRow: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  toolbar: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  timeRow: {
    alignSelf: 'stretch',
  },
  playButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderColor: 'white',
    borderWidth: 1,
    marginRight: 20,
    borderRadius: 3,
  },
  loadingIcon: {
    marginRight: 20,
  },
  playIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  replayIcon: {
    width: 25,
    height: 20,
    resizeMode: 'stretch',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  progressColumnContainer: {
    flex: 1,
  },
  fullScreenContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  progressSlider: {
    alignSelf: 'stretch',
  },
  timerLabelsContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -7,
  },
  timerLabel: {
    fontSize: 12,
    color: 'white',
  },
  track: {
    height: 5,
    borderRadius: 1,
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
  },
});
