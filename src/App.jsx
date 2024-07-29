import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Banner from './components/Banner';
import bannerBackground from './assets/banner.png';
import Gallery from './components/Gallery';

import photos from './fotos.json';
import { useState } from 'react';
import ZoomModal from './components/ZoomModal';

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;
const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const onSwitchingFavorites = (photo) => {
    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite,
      });
    }
    setGalleryPhotos(
      galleryPhotos.map((galleryPhoto) => {
        return {
          ...galleryPhoto,
          favorite:
            galleryPhoto.id === photo.id
              ? !photo.favorite
              : galleryPhoto.favorite,
        };
      })
    );
  };

  return (
    <FundoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <GalleryContent>
            <Banner
              text='The most complete gallery of space photos!'
              backgroundImage={bannerBackground}
            />
            <Gallery
              onPhotoSelected={(photo) => setSelectedPhoto(photo)}
              onSwitchingFavorites={onSwitchingFavorites}
              photos={galleryPhotos}
            />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <ZoomModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onSwitchingFavorites={onSwitchingFavorites}
      />
    </FundoGradiente>
  );
};

export default App;
