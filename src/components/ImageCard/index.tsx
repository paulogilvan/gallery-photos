import * as C from './styles';
import { Image } from '../../types/Image';

type ImageCardProps = {
  image: Image[];
  onClick: (image: Image) => void;
}

export const ImageCard = ({ image, onClick }: ImageCardProps) => {
    return (
      <C.Card onClick={() => onClick(image)}>
        <img src={image.download_url} alt={image.author} />
        <div className="info">
          <h3>{image.author}</h3>
        </div>
      </C.Card>
    );
}