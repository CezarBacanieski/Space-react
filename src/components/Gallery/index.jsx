import styled from 'styled-components';
import Titulo from '../Title';
import Tags from './Tags';
import Popular from './Popular';

const ContainerGallery = styled.div`
  display: flex;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const Gallery = () => {
  return (
    <>
      <Tags />
      <ContainerGallery>
        <FluidSection>
          <Titulo>Browse the gallery</Titulo>
        </FluidSection>

        <Popular />
      </ContainerGallery>
    </>
  );
};

export default Gallery;
