import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { List } from "immutable";
import ImageGallery from "react-image-gallery";

import * as Config from "../../config/config.json";

import * as ApplicationConstants from "../../constants/application";

import { generateURL } from "../../modules/utilities";

import { getCarouselConfigAction } from "../../redux/actions/carousel-action";

import ErrorPage from "../error";
import Spinner from "../spinner";

class Carousel extends React.Component {

  constructor() {
    super();
    this.state = this.transformIncomingProps();
  }

  transformIncomingProps = props => {
    const state = {
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: 'bottom',
      showVideo: {},
      useWindowKeyDown: true,
      images: []
    };

    return state;
  };

  updateState = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  componentDidMount() {
    const { match } = this.props;
    const carouselRepo = match?.params?.carouselRepo ?? '';
    
    this.props.getCarouselConfig({carouselRepo});
  }

  componentDidUpdate(prevProps, prevState) {
    this.checkCarouselConfig(prevProps);
  }

  //ComponentDidUpdate check
  checkCarouselConfig = (prevProps) => {
    if(prevProps.carouselConfig !== this.props.carouselConfig) {
      const carouselConfigInit = this.props.carouselConfig.get(ApplicationConstants.PROP_INITIALIZED, false);
      const carouselConfigData = this.props.carouselConfig.getIn([ApplicationConstants.PROP_DATA, "images"], List([]));

      if(carouselConfigInit) {
        const convertDateToJS = carouselConfigData.toJS();
        const newImageStateArr = [];

        convertDateToJS.map(image => {
          let newImageSet;

          if(image['isVideo']) {
            newImageSet = this.handleIsVideoObject(image);
            return newImageStateArr.push(newImageSet ?? image);
          }

          if(image['isImageInLocal']) {
            newImageSet = this.handleLocalImage(image);
            return newImageStateArr.push(...newImageSet ?? image);
          }

          return newImageStateArr.push(image);
        })

        this.updateState('images', newImageStateArr);
      }
    }
  }

  handleIsVideoObject = (imageObj) => {
    return imageObj['isVideo'] && Object.assign({}, imageObj, {'renderItem': this._renderVideo.bind(imageObj)});
  }

  handleLocalImage = (imageObj) => {
    const carouselRepo = this.props.carouselConfig.getIn([ApplicationConstants.PROP_OTHER, 'carouselRepo'], '');
    const url = generateURL(`${Config.source_URL}/`,{carouselRepo});

    const indexStart = imageObj['indexStart'] ?? 0;
    const indexEnd = imageObj['indexEnd'] ?? 0;
    let localImageArr = [];

    for(let i = indexStart; i <= indexEnd; i++) {
      localImageArr.push({
        original: `${url}${i}.jpg`,
        thumbnail:`${url}${i}.jpg`
      })
    }
    return localImageArr;
  }

  renderSpinner = () => {
    return <Spinner />
  }

  renderErrorPage = () => {
    const errorStatus = this.props.carouselConfig.get(ApplicationConstants.PROP_STATUS, 0);
    const errorData = this.props.carouselConfig.getIn([ApplicationConstants.PROP_DATA, "data"], '');

    return <ErrorPage status={errorStatus} data={errorData}/>
  }


  //private functions
  _onImageClick = (event) => {
    console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
  }

  _onImageLoad = (event) => {
    console.debug('loaded image', event.target.src);
  }

  _onSlide = (index) => {
    this._resetVideo();
    console.debug('slid to index', index);
  }

  _onPause = (index) => {
    console.debug('paused on index', index);
  }

  _onScreenChange = (fullScreenElement) => {
    console.debug('isFullScreen?', !!fullScreenElement);
  }

  _onPlay = (index) => {
    console.debug('playing from index', index);
  }

  _handleInputChange = (state, event) => {
    if (event.target.value > 0) {
      this.setState({[state]: event.target.value});
    }
  }

  _handleCheckboxChange = (state, event) => {
    this.setState({[state]: event.target.checked});
  }

  _handleThumbnailPositionChange = (event) => {
    this.setState({thumbnailPosition: event.target.value});
  }

  _resetVideo = () => {
    this.setState({showVideo: {}});

    if (this.state.showPlayButton) {
      this.setState({showGalleryPlayButton: true});
    }

    if (this.state.showFullscreenButton) {
      this.setState({showGalleryFullscreenButton: true});
    }
  }

  _toggleShowVideo = (url) => {
    this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
    this.setState({
      showVideo: this.state.showVideo
    });

    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({showGalleryPlayButton: false});
      }

