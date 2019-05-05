import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Media from 'react-media';
import './Slider.scss';

const items = [
  {
    src: 'https://i.ibb.co/F6XQrVc/kitty1000x500.png',
    altText: 'Kitten Placeholder1',
    title: 'Welcome to CatRat' ,
    caption: 'Keep calm and eat cats.'
  },
  {
    src: 'https://i.ibb.co/82bpWpg/cortex1000x500.png',
    altText: 'Kitten Placeholder2',
    title: 'Did you know ?' ,
    caption: 'Rats are clever than cats. Eat a cat, save a rat.'
  },
  {
    src: 'https://i.ibb.co/HXCcYfd/cooka1000x500.png',
    altText: 'Kitten Placeholder3',
    title: 'O Tempora O mores' ,
    caption: 'Eating cat meat is legal in most parts of the world, but not in NYC. Please check your local legislation before proceeding.'
  }
];

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <Media query="(max-width: 767px)">
            {matches =>
              matches ? (
                <p className="getDesktopPeeps">Smartphones and tablets ruin our planet every day.
               Because we support Mother Nature, this message will display on all barbarian resolutions.</p>
              ) : (
                <CarouselCaption captionText={item.caption} captionHeader={item.title} />
              )
            }
          </Media>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        className='Carourou'
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default Slider;