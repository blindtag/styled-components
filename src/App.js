import {Container} from './components/styled/Container.styled';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import {theme} from './components/styled/Theme.styled'
import GlobalStyles from './components/styled/Global';

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
       <GlobalStyles />
        <Header />
           <Container >
             <h1>Hello World</h1>
           </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
