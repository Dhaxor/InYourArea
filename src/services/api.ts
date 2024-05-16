import axios from 'axios';
import { CarouselItem } from '../types/CarouselItem';

export const getCarouselItems = async (): Promise<CarouselItem[]> => {
  const response = await axios.get<CarouselItem[]>(
    'https://content.inyourarea.co.uk/ext/search?type=technicalTaskCarouselItem&env=dev'
  );
  return response.data;
};