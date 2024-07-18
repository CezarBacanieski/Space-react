import styled from 'styled-components';
import SearchInput from '../../Search';

const StylizedHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

const Header = () => {
  return (
    <StylizedHeader>
      <img src='images/logo.png' alt='logo image' />
      <SearchInput />
    </StylizedHeader>
  );
};

export default Header;
