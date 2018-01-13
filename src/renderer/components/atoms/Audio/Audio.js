// @flow

import React from 'react';

type Props = {
  src: string;
  looped: boolean;
  status: boolean;
  volume: number;
  elapsedTime: number;
  notifyEnded: () => {};
  updateElapsedTime: () => {};
  changeLoadingStatus: (boolean) => {};
};

class Audio extends React.Component<void, Props, void> {
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

  monitorEvents() {
    this.audio.addEventListener('ended', () => {
      if (typeof this.props.notifyEnded === 'function') {
        this.props.notifyEnded();
      }
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
      looped,
      notifyEnded
    } = this.props;

    return (
      <audio
        ref={(audio) => this.audio = audio}
        src={src}
        loop={looped}
        autoPlay
        preload="auto"
        notifyEnded={notifyEnded}
      />
    );
  }
}

export default Audio;
