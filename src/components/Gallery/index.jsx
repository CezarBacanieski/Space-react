import styled from 'styled-components';
import Titulo from '../Title';
import Tags from './Tags';
import Popular from './Popular';

const GalleryContainer = styled.div`
  display: flex;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const Gallery = ({ photos = [] }) => {
  return (
    <>
      <Tags />
      <GalleryContainer>
        <FluidSection>
          <Titulo>Browse the gallery</Titulo>
          <ul>
            {photos.map((photo) => (
              <li key={photo.titulo}>{photo.titulo}</li>
            ))}
          </ul>
        </FluidSection>
        <Popular />
      </GalleryContainer>
    </>
  );
};

export default Gallery;
