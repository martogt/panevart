import AuthorCard from '../AuthorCard';
import AuthorImage from '@assets/generated_images/Contemporary_artist_portrait_3cd1e1cc.png';

export default function AuthorCardExample() {
  const sampleAuthor = {
    id: '1',
    name: 'Мария Петрова',
    bio: 'Съвременна художничка, специализираща в абстрактно изкуство и модерни техники на рисуване.',
    avatar: AuthorImage,
    artworksCount: 24,
    followersCount: 1205,
    categories: ['Абстрактно', 'Модерно', 'Портрети'],
    isFollowing: false
  };

  return (
    <div className="p-4 flex justify-center">
      <AuthorCard author={sampleAuthor} />
    </div>
  );
}