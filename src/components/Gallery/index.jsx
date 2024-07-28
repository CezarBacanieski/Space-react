import styled from 'styled-components';
import PropTypes from 'prop-types';
import Titulo from '../Title';
import Tags from './Tags';
import Popular from './Popular';
import Image from './GalleryImage';

const GalleryContainer = styled.div`
  display: flex;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const ImageContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Gallery = ({ photos = [] }) => {
  return (
    <>
      <Tags />
      <GalleryContainer>
        <FluidSection>
          <Titulo>Browse the gallery</Titulo>
          <ImageContainer>
            {photos.map((photo) => (
              <Image key={photo.id} photo={photo} />
            ))}
          </ImageContainer>
        </FluidSection>
        <Popular />
      </GalleryContainer>
    </>
  );
};

// Adicione a validação de propriedades
Gallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      path: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      titulo: PropTypes.string.isRequired,
      fonte: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Gallery;
