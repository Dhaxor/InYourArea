import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Carousel/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Carousel />
      <Footer />
    </div>
  );
};

export default App;
