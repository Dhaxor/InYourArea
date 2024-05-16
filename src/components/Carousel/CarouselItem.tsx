import React from 'react';
import './CarouselItem.css';
import { CarouselItem as CarouselItemType } from '../../types/CarouselItem';

interface CarouselItemProps {
  item: CarouselItemType;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ item }) => {
  return (
    <div className="carousel-item">
      <div className="main-section">
        <img src={item.image.url} alt={item.title} />
      </div>
      <div className="item-content">
        <h3 className="item-title">{item.title}</h3>
      </div>

      <button className="read-more-button">
        Read more <span className="arrow-icon">&#8250;</span>
      </button>
    </div>
  );
};

export default CarouselItem;