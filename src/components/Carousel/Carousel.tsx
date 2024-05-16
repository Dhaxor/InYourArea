import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselItem from './CarouselItem';
import './Carousel.css';
import { CarouselItem as CarouselItemType } from '../../types/CarouselItem';
import { getCarouselItems } from '../../services/api';

const Carousel: React.FC = () => {
  const [carouselItems, setCarouselItems] = useState<CarouselItemType[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCarouselItems();
        setCarouselItems(data);
      } catch (error) {
        console.error('Error fetching carousel items:', error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    afterChange: (current: number) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === carouselItems.length - settings.slidesToShow;

  return (
    <div className="carousel">
      <div className="carousel-header">
        <h2 className="carousel-title">Car costs rising?</h2>
        <div className="carousel-arrows">
          <button
            className={`carousel-arrow prev-arrow ${isFirstSlide ? 'faded' : ''}`}
            onClick={handlePrev}
            disabled={isFirstSlide}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            className={`carousel-arrow next-arrow ${isLastSlide ? 'faded' : ''}`}
            onClick={handleNext}
            disabled={isLastSlide}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="carousel-heading_secondary">
        <span>Find out how you could save...</span>
      </div>
      <div className="carousel-container">
        <Slider ref={sliderRef} {...settings}>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;