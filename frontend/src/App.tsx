import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import HeaderComponent from "./components/header";
import Main from './components/main';
import { BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <HeaderComponent/>
    <Container fluid>
      <Main/>
    </Container>
      </BrowserRouter>
    
  )
}

export default App
