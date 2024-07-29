import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconButton from '../../IconButton';

const Figure = styled.figure`
  width: ${(props) => (props.$expanded ? '90%' : '460px')};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: 'GandhiSansBold';
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

// const Container = styled.div`
//   /* Estilos para todas as telas */
//   width: 100%;

//   @media (min-width: 768px) {
//     /* Estilos para telas a partir de 768px */
//     width: 80%;
//   }

//   @media (min-width: 1200px) {
//     /* Estilos para telas a partir de 1200px */
//     width: 60%;
//   }
// `;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = ({
  photo,
  expanded = false,
  onRequestedZoom,
  onSwitchingFavorites,
}) => {
  const favoriteIcon = photo.favorite
    ? '/icons/favorito-ativo.png'
    : '/icons/favorito.png';

  return (
    <Figure $expanded={expanded} id={`photo-${photo.id}`}>
      <img src={photo.path} alt={photo.alt || 'photo'} />
      <figcaption>
        <h3>{photo.titulo}</h3>
        <Footer>
          <h4>{photo.fonte}</h4>
          <IconButton onClick={() => onSwitchingFavorites(photo)}>
            <img src={favoriteIcon} alt='favorite icon' />
          </IconButton>
          {!expanded && (
            <IconButton
              aria-hidden={expanded}
              onClick={() => onRequestedZoom(photo)}
            >
              <img src='/icons/expandir.png' alt='expand icon' />
            </IconButton>
          )}
        </Footer>
      </figcaption>
    </Figure>
  );
};

Image.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    path: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    fonte: PropTypes.string.isRequired,
  }).isRequired,
  expanded: PropTypes.bool,
};

export default Image;
