import { useState, useEffect } from 'react';
import axios from 'axios';
import * as C from './styles';
import { ImageCard } from '../ImageCard';
import { Image } from '../../types/Image';
import { ImageModal } from '../ImageModal';
import { FaSpinner } from 'react-icons/fa';

export const ImageGallery = () => {
    const [images, setImages] = useState<Image[]>([]);
    const [selectedImage, setSelectedImage] = useState<Image[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
          try {
            const response = await axios.get<Image[]>('https://picsum.photos/v2/list');
            setImages(response.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching images:', error);
            setLoading(false);
          }
        };
    
        fetchImages();
      }, []);

      const handleImageClick = (image: Image) => {
        setSelectedImage(image);
      };

      const handleCloseModal = () => {
        setSelectedImage(null);
      };

    return (
        <C.Container>
            <C.Title>Galeria de Imagens</C.Title>            
            {loading ? 
            (
              <C.LoadingSpinner>
                <FaSpinner className="spinner" />
              </C.LoadingSpinner>
            ) : 
            (
              <C.Gallery>
              {images.map(image => (
              <ImageCard key={image.id} image={image} onClick={handleImageClick} />
              ))}
              </C.Gallery>
            )}
            <ImageModal image={selectedImage} onClose={handleCloseModal} />
        </C.Container>
    );
}
