import React from 'react';
import * as Vibrant from 'node-vibrant';
import MainContainer from '../MainContainer';
import { Tile } from '../../atoms/Image';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import styles from './style.css';

class ShowPage extends React.Component {
  constructor() {
    super();

    this.state = { bg: 'none' };

    this.currentPath = '';
    this.currentImage = '';
  }

  changeBgColor = (url) => {
    let v;

    if (Array.isArray(url) && url.length === 0) return;

    if (Array.isArray(url)) v = new Vibrant(url[0]);
    else if (url) v = new Vibrant(url);

    if (v) {
      v.getPalette((err, palette) => {
        if (palette.LightVibrant) {
          this.setState({ bg: palette.LightVibrant.getHex() });
        }
        else if (palette.Vibrant) {
          this.setState({ bg: palette.Vibrant.getHex() });
        }
        // console.log(palette.DarkMuted.getHex());
        // console.log(palette.DarkVibrant.getHex());
        // console.log(palette.LightMuted.getHex());
        // console.log(palette.LightVibrant.getHex());
        // console.log(palette.Muted.getHex());
        // console.log(palette.Vibrant.getHex());
      });
    }
  }

  // for user page(not me)
  componentWillReceiveProps(props) {
    if (props.thumbnailUrl !== this.currentImage) {
      this.changeBgColor(props.thumbnailUrl);
      this.currentImage = props.thumbnailUrl;
    }
  }

  componentDidMount() {
    if (this.props.thumbnailUrl !== '') this.changeBgColor(this.props.thumbnailUrl);
  }

  render() {
    const {
      info,
      title,
      buttons,
      pathname,
      children,
      thumbnailUrl
    } = this.props;

    // can't put on componentWillReceiveProps
    if (pathname !== this.currentPath) {
      this.changeBgColor();
      this.currentPath = pathname;
    }

    return (
      <MainContainer hasMainBoxPadding={false}>
        <div>
          <div
            style={{ background: `linear-gradient(to bottom, ${this.state.bg}, #fff` }}
            className={styles.container}
          >
            <div className={styles.img}>
              {
                Array.isArray(thumbnailUrl) ? (

                  <Tile
                    src={Array.isArray(thumbnailUrl) ?
                      thumbnailUrl.map((src) => `${src}.M`) :
                      []
                    }
                    size={180}
                    isCircle
                    className={styles.tile}
                  />
                ) : (
                  <img
                    src={thumbnailUrl}
                    width="150px"
                    height="150px"
                  />
                )
              }
            </div>
            <h1>{title}</h1>
            <div className={styles.info}>
              <div className={styles.left}>
                {
                  buttons.map((item) => (
                    <Button
                      onClick={item.onClick}
                      className={styles.site}
                    >
                      {item.title}
                    </Button>
                  ))
                }
              </div>
              <div className={styles.right}>
                {
                  info.map((item) => (
                    <Text
                      title={item.title}
                      text={item.text}
                    />
                  ))
                }
              </div>
            </div>
          </div>
          <div className={styles.main}>
            {children}
          </div>
        </div>
      </MainContainer>
    );
  }
}

export default ShowPage;
