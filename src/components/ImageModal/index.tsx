import { Image } from '../../types/Image';
import * as C from './styles';

type Props = {
  image: Image | null;
  onClose: () => void;
}

export const ImageModal = ({ image, onClose }: Props) => {
  if (!image) return null;

  return (
    <C.ModalOverlay onClick={onClose}>
      <C.ModalContent onClick={(e) => e.stopPropagation()}>
        <img src={image.download_url} alt={image.author} />
        <button onClick={onClose}>Fechar</button>
      </C.ModalContent>
    </C.ModalOverlay>
  );
}