// @flow

import React from 'react';
import type { Props } from '../../../containers/Player/Audio';

class Audio extends React.PureComponent<Props, void> {
  audio: HTMLAudioElement;

  play() {

    // This is automatically played from here
    // if specify the time in updateElapsedTime.
    this.audio.currentTime = this.props.elapsedTime;
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  changeVolume(volume: number) {
    if (this.audio) {
      this.audio.volume = volume;
    }
  }

  notifyEnded = () => {
    this.props.playSpecificAudio(this.props.index + 1);
  }

  monitorEvents() {
    this.audio.addEventListener('ended', () => {
      this.notifyEnded();
    }, false);

    this.audio.addEventListener('loadedmetadata', () => {
      if (typeof this.props.getDuration === 'function') {
        this.props.getDuration(this.audio.duration);
      }
    }, false);

    this.audio.addEventListener('waiting', () => {

      // start loading
      this.props.changeLoadingStatus(true);
    }, false);

    this.audio.addEventListener('canplay', () => {

      // finish loading
      this.props.changeLoadingStatus(false);
    }, false);

  }

  componentDidMount() {
    this.getElapsedTime();
    this.monitorEvents();
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.status !== nextProps.status) { // toggle status
      nextProps.status ? this.play() : this.pause();
    }
    if (this.props.volume !== nextProps.volume) {
      this.changeVolume(this.props.volume);
    }
  }

  componentWillUnmount() {
    this.audio.pause();
  }

  getElapsedTime() {
    if (typeof this.props.updateElapsedTime === 'function') {
      this.audio.addEventListener('timeupdate', () => {
        this.props.updateElapsedTime(this.audio.currentTime || 0);
      }, false);
    }
  }

  render() {
    const {
      src,
      looped
    } = this.props;

    return (
      <audio
        ref={(audio) => {
          if (audio) this.audio = audio;
        }}
        src={src}
        loop={looped}
        autoPlay
        preload="auto"
        notifyEnded={this.notifyEnded}
      />
    );
  }
}

export default Audio;