      if (this.state.showFullscreenButton) {
        this.setState({showGalleryFullscreenButton: false});
      }
    }
  }

  _renderVideo = (item) => {
    return (
      <div>
        {
          this.state.showVideo[item.embedUrl] ?
            <div className='video-wrapper'>
                <button
                  className='close-video'
                  onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
                >
                </button>
                <iframe
                  width='560'
                  height='315'
                  title={item.embedUrl}
                  src={item.embedUrl}
                  frameBorder='0'
                  allowFullScreen
                >
                </iframe>
            </div>
          :
            <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
              <div className='play-button'></div>
              <img className='image-gallery-image' src={item.original} alt="Video thumbnail"/>
              {
                item.description &&
                  <span
                    className='image-gallery-description'
                    style={{right: '0', left: 'initial'}}
                  >
                    {item.description}
                  </span>
              }
            </a>
        }
      </div>
    );
  }

  render() {
    const isFetching = this.props.carouselConfig.get(ApplicationConstants.PROP_FETCHING, false);
    const isError = this.props.carouselConfig.get(ApplicationConstants.PROP_ERROR, false);

    if(isFetching) {
      return this.renderSpinner();
    }
    
    if(isError) {
      return this.renderErrorPage();
    }

    return (
      <section className='app'>
        <ImageGallery
          ref={i => this._imageGallery = i}
          items={this.state.images}
          onClick={this._onImageClick.bind(this)}
          onImageLoad={this._onImageLoad}
          onSlide={this._onSlide.bind(this)}
          onPause={this._onPause.bind(this)}
          onScreenChange={this._onScreenChange.bind(this)}
          onPlay={this._onPlay.bind(this)}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
          showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          isRTL={this.state.isRTL}
          thumbnailPosition={this.state.thumbnailPosition}
          slideDuration={parseInt(this.state.slideDuration)}
          slideInterval={parseInt(this.state.slideInterval)}
          slideOnThumbnailOver={this.state.slideOnThumbnailOver}
          additionalClass="app-image-gallery"
          useWindowKeyDown={this.state.useWindowKeyDown}
        />

        <div className='app-sandbox'>

          <div className='app-sandbox-content'>
            <h2 className='app-header'>Settings <Link className="button-like-link" to="/" replace>Back to Landing Page</Link></h2>

            <ul className='app-buttons'>
              <li>
                <div className='app-interval-input-group'>
                  <span className='app-interval-label'>Play Interval</span>
                  <input
                    className='app-interval-input'
                    type='text'
                    onChange={this._handleInputChange.bind(this, 'slideInterval')}
                    value={this.state.slideInterval}/>
                </div>
              </li>

              <li>
                <div className='app-interval-input-group'>
                  <span className='app-interval-label'>Slide Duration</span>
                  <input
                    className='app-interval-input'
                    type='text'
                    onChange={this._handleInputChange.bind(this, 'slideDuration')}
                    value={this.state.slideDuration}/>
                </div>
              </li>

              <li>
                <div className='app-interval-input-group'>
                  <span className='app-interval-label'>Thumbnail Bar Position</span>
                  <select
                    className='app-interval-input'
                    value={this.state.thumbnailPosition}
                    onChange={this._handleThumbnailPositionChange.bind(this)}
                  >
                    <option value='bottom'>Bottom</option>
                    <option value='top'>Top</option>
                    <option value='left'>Left</option>
                    <option value='right'>Right</option>
                  </select>
                </div>
              </li>
            </ul>

            <ul className='app-checkboxes'>
              <li>
                <input
                  id='infinite'
                  type='checkbox'
                  onChange={this._handleCheckboxChange.bind(this, 'infinite')}
                  checked={this.state.infinite}/>
                  <label htmlFor='infinite'>allow infinite sliding</label>
              </li>
              <li>
                <input
                  id='show_fullscreen'
                  type='checkbox'
                  onChange={this._handleCheckboxChange.bind(this, 'showFullscreenButton')}
                  checked={this.state.showFullscreenButton}/>
                  <label htmlFor='show_fullscreen'>show fullscreen button</label>
              </li>
              <li>
                <input
                  id='show_playbutton'
                  type='checkbox'
                  onChange={this._handleCheckboxChange.bind(this, 'showPlayButton')}
                  checked={this.state.showPlayButton}/>
                  <label htmlFor='show_playbutton'>show play button</label>
              </li>
              <li>
                <input
                  id='show_bullets'
                  type='checkbox'
                  onChange={this._handleCheckboxChange.bind(this, 'showBullets')}
                  checked={this.state.showBullets}/>
                  <label htmlFor='show_bullets'>show bullets</label>
              </li>
              <li>
                <input
                  id='show_thumbnails'
                  type='checkbox'
                  onChange={this._handleCheckboxChange.bind(this, 'showThumbnails')}
                  checked={this.state.showThumbnails}/>
                  <label htmlFor='show_thumbnails'>show thumbnails</label>
              </li>
              <li>
                <input
                  id='show_navigation'
                  type='checkbox'
                  onChange={this._handleCheckboxChange.bind(this, 'showNav')}
                  checked={this.state.showNav}/>
                  <label htmlFor='show_navigation'>show navigation</label>
              </li>
              <li>
                <input
                  id='show_index'
                  type='checkbox'
                  onChange={this._handleCheckboxChange.bind(this, 'showIndex')}
                  checked={this.state.showIndex}/>
                  <label htmlFor='show_index'>show index</label>
              </li>
              <li>
                <input
                  id='is_rtl'
                  type='checkbox'
                  onChange={this._handleCheckboxChange.bind(this, 'isRTL')}
                  checked={this.state.isRTL}/>
                  <label htmlFor='is_rtl'>is right to left</label>
              </li>
              <li>
                <input
                  id='slide_on_thumbnail_hover'
                  type='checkbox'
                  onChange={this._handleCheckboxChange.bind(this, 'slideOnThumbnailOver')}
                  checked={this.state.slideOnThumbnailOver}/>
                  <label htmlFor='slide_on_thumbnail_hover'>slide on mouse over thumbnails</label>
              </li>
              <li>
                <input
                  id='use_window_keydown'
                  type='checkbox'
                  onChange={this._handleCheckboxChange.bind(this, 'useWindowKeyDown')}
                  checked={this.state.useWindowKeyDown}/>
                  <label htmlFor='use_window_keydown'>use window keydown</label>
              </li>
            </ul>
          </div>

        </div>
      </section>
    );
  }
}

export const mapStateToProps = store => {
  return {
    carouselConfig: store.CarouselReducer.carouselConfig
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getCarouselConfig: data => {
      dispatch(getCarouselConfigAction(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);

