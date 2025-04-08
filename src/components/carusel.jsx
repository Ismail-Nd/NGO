import React from 'react';

const LogoCarousel = () => {
    const logos = [
      '/src/assets/image.png',
      '/src/assets/image.png',
      '/src/assets/image.png',
      '/src/assets/image.png',
      '/src/assets/image.png',
      '/src/assets/image.png',
      '/src/assets/image.png',
      '/src/assets/image.png',
      '/src/assets/image.png',
      '/src/assets/image.png',
    ];
  
    return (
      <div className="w-full   flex  mt-10 mb-10 justify-center overflow-x-auto whitespace-nowrap scroll-smooth px-4 py-6">
        {logos.map((logo, index) => (
          <div key={index} className="inline-block mx-4">
            <img src={logo} alt={`Logo ${index + 1}`} className="h-24 w-auto object-contain" />
          </div>
        ))}
      </div>
    );
  };
  
  export default LogoCarousel;