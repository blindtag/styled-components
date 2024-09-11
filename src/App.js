import {Container} from './components/styled/Container.styled';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import {theme} from './components/styled/Theme.styled'
import GlobalStyles from './components/styled/Global';
import content from './content';
import Card from './components/Card';
import Footer from './components/Footer';


function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
       <GlobalStyles />
        <Header />
           <Container >
             {content.map((item, index)=>(
              <Card key={index} item={item} />
             ))}
           </Container>
           <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
