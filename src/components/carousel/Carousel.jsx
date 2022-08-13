import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/200',
    // thumbnail: 'https://picsum.photos/200',
  },
  {
    original: 'https://picsum.photos/200',
    // thumbnail: 'https://picsum.photos/200',
  },
  {
    original: 'https://picsum.photos/200',
    // thumbnail: 'https://picsum.photos/200',
  },
];

const Carousel = () => {
    return (
        <>
            <ImageGallery items={images} />;
        </>        
    )
}

export default Carousel;