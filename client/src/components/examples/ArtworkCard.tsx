import ArtworkCard from '../ArtworkCard';
import ArtworkImage from '@assets/generated_images/Abstract_modern_painting_0be10114.png';

export default function ArtworkCardExample() {
  const sampleArtwork = {
    id: '1',
    title: 'Абстрактни форми',
    artist: 'Мария Петрова',
    image: ArtworkImage,
    category: 'Абстрактно',
    price: 1200,
    rating: 5,
    reviewsCount: 24,
    isLiked: false,
    dimensions: '80x60 см',
    year: 2024
  };

  return (
    <div className="p-4 flex justify-center">
      <ArtworkCard artwork={sampleArtwork} />
    </div>
  );
}