import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import SideBar from './components/SideBar';

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

function App() {
  return (
    <FundoGradiente>
      <GlobalStyles />
      <Header />
      <SideBar />
    </FundoGradiente>
  );
}

export default App;
