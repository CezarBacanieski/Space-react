import styled from 'styled-components';
import NavItem from './NavItem';

const StylizedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const SideBar = () => {
  return (
    <aside>
      <nav>
        <StylizedList>
          <NavItem
            activeIcon='/icons/home-ativo.png'
            inactiveIcon='/icons/home-inativo.png'
            active={true}
          >
            Home
          </NavItem>
          <NavItem
            activeIcon='/icons/mais-vistas-ativo.png'
            inactiveIcon='/icons/mais-vistas-inativo.png'
            active={false}
          >
            Most Views
          </NavItem>
          <NavItem
            activeIcon='/icons/mais-curtidas-ativo.png'
            inactiveIcon='/icons/mais-curtidas-inativo.png'
            active={false}
          >
            Most likes
          </NavItem>
          <NavItem
            activeIcon='/icons/novas-ativo.png'
            inactiveIcon='/icons/novas-inativo.png'
            active={false}
          >
            News
          </NavItem>
          <NavItem
            activeIcon='/icons/surpreenda-me-ativo.png'
            inactiveIcon='/icons/surpreenda-me-inativo.png'
            active={false}
          >
            Surprise me
          </NavItem>
        </StylizedList>
      </nav>
    </aside>
  );
};

export default SideBar;
