import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import HeaderComponent from "./components/header/header";
import Main from './components/main';
import Footer from './components/footer';
import { BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <HeaderComponent/>
    <Container fluid>
      <Main/>
    </Container>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
