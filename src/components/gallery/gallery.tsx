type GalleryProps = {
  images: string[];
};

function Gallery({ images }: GalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image, index) => (
          <div className="offer__image-wrapper" key={`${image}-${String(index)}`}>
            <img className="offer__image" src={image} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
