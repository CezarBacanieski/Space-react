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

const Gallery = () => {
  return (
    <>
      <Tags />
      <GalleryContainer>
        <FluidSection>
          <Titulo>Browse the gallery</Titulo>
        </FluidSection>

        <Popular />
      </GalleryContainer>
    </>
  );
};

export default Gallery;
