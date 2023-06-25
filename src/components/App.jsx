import About from './About/About';
import SideBar from './SideBar/SideBar';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  background-color: #eeeced;
  padding: 15px;

  @media screen and (min-width: 576px) {
    flex-direction: row-reverse;
    width: 576px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 40px;
  }

  @media screen and (min-width: 992px) {
    width: 992px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

const Main = styled.div``;
/* max-width: 1240px;
  height: 100vh;
  margin: 0 auto;
  padding: 40px;
  flex-direction: row-reverse;
  justify-content: center;
  background-color: #e5e5e5; */

export const App = () => {
  return (
    <Main>
      <Container>
        <About />
        <SideBar />
      </Container>
    </Main>
  );
};
